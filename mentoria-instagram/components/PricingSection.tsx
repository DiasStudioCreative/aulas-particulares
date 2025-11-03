"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCrown, FaRocket, FaStar, FaChartLine } from 'react-icons/fa';

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "497",
      description: "Perfeito para começar",
      features: [
        "Acesso aos 8 módulos completos",
        "50+ templates de Stories e Posts",
        "Planilha de métricas",
        "Suporte por email",
        "Certificado de conclusão",
        "Acesso por 6 meses"
      ],
      cta: "Começar Agora",
      popular: false,
      icon: <FaRocket />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Profissional",
      price: "997",
      description: "Mais vendido",
      features: [
        "Tudo do plano Básico",
        "Acesso vitalício ao conteúdo",
        "Comunidade privada no Telegram",
        "2 sessões de mentoria 1-on-1",
        "Análise personalizada do seu perfil",
        "Suporte prioritário",
        "Atualizações gratuitas",
        "Bônus: Curso de Canva"
      ],
      cta: "Escolher Profissional",
      popular: true,
      icon: <FaStar />,
      color: "from-orange-500 via-orange-600 to-orange-700"
    },
    {
      name: "Premium",
      price: "1.997",
      description: "Acompanhamento total",
      features: [
        "Tudo do plano Profissional",
        "6 sessões de mentoria 1-on-1",
        "Consultoria de estratégia mensal (3 meses)",
        "Criação de 1 mês de conteúdo",
        "Setup completo do seu Instagram",
        "Configuração de automações",
        "Grupo VIP com networking",
        "Prioridade no suporte (WhatsApp)"
      ],
      cta: "Quero o Premium",
      popular: false,
      icon: <FaCrown />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black bg-dot-white/[0.2] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-orange-200 to-orange-300"
            >
              Escolha seu{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                plano ideal
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8"
            >
              Investimento que se paga com os primeiros resultados.
              Parcele em até 12x no cartão!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 px-6 py-3 rounded-full font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Garantia de 7 dias - 100% do seu dinheiro de volta
            </motion.div>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-orange-900/40 via-orange-800/40 to-orange-900/40 border-2 border-orange-500/50 shadow-2xl shadow-orange-500/20 scale-105 z-10 backdrop-blur-sm'
                    : 'bg-neutral-900/40 backdrop-blur-sm border-2 border-neutral-800 shadow-lg'
                } transition-all duration-300`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`text-4xl mb-4 ${plan.popular ? 'bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent' : 'text-neutral-500'}`}>
                  {plan.icon}
                </div>

                {/* Plan name and description */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-neutral-500">R$</span>
                    <span className={`text-5xl font-bold ${plan.popular ? 'bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent' : 'text-white'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">ou 12x de R$ {Math.ceil(parseInt(plan.price) / 12)}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <FaCheck className={`flex-shrink-0 mt-1 ${plan.popular ? 'text-orange-400' : 'text-green-400'}`} />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-xl hover:shadow-orange-500/50 hover:scale-105'
                      : 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>

          {/* FAQ / Guarantee section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-900/20 via-orange-800/20 to-orange-900/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8 md:p-12"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Perguntas Frequentes
              </h3>
              <div className="space-y-6">
                <div className="bg-neutral-900/40 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                  <h4 className="font-bold text-white mb-2">Como funciona a garantia?</h4>
                  <p className="text-neutral-400">
                    Você tem 7 dias para conhecer todo o conteúdo. Se não ficar satisfeito,
                    devolvemos 100% do seu investimento, sem perguntas.
                  </p>
                </div>
                <div className="bg-neutral-900/40 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                  <h4 className="font-bold text-white mb-2">Quanto tempo tenho para concluir?</h4>
                  <p className="text-neutral-400">
                    Depende do plano escolhido. O plano Básico tem acesso de 6 meses, enquanto
                    Profissional e Premium têm acesso vitalício.
                  </p>
                </div>
                <div className="bg-neutral-900/40 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                  <h4 className="font-bold text-white mb-2">Preciso ter conhecimento prévio?</h4>
                  <p className="text-neutral-400">
                    Não! A mentoria foi criada para iniciantes e empresários que querem dominar
                    o Instagram do zero. Tudo é explicado passo a passo.
                  </p>
                </div>
                <div className="bg-neutral-900/40 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                  <h4 className="font-bold text-white mb-2">Posso parcelar o pagamento?</h4>
                  <p className="text-neutral-400">
                    Sim! Você pode parcelar em até 12x no cartão de crédito sem juros.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

