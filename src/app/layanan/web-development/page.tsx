import Jasa from "@/components/Layanan/Web/Jasa";
import Pengembangan from "@/components/Layanan/Web/Pengembangan";
import Paket from "@/components/Layanan/Web/Paket";
import TechStack from "@/components/Layanan/Web/TechStack";
import JenisWebsite from "@/components/Layanan/Web/JenisWebsite";
import WhyChooseUs from "@/components/Layanan/Web/WhyChooseUs";
import Bottom from "@/components/Layanan/Web/Bottom";
import WhatsAppButton from "@/components/Floating/WhatsAppButton";

export default function Web() {
  return (
    <div>
      <Jasa />
      <JenisWebsite />
      <Pengembangan />
      <TechStack />
      <WhyChooseUs />
      <Paket />
      <Bottom />
      <WhatsAppButton />
    </div>
  );
}
