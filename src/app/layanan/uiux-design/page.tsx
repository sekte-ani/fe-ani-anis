import Jasa from "@/components/Layanan/Ui/Jasa";
import Pengembangan from "@/components/Layanan/Ui/Pengembangan";
import Paket from "@/components/Layanan/Ui/Paket";
import TechStack from "@/components/Layanan/Ui/TechStack";
import JenisDesign from "@/components/Layanan/Ui/JenisDesign";
import WhyChooseUs from "@/components/Layanan/Ui/WhyChooseUs";
import Bottom from "@/components/Layanan/Ui/Bottom";
import WhatsAppButton from "@/components/Floating/WhatsAppButton";

export default function UI() {
	return (
		<div>
			<Jasa />
			<JenisDesign />
			<Pengembangan />
			<TechStack />
			<WhyChooseUs />
			<Paket />
			<Bottom />
			<WhatsAppButton />
		</div>
	);
}
