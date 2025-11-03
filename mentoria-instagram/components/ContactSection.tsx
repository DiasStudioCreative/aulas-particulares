"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaRocket } from 'react-icons/fa';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Fale conosco diretamente",
      link: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      title: "Instagram",
      description: "Acompanhe nosso dia a dia",
      link: "#",
      color: "from-orange-500 via-orange-400 to-orange-600"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      description: "Envie suas dúvidas",
      link: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <BackgroundBeams className="opacity-40" />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"
            >
              Pronto para transformar seu Instagram?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-8"
            >
              Comece sua jornada rumo ao sucesso nas redes sociais hoje mesmo
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 px-6 py-3 rounded-full font-semibold"
            >
              <FaRocket className="w-5 h-5" />
              <span>Garantia de 7 dias - 100% do seu dinheiro de volta</span>
            </motion.div>
          </motion.div>

          {/* CTA Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <a
              href="#pricing"
              className="inline-block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 transition-all duration-300"
            >
              Quero Transformar Meu Instagram Agora
            </a>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className={`text-4xl mb-4 bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-neutral-400">{method.description}</p>
                <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              </motion.a>
            ))}
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center bg-gradient-to-br from-orange-900/20 via-orange-800/20 to-orange-900/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sua jornada começa aqui
            </h3>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              Não perca mais tempo tentando descobrir sozinho como dominar o Instagram. 
              Junte-se a centenas de empresários que já transformaram seus negócios com nossas estratégias comprovadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-neutral-400 text-lg">✨ Resultados comprovados</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400 text-lg">🚀 Acesso imediato</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400 text-lg">💎 Suporte especializado</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

