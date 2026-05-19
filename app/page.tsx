import Hero from '@/components/home/Hero';
import Experiences from '@/components/home/Experiences';
import Destinations from '@/components/home/Destinations';
import TourPackagesSection from '@/components/home/TourPackagesSection';
import WhyUs from '@/components/home/WhyUs';
import Gallery from '@/components/home/Gallery';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Experiences />
      <Destinations />
      <TourPackagesSection />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
