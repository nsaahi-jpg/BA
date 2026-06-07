import Image from "next/image";
import { BookOpen, Globe, Building2, Database, GraduationCap, PenTool } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Research & Writing",
      description: "Deep, customized research tailored to your specific industry needs. We dive into the data so you don't have to.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Web Content Writing",
      description: "SEO-optimized, engaging web copy that converts visitors into loyal customers and clearly communicates your value.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2940&auto=format&fit=crop",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Company Profile",
      description: "Professional, impactful company profiles, brochures, and pitch decks that help you stand out to investors and clients.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Academic Content Database",
      description: "Access to robust, meticulously curated academic databases, references, and literature reviews.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Academic Content Writing",
      description: "Scholarly writing support maintaining the highest standards of academic integrity, structure, and citation.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2787&auto=format&fit=crop",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Blog Writing",
      description: "Consistent, thought-provoking blog content that drives traffic and establishes your brand as an industry thought leader.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2487&auto=format&fit=crop",
      icon: <PenTool className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-3">Our Core Expertise</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services We Offer</h3>
          <p className="text-gray-600 text-lg">
            We provide a comprehensive suite of writing and research solutions across multiple domains, ensuring that every word serves a strategic purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full cursor-default">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 bg-white w-12 h-12 rounded-xl flex items-center justify-center text-primary shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-8">
                  <span className="text-primary font-semibold text-sm hover:text-primary-dark transition-colors inline-flex items-center gap-1 group/btn cursor-pointer">
                    Learn more <span className="text-lg group-hover/btn:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
