'use client';

import { useEffect } from 'react';

export default function TranslateWidget() {
  useEffect(() => {
    // Initialize the translation links when component mounts
    const currentUrl = window.location.href;

    // Link to translate to French
    const frenchLink = document.getElementById('translate-to-french') as HTMLAnchorElement | null;
    if (frenchLink) {
      frenchLink.href = `https://translate.google.com/translate?sl=auto&tl=fr&u=${encodeURIComponent(currentUrl)}`;
      frenchLink.target = '_blank'; // Opens the translated page in a new tab
    }

    // Link to return to English (or the original page)
    const englishLink = document.getElementById('translate-to-english') as HTMLAnchorElement | null;
    if (englishLink) {
      englishLink.href = currentUrl; // Simply reloads the original page
    }
  }, []);

  return (
    <div id="language-translator" className="fixed bottom-4 right-4 bg-white p-2 rounded shadow-md text-sm">
      <span>Translate to:</span>{' '}
      <a href="#" id="translate-to-french" className="text-blue-600 hover:underline">Français</a> |{' '}
      <a href="#" id="translate-to-english" className="text-blue-600 hover:underline">English</a>
    </div>
  );
}