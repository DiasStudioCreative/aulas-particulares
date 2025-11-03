"use client";

import { Globe } from "@/components/ui/globe";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function GlobeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden flex items-center justify-center"
    >
      {/* Background gradient dots */}
      <div className="absolute inset-0 z-0 bg-transparent bg-dot-white/[0.2]" />
      
      {/* Content */}
      <div className="relative z-10 w-full min-h-full flex flex-col items-center justify-center px-6 pointer-events-none">

        {/* Globe */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-30 w-full max-w-5xl h-[500px] md:h-[600px] pointer-events-auto"
        >
          <Globe className="w-full h-full" />
        </motion.div>

        {/* Stats */}
        <motion.div
          style={{ opacity }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto w-full relative z-20 pointer-events-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              +10K
            </div>
            <div className="text-neutral-400 text-sm md:text-base">
              Alunos Transformados
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
              +500%
            </div>
            <div className="text-neutral-400 text-sm md:text-base">
              Aumento Médio no Alcance
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-neutral-400 text-sm md:text-base">
              Taxa de Satisfação
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
