"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Expert Teams",
    desc: "Domain-specific master's and PhD-level researchers.",
  },
  {
    title: "Multi-Level Reviews",
    desc: "Stringent quality assurance and editorial checks.",
  },
  {
    title: "Research Standards",
    desc: "Adherence to global citation and methodology frameworks.",
  },
  {
    title: "Strict Confidentiality",
    desc: "Enterprise-grade data protection and NDAs.",
  },
  {
    title: "Timely Delivery",
    desc: "Flawless execution aligned with your critical deadlines.",
  },
  { title: "Dedicated Support", desc: "24/7 proactive account management." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-gray-900 mb-6 pb-2">
              Built for Excellence
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We stand apart from generic content agencies by delivering
              rigorous, analytically sound, and strategically aligned knowledge
              solutions.
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 font-semibold text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="glass-card rounded-3xl relative bg-white border-gray-200 shadow-xl overflow-hidden flex flex-col h-full">
              <div className="h-64 relative w-full">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="object-cover opacity-60 mix-blend-overlay"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-light"></div>
              </div>
              <div className="px-8 pb-8 flex-1 flex flex-col justify-end z-10 -mt-16">
                <h3 className="text-2xl font-sans text-gray-900 mb-6 border-b border-gray-200 pb-4 font-semibold">
                  The Beyond Average Standard
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      label: "Depth",
                      ours: "Deep Subject Matter Expertise",
                      generic: "Surface-level writing",
                    },
                    {
                      label: "Assurance",
                      ours: "Multi-layer QA Process",
                      generic: "Single-pass editing",
                    },
                    {
                      label: "Originality",
                      ours: "100% Custom Research",
                      generic: "Templated generation",
                    },
                  ].map((comp, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                      <span className="text-sm text-primary-light uppercase tracking-wider font-semibold">
                        {comp.label}
                      </span>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-primary/10 border border-primary/30">
                        <span className="text-gray-900 font-medium">
                          {comp.ours}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-whiteer border border-gray-200 opacity-60">
                        <span className="text-gray-600 font-medium text-sm line-through">
                          Standard: {comp.generic}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
