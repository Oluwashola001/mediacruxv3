import About from '@/components/About';
import Contact from '@/components/contact';
import Hero from '@/components/Hero';
import ScrollShowcase from "@/components/ScrollShowcase";

export default function Page() {
  return (
    <>
      <Hero />
      <ScrollShowcase />
      <About />
      <Contact />
      {/* Other sections will go here */}
    </>
  );
}
