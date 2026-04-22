import Jasa from "@/components/Layanan/Ui/Jasa";
import Pengembangan from "@/components/Layanan/Ui/Pengembangan";
import Paket from "@/components/Layanan/Ui/Paket";
import Bottom from "@/components/Layanan/Ui/Bottom";
import WhatsAppButton from "@/components/Floating/WhatsAppButton";

export default function UI() {
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