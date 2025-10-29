# Mentoria Instagram - Landing Page

Landing page profissional para venda de mentoria sobre Instagram para pequenos empresários.

## Recursos

- Design moderno e responsivo
- Construído com Next.js 14 e React 18
- Estilização com Tailwind CSS
- TypeScript para maior segurança de tipos
- Componentes reutilizáveis e modulares
- Otimizado para SEO

## Seções do Site

1. **Hero** - Seção principal com chamada para ação
2. **Sobre** - Informações sobre a mentoria
3. **O que você vai aprender** - 8 módulos detalhados incluindo:
   - Perfil Profissional Completo
   - Linktree e Links na Bio
   - Respostas Automáticas
   - Criação de Conteúdo
   - Estratégia de Hashtags
   - Análise e Crescimento
   - Engajamento e Comunidade
   - Monetização e Vendas
4. **Para quem é** - Público-alvo da mentoria
5. **Depoimentos** - Avaliações de clientes
6. **Preços** - Três planos (Básico, Profissional, Premium)
7. **Contato** - Formulário de inscrição
8. **Footer** - Links e informações adicionais

## Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/) - Framework React
- [React 18](https://reactjs.org/) - Biblioteca JavaScript
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [React Icons](https://react-icons.github.io/react-icons/) - Ícones

## Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn

## Como executar

1. **Clone o repositório (se necessário)**

```bash
cd mentoria-instagram
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

4. **Abra no navegador**

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## Estrutura de Pastas

```
mentoria-instagram/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página inicial
│   └── globals.css      # Estilos globais
├── components/
│   ├── Hero.tsx         # Seção Hero
│   ├── About.tsx        # Seção Sobre
│   ├── WhatYouLearn.tsx # Módulos de aprendizado
│   ├── ForWho.tsx       # Público-alvo
│   ├── Testimonials.tsx # Depoimentos
│   ├── Pricing.tsx      # Preços
│   ├── Contact.tsx      # Formulário de contato
│   └── Footer.tsx       # Rodapé
├── public/              # Arquivos estáticos
├── package.json         # Dependências
└── tailwind.config.js   # Configuração Tailwind
```

## Personalização

### Cores

As cores do Instagram são definidas no `tailwind.config.js`:

```javascript
colors: {
  instagram: {
    pink: '#E1306C',
    purple: '#833AB4',
    orange: '#F77737',
    yellow: '#FCAF45',
  },
}
```

### Conteúdo

Edite os componentes em `components/` para personalizar:
- Textos e descrições
- Preços e planos
- Informações de contato
- Depoimentos

### Formulário de Contato

O formulário em `components/Contact.tsx` atualmente apenas exibe um alert. Para integrar com um backend ou serviço de email:

1. Crie uma API route em `app/api/contact/route.ts`
2. Integre com serviços como SendGrid, Mailgun, ou Resend
3. Ou conecte com plataformas como HubSpot, Mailchimp, etc.

## Deploy

### Vercel (Recomendado)

1. Instale a CLI da Vercel: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções

### Outros Serviços

- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## Próximos Passos

- [ ] Integrar formulário de contato com backend
- [ ] Adicionar animações mais elaboradas
- [ ] Implementar analytics (Google Analytics, Plausible, etc.)
- [ ] Adicionar blog ou seção de conteúdo
- [ ] Implementar área de membros
- [ ] Adicionar sistema de pagamento (Stripe, PayPal, etc.)

## Licença

Este projeto é privado e destinado ao uso exclusivo da Mentoria Instagram.

## Suporte

Para dúvidas ou suporte, entre em contato através de:
- Email: contato@mentoriainstagram.com
- WhatsApp: (00) 00000-0000
