import CallToAction from "@/components/call-to-action";
import FeaturesSection from "@/components/features-2";
import FooterEnd from "@/components/footer-end";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-8";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="integrations">
        <IntegrationsSection />
      </div>
      {/* <Testimonials /> */}
      <div id="pricing">
        <Pricing />
      </div>
      <CallToAction />
      <FooterEnd />
      {/* <FooterSection /> */}
    </div>
  );
}
