# Guia de Deploy - Mentoria Instagram

## Deploy na Vercel (Recomendado)

### Método 1: Deploy via Dashboard (Mais Fácil)

1. **Acesse a Vercel**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com GitHub (ou crie uma conta grátis)

2. **Importe o Projeto**
   - Clique em "Add New" → "Project"
   - Clique em "Import Git Repository"
   - Selecione o repositório: `DiasStudioCreative/aulas-particulares`
   - Branch: `claude/mentorship-landing-page-011CUaqhhmj9aARXWonJNX7d`

3. **Configure o Projeto**
   ```
   Framework Preset: Next.js (detectado automaticamente)
   Root Directory: mentoria-instagram
   Build Command: npm run build (preenchido automaticamente)
   Output Directory: .next (preenchido automaticamente)
   Install Command: npm install (preenchido automaticamente)
   ```

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde 2-3 minutos
   - Seu site estará disponível em: `https://seu-projeto.vercel.app`

5. **Configurar Domínio Personalizado (Opcional)**
   - No dashboard do projeto, vá em "Settings" → "Domains"
   - Adicione seu domínio personalizado (ex: mentoria-instagram.com)
   - Configure os DNS conforme instruções da Vercel

### Método 2: Deploy via CLI

Se preferir usar a linha de comando localmente:

```bash
# 1. Instale a Vercel CLI (se ainda não tiver)
npm i -g vercel

# 2. Entre no diretório do projeto
cd mentoria-instagram

# 3. Faça login na Vercel (abrirá navegador)
vercel login

# 4. Deploy de desenvolvimento (preview)
vercel

# 5. Deploy de produção
vercel --prod
```

### Método 3: Deploy Automático via GitHub

Após conectar o projeto uma vez via dashboard:

1. Todo push para a branch principal = Deploy automático em produção
2. Todo push para outras branches = Deploy de preview
3. Pull Requests = Deploy de preview automático

---

## Deploy em Outros Serviços

### Netlify

1. Acesse [netlify.com](https://netlify.com)
2. "Add new site" → "Import an existing project"
3. Conecte com GitHub
4. Configure:
   ```
   Base directory: mentoria-instagram
   Build command: npm run build
   Publish directory: .next
   ```
5. Deploy

**Importante:** Adicione arquivo `netlify.toml`:
```toml
[build]
  base = "mentoria-instagram"
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Cloudflare Pages

1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. "Create a project" → Conecte GitHub
3. Configure:
   ```
   Build command: npm run build
   Build output directory: .next
   Root directory: mentoria-instagram
   Framework preset: Next.js
   ```
4. Deploy

### Railway

1. Acesse [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Selecione o repositório
4. Configure:
   ```
   Root Directory: mentoria-instagram
   Build Command: npm run build
   Start Command: npm start
   ```
5. Deploy

### DigitalOcean App Platform

1. Acesse [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
2. "Create App" → GitHub
3. Configure:
   ```
   Source Directory: mentoria-instagram
   Build Command: npm run build
   Run Command: npm start
   HTTP Port: 3000
   ```
4. Deploy

---

## Configurações Importantes Pós-Deploy

### 1. Variáveis de Ambiente

Se você integrar com serviços externos, adicione as variáveis de ambiente:

**Vercel:**
- Dashboard → Settings → Environment Variables

**Netlify:**
- Site settings → Build & deploy → Environment

Exemplos de variáveis:
```env
NEXT_PUBLIC_API_URL=https://api.seusite.com
SENDGRID_API_KEY=sua_chave_aqui
DATABASE_URL=sua_conexao_db
```

### 2. Domínio Personalizado

**Vercel:**
1. Settings → Domains
2. Adicione seu domínio
3. Configure DNS:
   ```
   Type: CNAME
   Name: www (ou @)
   Value: cname.vercel-dns.com
   ```

**Netlify:**
1. Domain settings → Add custom domain
2. Configure DNS conforme instruções

### 3. Analytics

Adicione analytics no `app/layout.tsx`:

**Google Analytics:**
```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 4. SEO - Open Graph

Adicione imagens para redes sociais em `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... existing metadata
  openGraph: {
    title: 'Mentoria Instagram para Pequenos Empresários',
    description: 'Aprenda a dominar o Instagram...',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentoria Instagram',
    description: 'Aprenda a dominar o Instagram...',
    images: ['/twitter-image.png'],
  },
}
```

---

## Troubleshooting

### Build falha na Vercel

**Erro:** `Module not found`
- Verifique se todas as dependências estão em `package.json`
- Execute `npm install` localmente primeiro

**Erro:** `Build exceeded maximum duration`
- Otimize imagens
- Verifique se não há loops infinitos
- Entre em contato com suporte da Vercel

### Site não carrega após deploy

1. Verifique os logs de build
2. Confirme que `Root Directory` está configurado como `mentoria-instagram`
3. Verifique se o build local funciona: `npm run build && npm start`

### Formulário não funciona

O formulário precisa de backend. Opções:
1. Criar API route em `app/api/contact/route.ts`
2. Usar serviço externo (Formspree, SendGrid)
3. Conectar com CRM (HubSpot, Mailchimp)

---

## Monitoramento Pós-Deploy

### Vercel Analytics

Adicione analytics da Vercel:
```bash
npm install @vercel/analytics
```

Em `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Performance

Monitore performance em:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Vercel Speed Insights (se usando Vercel)

---

## Checklist Final

Antes de anunciar o site:

- [ ] Deploy realizado com sucesso
- [ ] Site acessível via URL
- [ ] Todas as seções carregam corretamente
- [ ] Links funcionando
- [ ] Formulário testado (integração configurada)
- [ ] Responsivo (teste em mobile)
- [ ] Analytics configurado
- [ ] Domínio personalizado (se aplicável)
- [ ] SEO - meta tags configuradas
- [ ] Imagens Open Graph adicionadas
- [ ] Informações de contato corretas
- [ ] Preços atualizados
- [ ] SSL/HTTPS ativo (automático na Vercel)

---

## Suporte

Problemas com deploy?

- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify:** [docs.netlify.com](https://docs.netlify.com)
- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)

Ou abra uma issue no repositório!
