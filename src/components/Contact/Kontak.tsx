"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MessageCircle, Mail, Send } from "lucide-react";

const services = [
  "Web Development",
  "UI/UX Design",
  "Mobile App",
  "ML/AI",
  "Lainnya",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = encodeURIComponent(
      `Halo ANI Solution,%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0ATelepon: ${formData.phone}%0APerusahaan: ${formData.company}%0ALayanan: ${formData.service}%0A%0APesan:%0A${formData.message}`
    );
    window.open(`https://wa.me/62856789939991?text=${waMessage}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-3">
              Hubungi Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-greenfont1 mb-6">
              Ada Pertanyaan? Yuk, Ngobrol!
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Cuma butuh satu klik buat ngobrol bareng kami! Atau bisa isi
              formulir di samping dan kirim, tim kami bakal langsung balas dengan
              solusi terbaik buat kebutuhanmu.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-third rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-greenfont2" />
                </div>
                <div>
                  <p className="font-bold text-greenfont1 mb-1">
                    Chat Kami, Kapan Aja!
                  </p>
                  <p className="text-sm text-gray-600">
                    Jangan ragu buat hubungi kami kapan aja. Tim kami siap bantu
                    24/7!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-third rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-greenfont2" />
                </div>
                <div>
                  <p className="font-bold text-greenfont1 mb-1">
                    Butuh Bantuan? Kami Siap!
                  </p>
                  <p className="text-sm text-gray-600">
                    Apa pun pertanyaanmu soal proyek, kami siap bantu. Yuk,
                    ngobrol bareng tim ahli kami!
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-greenfont1">Info Kontak</p>
              <a
                href="https://wa.me/62856789939991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-primary transition-colors"
              >
                <MessageCircle size={20} className="text-greenfont2" />
                <span className="font-medium text-gray-700">0856 7893 9991</span>
              </a>
              <a
                href="mailto:aniteknologi@gmail.com"
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-primary transition-colors"
              >
                <Mail size={20} className="text-greenfont2" />
                <span className="font-medium text-gray-700">
                  aniteknologi@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-greenfont1 mb-6">
                Kirim Pesan
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama *
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    type="text"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    type="email"
                    placeholder="Email Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    type="tel"
                    placeholder="Nomor Telepon Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Perusahaan
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    type="text"
                    placeholder="Perusahaan Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Layanan *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  >
                    <option value="">Pilih Layanan</option>
                    {services.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-greenfont2 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Kirim via MessageCircle
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;