import OfficeLocation from "@/components/Contact/Alamat";
import ContactForm from "@/components/Contact/Kontak";

export const metadata = {
  title: "A.N.I Tech - Layanan",
  description:
    "ANI Technology adalah startup teknologi yang berkomitmen menghadirkan inovasi melalui pengembangan produk digital unggulan. Kami menggabungkan keahlian teknis dengan pemahaman mendalam terhadap kebutuhan klien untuk memberikan solusi yang relevan, efisien, dan berdampak positif.",
  keywords: "tentang, ani, A.N.I, about",
  icons: {
    icon: "/img/logo.png",
  },
};

export default function ML() {
  return (
    <div>
      <OfficeLocation />
      <ContactForm />
    </div>
  );
}
