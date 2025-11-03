import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatYouLearn from '@/components/WhatYouLearn';
import ForWho from '@/components/ForWho';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { AppleStyleDock } from '@/components/header';
import GeminiEffectSection from '@/components/GeminiEffectSection';
import GlobeSection from '@/components/GlobeSection';
import BentoGallerySection from '@/components/BentoGallerySection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <GeminiEffectSection />
      <GlobeSection />
      <BentoGallerySection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
