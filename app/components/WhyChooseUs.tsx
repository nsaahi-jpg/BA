import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function WhyChooseUs() {
  const reasons = [
    "100% Original, Plagiarism-free content",
    "Tailored closely to your unique voice and goals",
    "Rigorous, multi-tier editorial review process",
    "On-time delivery, without compromising quality",
    "Expert writers with industry-specific knowledge",
    "Transparent communication and direct feedback loops"
  ];

  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-3">The Beyond Average Standard</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg">
              We do not believe in mass-produced, template-driven copy. We treat your content as a strategic asset. Here is what sets us apart from the rest.
            </p>
            
            <ul className="space-y-5">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-gray-800 font-medium text-lg">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-1 lg:order-2 h-[600px] rounded-[3rem] overflow-hidden ml-auto w-full max-w-xl">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
              alt="Why choose us meeting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
