import React from 'react';
import { FaCheck, FaCrown, FaRocket } from 'react-icons/fa';

const Pricing = () => {
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
      icon: <FaRocket />
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
      icon: <FaCrown />
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
      icon: <FaCrown />
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Escolha seu{' '}
              <span className="gradient-text-instagram">plano ideal</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Investimento que se paga com os primeiros resultados.
              Parcele em até 12x no cartão!
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Garantia de 7 dias - 100% do seu dinheiro de volta
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-instagram-pink shadow-2xl scale-105 z-10'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                } transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="gradient-instagram text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`text-4xl mb-4 ${plan.popular ? 'gradient-text-instagram' : 'text-gray-400'}`}>
                  {plan.icon}
                </div>

                {/* Plan name and description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-600">R$</span>
                    <span className="text-5xl font-bold gradient-text-instagram">{plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">ou 12x de R$ {Math.ceil(parseInt(plan.price) / 12)}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <FaCheck className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'gradient-instagram text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* FAQ / Guarantee section */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Perguntas Frequentes
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Como funciona a garantia?</h4>
                  <p className="text-gray-700">
                    Você tem 7 dias para conhecer todo o conteúdo. Se não ficar satisfeito,
                    devolvemos 100% do seu investimento, sem perguntas.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Quanto tempo tenho para concluir?</h4>
                  <p className="text-gray-700">
                    Depende do plano escolhido. O plano Básico tem acesso de 6 meses, enquanto
                    Profissional e Premium têm acesso vitalício.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Preciso ter conhecimento prévio?</h4>
                  <p className="text-gray-700">
                    Não! A mentoria foi criada para iniciantes e empresários que querem dominar
                    o Instagram do zero. Tudo é explicado passo a passo.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Posso parcelar o pagamento?</h4>
                  <p className="text-gray-700">
                    Sim! Você pode parcelar em até 12x no cartão de crédito sem juros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
