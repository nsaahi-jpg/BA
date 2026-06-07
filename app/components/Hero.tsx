import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              Trusted Academic Writing Services
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              Premium Academic <br className="hidden sm:block" />
              <span className="text-primary">Content Writing.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Expert research and writing services designed for students, researchers, and institutions. Achieve excellence with original, meticulously crafted content.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
              >
                Our Expertise
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 border border-gray-200 transition-all flex items-center justify-center"
              >
                Consult With Us
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            {/* Visual Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-[100px] opacity-40 z-0 pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-12 gap-4 h-[500px] sm:h-[600px] hover:scale-[1.01] transition-transform duration-700">
              <div className="col-span-7 h-full relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100/50">
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop"
                  alt="Historic University Architecture representing academic prestige"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="col-span-5 flex flex-col gap-4">
                <div className="relative h-1/2 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100/50 transform translate-x-4">
                  <Image
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2873&auto=format&fit=crop"
                    alt="Fountain pen and qualitative research notes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-1/2 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100/50 transform -translate-x-2">
                  <Image
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2890&auto=format&fit=crop"
                    alt="Collection of hardcover academic books in a grand library"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
