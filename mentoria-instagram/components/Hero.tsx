"use client";

import Hero from "@/components/animated/animated.shader.hero";

// Demo Component showing how to use the Hero
const HeroDemo: React.FC = () => {
  const handlePrimaryClick = () => {
    console.log("Get Started clicked!");
    // Add your logic here
  };

  const handleSecondaryClick = () => {
    console.log("Explore Features clicked!");
    // Add your logic here
  };

  return (
    <div className="w-full">
      <Hero
        trustBadge={{
          text: "Aprovado por clientes que pensam além.",
          icons: [""],
        }}
        headline={{
          line1: "Lance seu negócio",
          line2: "em Órbita",
        }}
        subtitle="Com estratégias profissionais e presença digital forte, colocamos seu negócio em órbita"
        buttons={{
          primary: {
            text: "Comece Agora",
            onClick: handlePrimaryClick,
          },
          secondary: {
            text: "Saiba Mais",
            onClick: handleSecondaryClick,
          },
        }}
      />
    </div>
  );
};

export default HeroDemo;
