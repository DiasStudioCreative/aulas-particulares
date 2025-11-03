"use client";

import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function GeminiEffectSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Animação completa mais rápido - completa em 40% do scroll da seção
  // Isso garante que todas as linhas completem antes de sair da seção
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div
      ref={ref}
      className="h-[150vh] bg-black bg-dot-white/[0.2] relative overflow-hidden"
    >
      <div className="absolute inset-0 b pointer-events-none z-20" />
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="De Seguidor para Cliente"
        description="O algoritmo não é sorte, é estratégia. Aprenda as técnicas usadas por contas milionárias para dominar o Instagram e transformar cada rolagem em uma oportunidade de venda real."
        className="bg-black"
      />
    </div>
  );
}
