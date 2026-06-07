"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const milestones = [
  {
    year: "2014",
    title: "Foundation",
    description:
      "Established with a vision to redefine knowledge assistance for students.",
  },
  {
    year: "2016",
    title: "Growth Phase",
    description:
      "Expanded academic solutions and incorporated corporate writing services.",
  },
  {
    year: "2018",
    title: "Team Expansion",
    description:
      "Grew into a multi-disciplinary team of 50+ subject matter experts.",
  },
  {
    year: "2020",
    title: "Global Operations",
    description:
      "Scaled operations to serve a truly global clientele across major education hubs.",
  },
  {
    year: "2022",
    title: "Process Transformation",
    description:
      "Integrated multi-layered quality assurance and bespoke client portals.",
  },
  {
    year: "2024",
    title: "Technology Integration",
    description:
      "Embraced AI and data-driven tools to enhance research accuracy.",
  },
  {
    year: "2026",
    title: "Knowledge Platform",
    description:
      "Launched the next-generation integrated knowledge services platform.",
  },
];

export function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-gray-900 mb-6 pb-2">
            Our Evolution
          </h2>
          <p className="text-gray-600 text-lg">
            A decade of relentless pursuit of excellence.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Central Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block"></div>

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[24px] md:left-1/2 top-0 w-px bg-gradient-to-b from-primary to-accent -translate-x-1/2 hidden md:block"
          ></motion.div>

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex-1 md:text-${isEven ? "left" : "right"}`}
                  >
                    <h3 className="text-4xl font-sans font-bold text-primary mb-2">
                      {milestone.year}
                    </h3>
                    <h4 className="text-xl font-medium text-accent mb-3">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>

                  <div className="w-12 h-12 rounded-full glass border border-gray-200 flex items-center justify-center shrink-0 relative z-10 bg-white">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
