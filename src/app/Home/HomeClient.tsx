import AboutUs from "@/components/Home/AboutUs";
import Carousel from "@/components/Home/Carousel";
import Faq from "@/components/Home/Faq";
import Layanan from "@/components/Home/Layanan";
import ContactCard from "@/components/Home/ContactCard";
import WhatsAppButton from "@/components/Floating/WhatsAppButton";

function HomeClient() {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Layanan />
      <Faq />
      <ContactCard />
      <WhatsAppButton />
    </div>
  );
}

export default HomeClient;
