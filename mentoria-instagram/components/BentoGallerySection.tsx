"use client";

import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Resultado Real #1",
    desc: "Antes e depois: crescimento de 500% em alcance orgânico",
    url: "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcbP3rYTiXwH7Y106CepJOsoAgQjyFi3MUfDkh",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Reel Viral",
    desc: "Estratégia de conteúdo que gerou mais de 50K visualizações",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Bio Estratégica",
    desc: "Transformação de bio que triplicou cliques no link",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "Posts que Convertem",
    desc: "Estrutura de posts que transformam seguidores em clientes",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "video",
    title: "Case de Sucesso",
    desc: "Aluna que aumentou vendas em 300% aplicando as estratégias",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "Estratégia de Hashtags",
    desc: "Planejamento de hashtags que triplicou o alcance",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "video",
    title: "Métricas que Crescem",
    desc: "Instagram Insights: como interpretar e otimizar resultados",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
];

export default function BentoGallerySection() {
  return (
    <div className="min-h-screen overflow-y-auto bg-black bg-dot-white/[0.2] py-12">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Casos de Sucesso e Resultados Reais"
        description="Explore estratégias comprovadas e transformações de alunos que dominaram o Instagram"
      />
    </div>
  );
}

