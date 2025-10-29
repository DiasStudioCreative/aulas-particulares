'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    plan: 'profissional',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    // Por exemplo, enviar para uma API, email, ou serviço de marketing
    console.log('Form submitted:', formData);
    alert('Obrigado pelo interesse! Entraremos em contato em breve.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pronto para{' '}
              <span className="gradient-text-instagram">começar?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato
              para finalizar sua inscrição
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Formulário de Inscrição
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-instagram-pink focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-instagram-pink focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-instagram-pink focus:outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de Negócio *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-instagram-pink focus:outline-none transition-colors"
                    placeholder="Ex: E-commerce, Restaurante, Salão..."
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-semibold text-gray-700 mb-2">
                    Plano de Interesse *
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-instagram-pink focus:outline-none transition-colors"
                  >
                    <option value="basico">Básico - R$ 497</option>
                    <option value="profissional">Profissional - R$ 997</option>
                    <option value="premium">Premium - R$ 1.997</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-instagram-pink focus:outline-none transition-colors resize-none"
                    placeholder="Conte-nos mais sobre seu negócio ou dúvidas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-instagram text-white py-4 px-6 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Enviar Inscrição
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar este formulário, você concorda em receber comunicações sobre a mentoria.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact methods */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Outras formas de contato
                </h3>
                <div className="space-y-6">
                  <a
                    href="mailto:contato@mentoriainstagram.com"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="gradient-instagram p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">contato@mentoriainstagram.com</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="gradient-instagram p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                      <FaWhatsapp size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">WhatsApp</div>
                      <div className="text-gray-600">(00) 00000-0000</div>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/mentoriainstagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="gradient-instagram p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                      <FaInstagram size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Instagram</div>
                      <div className="text-gray-600">@mentoriainstagram</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Additional info */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Por que escolher nossa mentoria?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-instagram-pink flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Conteúdo 100% prático e aplicável</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-instagram-pink flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Suporte direto com especialistas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-instagram-pink flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Resultados comprovados por centenas de empresários</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-instagram-pink flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Garantia de satisfação de 7 dias</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
