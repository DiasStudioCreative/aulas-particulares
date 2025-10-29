import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula Santos",
      business: "Proprietária de Boutique Online",
      image: "👗",
      rating: 5,
      text: "Meu faturamento dobrou em apenas 2 meses! Aprendi a usar o Instagram de forma estratégica e finalmente entendi como transformar seguidores em clientes. A parte de respostas automáticas mudou completamente minha rotina."
    },
    {
      name: "Carlos Mendes",
      business: "Dono de Restaurante",
      image: "🍕",
      rating: 5,
      text: "Estava perdido no Instagram. Depois da mentoria, organizei minha bio, criei um Linktree profissional e implementei as estratégias de conteúdo. Resultado: 40% mais reservas e muito mais movimento no salão!"
    },
    {
      name: "Juliana Costa",
      business: "Designer de Interiores",
      image: "🏠",
      rating: 5,
      text: "O módulo sobre portfólio no Instagram foi transformador. Aprendi a mostrar meu trabalho de forma que atrai clientes de verdade. Fechei 3 projetos grandes que vieram direto do Instagram!"
    },
    {
      name: "Roberto Silva",
      business: "Personal Trainer",
      image: "💪",
      rating: 5,
      text: "Finalmente entendi como o algoritmo funciona e como criar conteúdo que engaja. Minha base de alunos cresceu 200% e consegui aumentar meus preços por conta do posicionamento profissional que construí."
    },
    {
      name: "Mariana Oliveira",
      business: "Proprietária de Salão de Beleza",
      image: "💅",
      rating: 5,
      text: "As técnicas de agendamento pelo Instagram e as respostas automáticas economizaram horas do meu dia! Agora consigo gerenciar melhor meus horários e ainda sobra tempo para criar conteúdo de qualidade."
    },
    {
      name: "Fernando Alves",
      business: "Dono de E-commerce de Eletrônicos",
      image: "📱",
      rating: 5,
      text: "Estava investindo em tráfego pago sem resultados. Depois da mentoria, otimizei minha bio, criei um funil de vendas pelo Direct e consegui 60% mais conversões. O ROI foi incrível!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que dizem nossos{' '}
              <span className="gradient-text-instagram">mentorados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 500 pequenos empresários já transformaram seus negócios
              com esta mentoria
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-instagram-pink opacity-20">
                  <FaQuoteLeft size={32} />
                </div>

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 gradient-instagram rounded-full flex items-center justify-center text-3xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Stats section */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text-instagram mb-2">500+</div>
                <div className="text-gray-600">Empresários Atendidos</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text-instagram mb-2">4.9/5</div>
                <div className="text-gray-600">Avaliação Média</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text-instagram mb-2">95%</div>
                <div className="text-gray-600">Taxa de Satisfação</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text-instagram mb-2">+150%</div>
                <div className="text-gray-600">Crescimento Médio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
