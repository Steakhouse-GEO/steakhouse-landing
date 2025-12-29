import CallToAction from "@/components/call-to-action";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import FooterEnd from "@/components/footer-end";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-8";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <FooterEnd />
      {/* <FooterSection /> */}
    </div>
  );
}
