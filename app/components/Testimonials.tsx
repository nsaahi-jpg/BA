import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      text: "The web content they provided drastically improved our conversion rates. The team truly understood our brand voice from day one.",
      author: "Sarah J.",
      role: "Marketing Director"
    },
    {
      text: "Their academic writing support is unparalleled. The depth of research and clear structural logic made all the difference.",
      author: "Dr. Michael T.",
      role: "Lead Researcher"
    },
    {
      text: "We needed a complete overhaul of our company profile to pitch to investors. BA delivered an exceptional deck.",
      author: "Elena R.",
      role: "Startup Founder"
    }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-light font-semibold tracking-wider text-sm uppercase mb-3">Testimonials</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">Listen to what our Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl">
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg leading-relaxed mb-8 italic">&quot;{review.text}&quot;</p>
              <div>
                <p className="font-bold text-xl">{review.author}</p>
                <p className="text-primary-light">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
