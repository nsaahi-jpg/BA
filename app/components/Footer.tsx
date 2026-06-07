import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6 relative w-32 h-16">
              <Image 
                src="/logo.png" 
                alt="Beyond Average Logo" 
                fill 
                className="object-contain object-left" 
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              We provide enterprise knowledge solutions, premium writing, and definitive research that empower brands and institutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-gray-500 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="#why-us" className="text-gray-500 hover:text-primary transition-colors text-sm">Why Choose Us</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Latest Blogs</Link></li>
              <li><Link href="#contact" className="text-gray-500 hover:text-primary transition-colors text-sm">Contact Info</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Research & Writing</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Web Content Writing</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Company Profile</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Academic Content</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm focus:outline-none" suppressHydrationWarning>
            © 2026 Beyond Average. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">in</a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">tw</a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">fb</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
