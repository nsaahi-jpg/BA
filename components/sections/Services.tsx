"use client";

import React from "react";
import { motion } from "motion/react";
import { BookOpen, PenTool, ChartBar } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    category: "Academic Solutions",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    description:
      "Rigorous academic writing and research guidance for scholars.",
    items: [
      "Assignment Guidance",
      "Research Assistance",
      "Dissertation Support",
      "Assessment Support",
      "Academic Editing",
    ],
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Content Solutions",
    icon: <PenTool className="w-6 h-6 text-accent" />,
    description: "Strategic content development engineered for digital impact.",
    items: [
      "Website Content",
      "SEO Content",
      "Blogs",
      "Product Descriptions",
      "Company Profiles",
      "Case Studies",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Research & Documentation",
    icon: <ChartBar className="w-6 h-6 text-blue-400" />,
    description:
      "Enterprise-grade research and documentation for modern businesses.",
    items: [
      "Business Plans",
      "Market Research",
      "White Papers",
      "Corporate Reports",
      "Industry Analysis",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-gray-900 mb-6 pb-2">
            Expertise & Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mx-auto">
            Specialized knowledge services spanning academia, content
            generation, and enterprise research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-3xl relative overflow-hidden group bg-white shadow-md flex flex-col"
            >
              <div className="h-48 relative w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.category}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                  {cat.icon}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-sans font-semibold text-primary mb-4">
                  {cat.category}
                </h3>
                <p className="text-gray-600 mb-8">{cat.description}</p>

                <ul className="space-y-3 mt-auto">
                  {cat.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-gray-700 font-medium z-10 relative"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
