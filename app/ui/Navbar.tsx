'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-700 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">EcoRecycle</h1>
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
