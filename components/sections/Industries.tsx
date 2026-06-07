"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Stethoscope,
  Monitor,
  Briefcase,
  GraduationCap,
  Scale,
  Cpu,
  Calculator,
  PieChart,
  Activity,
} from "lucide-react";

const industries = [
  { name: "Engineering", icon: <Cpu className="w-5 h-5" /> },
  { name: "Nursing", icon: <Activity className="w-5 h-5" /> },
  { name: "Healthcare", icon: <Stethoscope className="w-5 h-5" /> },
  { name: "Information Tech", icon: <Monitor className="w-5 h-5" /> },
  { name: "Business", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Finance", icon: <Calculator className="w-5 h-5" /> },
  { name: "Marketing", icon: <PieChart className="w-5 h-5" /> },
  { name: "Education", icon: <GraduationCap className="w-5 h-5" /> },
  { name: "Law", icon: <Scale className="w-5 h-5" /> },
];

export function Industries() {
  return (
    <section className="py-24 border-y border-gray-200 relative bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-sans text-3xl font-bold text-gray-900 mb-12 pb-2">
          Empowering Diverse Industries
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-4 rounded-full glass flex items-center gap-3 text-gray-600 hover:text-primary hover:bg-white hover:border-primary-light transition-colors cursor-default border border-gray-200 bg-white"
            >
              <div className="text-primary">{ind.icon}</div>
              <span className="font-medium">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
