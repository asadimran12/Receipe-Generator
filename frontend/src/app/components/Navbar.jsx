'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check localStorage for login status
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            RecipeAI
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            <Link href="/receipe" className="text-gray-700 hover:text-blue-600 transition">Recipes</Link>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-white bg-red-600 px-3 py-1 rounded-2xl hover:bg-red-700 transition">Logout</button>
            ) : (
              <Link href="/login" className="text-white p-1 px-3 bg-blue-600 rounded-2xl transition">Login</Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition">Contact</Link>
          <Link href="/recipe" className="block text-gray-700 hover:text-blue-600 transition">Recipes</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="block w-full text-left text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition">Logout</button>
          ) : (
            <Link href="/login" className="block text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
}
