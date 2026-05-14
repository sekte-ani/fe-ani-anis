"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Send,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle,
  Sparkles,
  ExternalLink,
  ZoomIn,
} from "lucide-react";

const SALES_WA_NUMBER = "6285117202154";

interface FormData {
  name: string;
  phone_number: string;
  email: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  phone_number?: string;
  email?: string;
}

function GenerationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const mockId = searchParams.get("mock_id") || "";
  const namaMock = searchParams.get("nama_mock") || "";
  const sektor = searchParams.get("sektor") || "";
  const pathImage = searchParams.get("path_image") || "";
  const keywords = searchParams.get("keywords") || "";
  const similarity = searchParams.get("similarity") || "";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone_number: "",
    email: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama wajib diisi";
    }

    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Nomor telepon wajib diisi";
    } else if (!/^[0-9+\-\s()]{8,20}$/.test(formData.phone_number.trim())) {
      newErrors.phone_number = "Format nomor telepon tidak valid";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Format email tidak valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = (): string => {
    const lines = [
      `Halo, nama saya ${formData.name} dengan email ${formData.email} dan kontak ${formData.phone_number}, saya ingin membuat website ${sektor}, dengan detail berikut:`,
      ``,
      `Mock ID: ${mockId}`,
      `Nama Mockup: ${namaMock}`,
    ];

    if (pathImage) {
      lines.push(`Link Mockup: ${pathImage}`);
    }

    if (formData.notes.trim()) {
      lines.push(``, `Catatan Tambahan:`, formData.notes.trim());
    }

    lines.push(``, `Mohon dibantu, terima kasih.`);

    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const message = buildWhatsAppMessage();
    const waUrl = `https://wa.me/${SALES_WA_NUMBER}?text=${encodeURIComponent(message)}`;

    setIsSubmitted(true);

    // Small delay so user sees the success state briefly
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 800);
  };

  // No mock data — redirect back
  if (!mockId || !namaMock) {
    return (
      <div className="animate-in fade-in duration-500">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
            <FileText size={28} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Data Mockup Tidak Ditemukan
          </h2>
          <p className="text-slate-500 mb-8 max-w-md">
            Silakan pilih mockup terlebih dahulu dari halaman Discovery untuk
            melanjutkan.
          </p>
          <button
            onClick={() => router.push("/rekomendasi/creation")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all"
          >
            <ArrowLeft size={16} />
            Kembali ke Discovery
          </button>
        </div>
      </div>
    );
  }

  // Success state
  if (isSubmitted) {
    return (
      <div className="animate-in fade-in duration-500">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Berhasil Dikirim! 🎉
          </h2>
          <p className="text-slate-500 mb-2 max-w-md">
            Pesan kamu sedang diarahkan ke WhatsApp Sales kami.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Tim kami akan segera menghubungi kamu.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/rekomendasi/creation")}
              className="border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all"
            >
              <ArrowLeft size={16} />
              Buat Lagi
            </button>
            <button
              onClick={() => {
                const message = buildWhatsAppMessage();
                const waUrl = `https://wa.me/${SALES_WA_NUMBER}?text=${encodeURIComponent(message)}`;
                window.open(waUrl, "_blank");
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all"
            >
              Buka WhatsApp Lagi
              <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-10">
        <button
          onClick={() => router.back()}
          className="text-slate-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1.5 mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Kembali
        </button>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-600/20">
            <Sparkles size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Formulir Pemesanan
            </h1>
            <p className="text-slate-500 text-sm">
              Lengkapi data di bawah untuk menghubungi tim Sales kami
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left — Selected Mock Preview */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm sticky top-6">
            <div className="px-5 pt-5 pb-3">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                Mockup Dipilih
              </p>
            </div>

            {pathImage && (
              <div className="px-5">
                <a
                  href={pathImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block w-full rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={pathImage}
                    alt={namaMock}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 text-sm font-medium text-slate-800 shadow-lg">
                      <ZoomIn size={16} />
                      Lihat Preview
                    </div>
                  </div>
                </a>
              </div>
            )}

            <div className="p-5 space-y-3">
              <h3 className="font-bold text-lg text-slate-800">{namaMock}</h3>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Mock ID
                  </span>
                  <span className="text-sm font-mono text-slate-700 bg-slate-50 px-2.5 py-0.5 rounded-lg">
                    {mockId}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Sektor
                  </span>
                  <span className="text-sm text-slate-700 capitalize bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-lg font-semibold">
                    {sektor}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <User size={18} className="text-blue-600" />
                Data Diri
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="form-name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={16} className="text-slate-400" />
                    </div>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                      className={`w-full py-3 pl-11 pr-4 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white text-slate-700 transition-all ${
                        errors.name
                          ? "border-red-300 bg-red-50"
                          : "border-slate-200"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="form-phone"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Nomor Telepon <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone size={16} className="text-slate-400" />
                    </div>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="08xx xxxx xxxx"
                      className={`w-full py-3 pl-11 pr-4 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white text-slate-700 transition-all ${
                        errors.phone_number
                          ? "border-red-300 bg-red-50"
                          : "border-slate-200"
                      }`}
                    />
                  </div>
                  {errors.phone_number && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.phone_number}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="form-email"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={16} className="text-slate-400" />
                    </div>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contoh@email.com"
                      className={`w-full py-3 pl-11 pr-4 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white text-slate-700 transition-all ${
                        errors.email
                          ? "border-red-300 bg-red-50"
                          : "border-slate-200"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="form-notes"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Catatan Tambahan{" "}
                    <span className="text-slate-400 font-normal">
                      (opsional)
                    </span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-0 pl-4 pointer-events-none">
                      <FileText size={16} className="text-slate-400" />
                    </div>
                    <textarea
                      id="form-notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tambahkan catatan, permintaan khusus, atau detail lainnya..."
                      className="w-full py-3 pl-11 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white text-slate-700 transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <Send size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Kirim via WhatsApp
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Data kamu akan dikirim langsung ke tim Sales melalui
                    WhatsApp. Kami akan segera memproses permintaan kamu.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2.5 transition-all shadow-sm shadow-green-600/20 hover:shadow-md hover:shadow-green-600/30 active:scale-[0.98]"
              >
                <Send size={18} />
                Kirim ke WhatsApp Sales
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function GenerationPage() {
  return (
    <Suspense
      fallback={
        <div className="animate-in fade-in duration-500">
          <div className="flex items-center justify-center py-20">
            <div className="text-slate-500">Memuat formulir...</div>
          </div>
        </div>
      }
    >
      <GenerationContent />
    </Suspense>
  );
}
