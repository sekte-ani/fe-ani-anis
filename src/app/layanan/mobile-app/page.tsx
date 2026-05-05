import Jasa from "@/components/Layanan/Mobile/Jasa";
import Pengembangan from "@/components/Layanan/Mobile/Pengembangan";
import Paket from "@/components/Layanan/Mobile/Paket";
import TechStack from "@/components/Layanan/Mobile/TechStack";
import JenisAplikasi from "@/components/Layanan/Mobile/JenisAplikasi";
import WhyChooseUs from "@/components/Layanan/Mobile/WhyChooseUs";
import Bottom from "@/components/Layanan/Mobile/Bottom";
import WhatsAppButton from "@/components/Floating/WhatsAppButton";

export default function Mobile() {
	return (
		<div>
			<Jasa />
			<JenisAplikasi />
			<Pengembangan />
			<TechStack />
			<WhyChooseUs />
			<Paket />
			<Bottom />
			<WhatsAppButton />
		</div>
	);
}
