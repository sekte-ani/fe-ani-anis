import Jasa from "@/components/Layanan/Mobile/Jasa";
import Pengembangan from "@/components/Layanan/Mobile/Pengembangan";
import Paket from "@/components/Layanan/Mobile/Paket";
import Bottom from "@/components/Layanan/Mobile/Bottom";
import WhatsAppButton from "@/components/Floating/WhatsAppButton";

export default function Mobile() {
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