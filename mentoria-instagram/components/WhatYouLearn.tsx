import React from 'react';
import { FaInstagram, FaLink, FaRobot, FaChartBar, FaCamera, FaHashtag, FaComments, FaDollarSign } from 'react-icons/fa';

const WhatYouLearn = () => {
  const modules = [
    {
      icon: <FaInstagram />,
      title: "Perfil Profissional Completo",
      topics: [
        "Como criar uma bio que converte visitantes em seguidores",
        "Escolha da foto de perfil ideal para seu negócio",
        "Nome de usuário estratégico e otimizado para busca",
        "Configuração de conta comercial e suas vantagens"
      ]
    },
    {
      icon: <FaLink />,
      title: "Linktree e Links na Bio",
      topics: [
        "Configuração completa do Linktree do zero",
        "Alternativas gratuitas ao Linktree",
        "Como organizar seus links para maximizar cliques",
        "Rastreamento de métricas e análise de performance"
      ]
    },
    {
      icon: <FaRobot />,
      title: "Respostas Automáticas",
      topics: [
        "Configuração de respostas rápidas no Direct",
        "Mensagens automáticas de boas-vindas",
        "Templates prontos para diferentes tipos de negócio",
        "Automação inteligente sem perder o toque pessoal"
      ]
    },
    {
      icon: <FaCamera />,
      title: "Criação de Conteúdo que Vende",
      topics: [
        "Tipos de posts que geram mais engajamento",
        "Stories que convertem: estrutura e técnicas",
        "Reels: como criar vídeos virais para seu nicho",
        "Planejamento de conteúdo semanal/mensal"
      ]
    },
    {
      icon: <FaHashtag />,
      title: "Estratégia de Hashtags",
      topics: [
        "Como encontrar as melhores hashtags para seu nicho",
        "Quantidade ideal e como misturar hashtags grandes e pequenas",
        "Hashtags locais para negócios físicos",
        "Ferramentas gratuitas para pesquisa de hashtags"
      ]
    },
    {
      icon: <FaChartBar />,
      title: "Análise e Crescimento",
      topics: [
        "Entendendo as métricas do Instagram Insights",
        "Horários ideais para postar no seu nicho",
        "Como interpretar dados e ajustar estratégia",
        "Crescimento orgânico: técnicas que realmente funcionam"
      ]
    },
    {
      icon: <FaComments />,
      title: "Engajamento e Comunidade",
      topics: [
        "Como responder comentários de forma estratégica",
        "Técnicas para aumentar interação nos posts",
        "Criação de enquetes e perguntas que engajam",
        "Transformando seguidores em comunidade fiel"
      ]
    },
    {
      icon: <FaDollarSign />,
      title: "Monetização e Vendas",
      topics: [
        "Como usar o Instagram Shopping",
        "Estratégias de vendas pelo Direct",
        "Criação de ofertas irresistíveis",
        "Funil de vendas adaptado para Instagram"
      ]
    }
  ];

  return (
    <section id="learn" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que você vai{' '}
              <span className="gradient-text-instagram">aprender</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um programa completo e prático dividido em 8 módulos essenciais
              para dominar o Instagram e fazer seu negócio decolar
            </p>
          </div>

          {/* Modules grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="gradient-instagram p-3 rounded-xl text-white text-2xl flex-shrink-0">
                    {module.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">
                      MÓDULO {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {module.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-instagram-pink flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bonus section */}
          <div className="mt-12 bg-gradient-to-r from-instagram-purple to-instagram-pink rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Bônus Exclusivos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="font-bold mb-2">Templates Prontos</h4>
                <p className="text-sm text-white/90">50+ templates de Stories e Posts editáveis</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-bold mb-2">Planilha de Métricas</h4>
                <p className="text-sm text-white/90">Acompanhe seu crescimento facilmente</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-4xl mb-3">👥</div>
                <h4 className="font-bold mb-2">Comunidade Privada</h4>
                <p className="text-sm text-white/90">Networking com outros empresários</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
