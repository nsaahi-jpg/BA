import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-16 w-32">
                <Image
                  src="/logo.png"
                  alt="Beyond Average Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-primary transition-colors font-medium">About Us</Link>
            <Link href="#services" className="text-gray-600 hover:text-primary transition-colors font-medium">Services</Link>
            <Link href="#why-us" className="text-gray-600 hover:text-primary transition-colors font-medium">Why Us</Link>
            <Link href="#contact" className="px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md shadow-primary/20">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <Link href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">About Us</Link>
            <Link href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">Services</Link>
            <Link href="#why-us" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">Why Us</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 bg-primary text-white rounded-md font-medium text-center">Get in Touch</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
