import Jasa from "@/components/Layanan/Ml/Jasa";
import Pengembangan from "@/components/Layanan/Ml/Pengembangan";
import Paket from "@/components/Layanan/Ml/Paket";
import Bottom from "@/components/Layanan/Ml/Bottom";
import WhatsAppButton from "@/components/Floating/WhatsAppButton";

export default function ML() {
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