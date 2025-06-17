'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function TranslateWidget() {
  const pathname = usePathname();
  const [baseUrl, setBaseUrl] = useState('');
  
  useEffect(() => {
    // Set the base URL once when component mounts
    setBaseUrl(window.location.origin);
  }, []);
  
  useEffect(() => {
    // Update translation links whenever the pathname changes
    if (!baseUrl) return;
    
    const currentUrl = `${baseUrl}${pathname}`;
    
    // Link to translate to French
    const frenchLink = document.getElementById('translate-to-french') as HTMLAnchorElement | null;
    if (frenchLink) {
      frenchLink.href = `https://translate.google.com/translate?sl=auto&tl=fr&u=${encodeURIComponent(currentUrl)}`;
      frenchLink.target = '_blank'; // Opens the translated page in a new tab
    }
  }, [pathname, baseUrl]);

  const handleEnglishClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // If we're in a Google Translate frame, break out to the original site
    if (window.top !== window.self) {
      if (window.top) {
        window.top.location.href = baseUrl + pathname;
      }
    } else {
      // Just reload the current page if we're already on the original site
      window.location.reload();
    }
  };

  return (
    <div id="language-translator" className="fixed bottom-4 right-4 bg-white p-2 rounded shadow-md text-sm">
      <span>Translate to:</span>{' '}
      <a href="#" id="translate-to-french" className="text-blue-600 hover:underline">Français</a> |{' '}
      <a href="#" onClick={handleEnglishClick} id="translate-to-english" className="text-blue-600 hover:underline">English</a>
    </div>
  );
}