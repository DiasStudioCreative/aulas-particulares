import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand column */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 gradient-text-instagram">
                Mentoria Instagram
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Ajudamos pequenos empresários a dominar o Instagram e transformar
                seguidores em clientes. Estratégias práticas e resultados reais.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-instagram-pink transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Links column */}
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    Sobre a Mentoria
                  </a>
                </li>
                <li>
                  <a href="#learn" className="text-gray-400 hover:text-white transition-colors">
                    O que você vai aprender
                  </a>
                </li>
                <li>
                  <a href="#for-who" className="text-gray-400 hover:text-white transition-colors">
                    Para quem é
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <FaEnvelope className="flex-shrink-0" />
                  <a href="mailto:contato@mentoriainstagram.com" className="hover:text-white transition-colors">
                    contato@mentoriainstagram.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <FaWhatsapp className="flex-shrink-0" />
                  <a href="https://wa.me/5500000000000" className="hover:text-white transition-colors">
                    (00) 00000-0000
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <h5 className="font-semibold mb-2">Horário de Atendimento</h5>
                <p className="text-gray-400 text-sm">
                  Segunda a Sexta<br />
                  9h às 18h (Horário de Brasília)
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} Mentoria Instagram. Todos os direitos reservados.
              </p>

              {/* Legal links */}
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Reembolso
                </a>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-xs">
                Esta mentoria não é afiliada, associada, autorizada, endossada por, ou de qualquer forma
                oficialmente conectada com Instagram, Meta Platforms, Inc., ou qualquer uma de suas subsidiárias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
