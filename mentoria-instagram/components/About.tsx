import React from 'react';
import { FaChartLine, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Resultados Reais",
      description: "Estratégias testadas e aprovadas por centenas de pequenos empresários que triplicaram seu alcance no Instagram."
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Foco em PMEs",
      description: "Conteúdo específico para pequenos e médios empresários, sem enrolação ou teorias complexas."
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Prático e Direto",
      description: "Aprenda fazendo! Cada aula tem exercícios práticos para implementar imediatamente no seu negócio."
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Suporte Contínuo",
      description: "Tire suas dúvidas diretamente com o mentor e tenha acesso a uma comunidade de empresários."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por que esta mentoria é{' '}
              <span className="gradient-text-instagram">diferente?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não é apenas mais um curso. É uma mentoria prática focada em resultados
              reais para pequenos empresários que querem dominar o Instagram.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="gradient-text-instagram mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Video/Image placeholder */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                O Instagram mudou. Sua estratégia também precisa mudar.
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Não basta mais postar fotos bonitas. Você precisa entender algoritmo,
                engajamento, ferramentas de automação e como converter seguidores em clientes.
              </p>
              <div className="bg-white/50 backdrop-blur rounded-xl p-8 border-2 border-dashed border-instagram-pink">
                <p className="text-gray-600 italic">
                  "Aprendi em 4 semanas o que levaria anos descobrindo sozinho.
                  Meu faturamento aumentou 40% apenas otimizando minha bio e usando
                  as estratégias de conteúdo ensinadas na mentoria."
                </p>
                <p className="text-gray-900 font-semibold mt-4">
                  - Maria Silva, Proprietária de E-commerce
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
