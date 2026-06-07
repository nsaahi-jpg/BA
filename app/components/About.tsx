import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[600px] w-full rounded-3xl shadow-2xl bg-white border border-gray-100 flex flex-col items-center justify-center p-8 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gray-50/50"></div>
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 -m-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -m-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

              <div className="relative z-10 w-full">
                <h3 className="text-sm font-bold text-gray-500 mb-12 uppercase tracking-[0.2em] text-center border-b border-gray-200 pb-4 inline-block mx-auto w-full">
                  Familiar with guidelines from
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full items-center justify-items-center">
                  {/* Phoenix */}
                  <div className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 w-full max-w-[280px]">
                    <img src="https://logo.clearbit.com/phoenix.edu" alt="University of Phoenix Logo" className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 rounded-md bg-white p-1" />
                    <div className="flex flex-col">
                      <span className="font-serif font-bold text-gray-900 text-lg leading-tight group-hover:text-[#b30838] transition-colors">University of Phoenix</span>
                    </div>
                  </div>
                  
                  {/* APUS */}
                  <div className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 w-full max-w-[280px]">
                    <img src="https://logo.clearbit.com/apus.edu" alt="APUS Logo" className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 rounded-md bg-white p-1" />
                    <div className="flex flex-col">
                      <span className="font-serif font-bold text-gray-900 text-lg leading-tight group-hover:text-[#003366] transition-colors">American Public Univ. System</span>
                    </div>
                  </div>

                  {/* SNHU */}
                  <div className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 w-full max-w-[280px]">
                    <img src="https://logo.clearbit.com/snhu.edu" alt="SNHU Logo" className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 rounded-md bg-white p-1" />
                    <div className="flex flex-col">
                      <span className="font-sans font-bold text-gray-900 text-lg leading-tight group-hover:text-[#005A9C] transition-colors">Southern New Hampshire</span>
                    </div>
                  </div>

                  {/* Liberty */}
                  <div className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 w-full max-w-[280px]">
                    <img src="https://logo.clearbit.com/liberty.edu" alt="Liberty University Logo" className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 rounded-md bg-white p-1" />
                    <div className="flex flex-col">
                      <span className="font-serif font-bold text-gray-900 text-lg leading-tight group-hover:text-[#0A254E] transition-colors">Liberty University</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-primary w-40 h-40 rounded-full flex flex-col items-center justify-center text-white border-8 border-white shadow-xl hidden md:flex z-20">
              <span className="text-4xl font-bold">10+</span>
              <span className="text-sm font-medium tracking-wide uppercase mt-1">Years</span>
              <span className="text-xs uppercase text-primary-200">Experience</span>
            </div>
          </div>

          <div>
            <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-3">About Beyond Average</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We don&apos;t just write. <br/>We shape the narrative.
            </h3>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At Beyond Average, we believe that words have the power to transform businesses, elevate brands, and establish deep industry authority. We are a dedicated team of researchers, writers, and strategists committed to excellence.
            </p>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Whether you need deeply researched academic content, compelling web copy, or a strong company profile, our rigorous quality standards ensure that what we deliver is never just okay—it&apos;s exceptional.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-2">500+</h4>
                <p className="text-gray-500 font-medium">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-2">99%</h4>
                <p className="text-gray-500 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
