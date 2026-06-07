"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden w-full pt-12">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-gray-50">
        <Image
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Architecture"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/5 blur-[100px] rounded-full pointer-events-none opacity-40"></div>
        <div className="absolute inset-0 noise-bg pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white backdrop-blur-md border border-gray-200 mb-8 shadow-md"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-sm"></span>
          <span className="text-xs font-bold tracking-widest text-primary-dark uppercase">
            Established 2014 &bull; Global Operations
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-sans text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1] pb-2"
        >
          Research. Knowledge.
          <br />
          <span className="text-primary italic pr-2">Excellence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-700 font-medium font-sans mb-12 leading-relaxed"
        >
          We architect knowledge solutions and enterprise research that give you
          a definitive advantage in academia and business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/30"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white backdrop-blur-md border border-gray-200 text-gray-800 font-semibold rounded-full hover:bg-white hover:shadow-md transition-all flex items-center justify-center gap-2"
          >
            Book Consultation
          </a>
        </motion.div>

        {/* Global Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-gray-200 bg-white backdrop-blur-sm rounded-3xl"
        >
          {[
            { label: "Years Experience", value: "10+" },
            { label: "Global Clients", value: "5,000+" },
            { label: "Research Experts", value: "150+" },
            { label: "Quality Score", value: "99.8%" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-sans font-bold text-gray-900">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
