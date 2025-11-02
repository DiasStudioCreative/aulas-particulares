import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatYouLearn from '@/components/WhatYouLearn';
import ForWho from '@/components/ForWho';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { AppleStyleDock } from '@/components/header';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}
