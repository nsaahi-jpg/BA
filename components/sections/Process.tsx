"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Search,
  PenTool,
  ClipboardCheck,
  Send,
  LifeBuoy,
  Zap,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discover",
    icon: <Search className="w-6 h-6" />,
    desc: "Deep dive into your requirements, scope, and strategic objectives.",
  },
  {
    step: "02",
    title: "Research",
    icon: <Zap className="w-6 h-6" />,
    desc: "Rigorous data gathering, literature review, and analytical framework setup.",
  },
  {
    step: "03",
    title: "Develop",
    icon: <PenTool className="w-6 h-6" />,
    desc: "Drafting, modeling, and creating the core content architecture.",
  },
  {
    step: "04",
    title: "Review",
    icon: <ClipboardCheck className="w-6 h-6" />,
    desc: "Multi-tiered quality assurance and plagiarism/compliance checks.",
  },
  {
    step: "05",
    title: "Deliver",
    icon: <Send className="w-6 h-6" />,
    desc: "Secure, on-time delivery of the final polished manuscript or report.",
  },
  {
    step: "06",
    title: "Support",
    icon: <LifeBuoy className="w-6 h-6" />,
    desc: "Ongoing revisions and strategic guidance post-delivery.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-32 relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 noise-bg pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-gray-900 mb-6 pb-2">
            Our Workflow
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A precise, six-stage methodology designed to ensure flawless
            execution and uncompromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl relative group bg-white shadow-sm border-gray-200"
            >
              <div className="text-8xl font-sans font-black text-gray-800 absolute right-4 top-4 group-hover:text-primary/10 transition-colors select-none pointer-events-none">
                {s.step}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-whiteer border border-gray-200 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-gray-900 transition-all duration-300">
                {s.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
