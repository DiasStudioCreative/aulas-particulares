import React from 'react';
import { FaStore, FaHeart, FaCut, FaUtensils, FaTshirt, FaHome, FaTools, FaGraduationCap } from 'react-icons/fa';

const ForWho = () => {
  const targetAudience = [
    {
      icon: <FaStore />,
      title: "Donos de E-commerce",
      description: "Transforme seu Instagram em um canal de vendas efetivo"
    },
    {
      icon: <FaHeart />,
      title: "Prestadores de Serviços",
      description: "Atraia mais clientes para seu consultório, clínica ou escritório"
    },
    {
      icon: <FaCut />,
      title: "Salões e Estética",
      description: "Mostre seu trabalho e agende mais horários pelo Instagram"
    },
    {
      icon: <FaUtensils />,
      title: "Restaurantes e Cafés",
      description: "Divulgue seu cardápio e aumente o movimento do seu estabelecimento"
    },
    {
      icon: <FaTshirt />,
      title: "Lojas Físicas",
      description: "Leve mais clientes para sua loja e aumente as vendas online"
    },
    {
      icon: <FaHome />,
      title: "Arquitetos e Designers",
      description: "Construa um portfólio atrativo e conquiste novos projetos"
    },
    {
      icon: <FaTools />,
      title: "Profissionais Autônomos",
      description: "Posicione-se como autoridade e atraia mais oportunidades"
    },
    {
      icon: <FaGraduationCap />,
      title: "Coaches e Mentores",
      description: "Expanda seu alcance e venda mais mentorias e cursos"
    }
  ];

  const perfectIf = [
    "Você tem um negócio mas não sabe usar o Instagram de forma profissional",
    "Posta no Instagram mas não vê resultados ou vendas",
    "Quer aprender a configurar bio, Linktree e automações do zero",
    "Não tem tempo para ficar testando estratégias sem saber se funcionam",
    "Quer aumentar suas vendas usando o Instagram como canal de marketing",
    "Precisa de um método validado e que realmente funciona para PMEs"
  ];

  const notPerfectIf = [
    "Você procura fórmulas mágicas ou promessas de milhares de seguidores da noite para o dia",
    "Não está disposto a colocar em prática o que aprende",
    "Quer apenas teoria sem aplicação no seu negócio"
  ];

  return (
    <section id="for-who" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Para quem é{' '}
              <span className="gradient-text-instagram">esta mentoria?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esta mentoria foi criada especialmente para pequenos empresários
              que querem dominar o Instagram e aumentar suas vendas
            </p>
          </div>

          {/* Target audience grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="gradient-instagram w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  {audience.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>

          {/* Two columns: Perfect if / Not perfect if */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Perfect if */}
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Esta mentoria é perfeita se você:
                </h3>
              </div>
              <ul className="space-y-4">
                {perfectIf.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not perfect if */}
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl">
                  ✕
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Não é para você se:
                </h3>
              </div>
              <ul className="space-y-4">
                {notPerfectIf.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 inline-block">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                Se identificou? Então essa mentoria foi feita para você!
              </p>
              <a
                href="#pricing"
                className="gradient-instagram text-white px-8 py-4 rounded-full font-semibold inline-block hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Ver Planos e Preços
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
