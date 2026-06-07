"use client";

import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Calendar, Mail, FileText } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 relative bg-white border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-gray-900 mb-6 pb-2">
              Let&apos;s Build the Future.
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Partner with Beyond Average for your enterprise research, specific
              academic requirements, or strategic content needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 glass p-6 rounded-2xl bg-white shadow-sm border-gray-200">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold">
                    Book a Consultation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Schedule a deep-dive with our solutions architect.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 glass p-6 rounded-2xl bg-white shadow-sm border-gray-200">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold">
                    Live Chat / WhatsApp
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Get immediate answers from our support team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 rounded-3xl bg-white shadow-xl border border-gray-200"
          >
            <form className="space-y-6" suppressHydrationWarning>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    className="w-full bg-whiteer border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    className="w-full bg-whiteer border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Work Email
                </label>
                <input
                  suppressHydrationWarning
                  type="email"
                  className="w-full bg-whiteer border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Service Category
                </label>
                <select
                  suppressHydrationWarning
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                >
                  <option>Academic Solutions</option>
                  <option>Content Solutions</option>
                  <option>Research & Documentation</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Project Details
                </label>
                <textarea
                  suppressHydrationWarning
                  rows={4}
                  className="w-full bg-whiteer border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                suppressHydrationWarning
                className="w-full py-4 bg-primary hover:bg-primary-dark text-gray-900 font-semibold rounded-xl transition-all shadow-lg shadow-primary/30"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
