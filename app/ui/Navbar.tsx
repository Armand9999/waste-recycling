"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-700 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl flex flex-cols-2 gap-2 font-bold text-white">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-8 rounded-full" />
          <p>DHAFA Recycling</p>
        </Link>

        <nav className="hidden md:flex space-x-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/product">Product</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden grid grid-col bg-green-700 text-white px-4 pb-4 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/product" onClick={() => setIsOpen(false)}>Product</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

