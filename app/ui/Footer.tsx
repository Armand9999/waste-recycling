import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-12">
      <div className="container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">EcoRecycle</h2>
          <p>Creating a cleaner, greener planet through sustainable recycling solutions.</p>
        </div>

        {/* Quick Links */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div> */}

        {/* Contact Info */}
        <div >
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              123 Eco Street, Green City
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              info@ecorecycle.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              +1 (234) 567-8900
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-600 mt-8 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} EcoRecycle. All rights reserved.</p>

          {/* Social Media */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.878C18.343 21.127 22 17 22 12z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.036-1.851-3.036-1.853 0-2.137 1.447-2.137 2.941v5.664h-3.554V9h3.414v1.561h.049c.477-.9 1.637-1.849 3.37-1.849 3.598 0 4.264 2.368 4.264 5.451v6.289zM5.337 7.433c-1.144 0-2.067-.925-2.067-2.066 0-1.142.923-2.066 2.067-2.066 1.14 0 2.066.924 2.066 2.066 0 1.141-.926 2.066-2.066 2.066zM6.861 20.452H3.813V9h3.048v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.207 24 24 23.225 24 22.271V1.729C24 .774 23.207 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

  