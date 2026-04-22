import Jasa from "@/components/Layanan/Web/Jasa";
import Pengembangan from "@/components/Layanan/Web/Pengembangan";
import Paket from "@/components/Layanan/Web/Paket";
import Bottom from "@/components/Layanan/Web/Bottom";
import WhatsAppButton from "@/components/Floating/WhatsAppButton";

export default function Web() {
	return (
		<div>
			<Jasa />
			<Pengembangan />
			<Paket />
			<Bottom />
			<WhatsAppButton />
		</div>
	);
}