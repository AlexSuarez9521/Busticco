import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ProcessSection from '@/components/sections/ProcessSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ClientsSection from '@/components/sections/ClientsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <ClientsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
