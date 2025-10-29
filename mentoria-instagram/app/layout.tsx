import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentoria Instagram para Pequenos Empresários",
  description: "Aprenda a usar o Instagram para divulgar seu negócio, configurar bio, Linktree, respostas automáticas e muito mais!",
  keywords: ["Instagram", "Mentoria", "Marketing Digital", "Pequenos Empresários", "Redes Sociais"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
