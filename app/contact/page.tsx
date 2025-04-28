import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto p-8">
        <section className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

          <div className="space-y-8 text-gray-700">
            <div className="flex items-start gap-4">
              <MapPin className="text-green-600 w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p>123 Eco Street, Green City, Planet Earth</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-green-600 w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p>info@ecorecycle.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-green-600 w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p>+1 (234) 567-8900</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-green-600 w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold">Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Optional: Google Maps Embed */}
          <div className="mt-12">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127388.99719901996!2d11.51045315!3d3.8303051999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c51!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2sca!4v1745795875958!5m2!1sen!2sca" 
              width="100%" 
              height="300" 
              allowFullScreen 
              loading="lazy" 
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>

        {/* Social Media Links */}
        <div className="flex justify-center items-center space-x-6 mt-12">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.878C18.343 21.127 22 17 22 12z" />
            </svg>
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
        </a>

        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.036-1.851-3.036-1.853 0-2.137 1.447-2.137 2.941v5.664h-3.554V9h3.414v1.561h.049c.477-.9 1.637-1.849 3.37-1.849 3.598 0 4.264 2.368 4.264 5.451v6.289zM5.337 7.433c-1.144 0-2.067-.925-2.067-2.066 0-1.142.923-2.066 2.067-2.066 1.14 0 2.066.924 2.066 2.066 0 1.141-.926 2.066-2.066 2.066zM6.861 20.452H3.813V9h3.048v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.207 24 24 23.225 24 22.271V1.729C24 .774 23.207 0 22.225 0z" />
            </svg>
        </a>
        </div>

      </main>

      <Footer />
    </div>
  );
}
