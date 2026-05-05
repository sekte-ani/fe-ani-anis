import { ArrowRight, MessageCircle } from "lucide-react";

export default function Portofoli2Page() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Inilah Konsep Ide untuk Brand Kamu!</h1>
        <p className="text-slate-500 text-lg max-w-3xl leading-relaxed">
          Telusuri kurasi konsep visual yang telah kami rancang berdasarkan visi unik brand Anda. Setiap pilihan membawa narasi yang berbeda.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-16">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col group">
          <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-800 to-slate-800 p-4 flex flex-col justify-end">
            <div className="absolute inset-0 bg-[#1e3a8a] opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"></div>
            {/* Fake 3D Object for Minimalist */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-24 bg-white/10 backdrop-blur-sm border-t border-white/20 rounded-sm"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full w-8 h-8 rounded-full bg-orange-200/80 -mt-2"></div>
            
            <div className="relative z-10 flex">
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full">
                THE MINIMALIST
              </span>
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Kejernihan Organik</h3>
            <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-8">
              Menonjolkan ruang kosong dan tipografi yang tenang. Cocok untuk brand yang menghargai esensi dan kejujuran produk.
            </p>
            <button className="w-full py-3 rounded-xl border border-slate-200 font-bold text-blue-700 hover:bg-blue-50 transition-colors">
              Pilih Desain Ini
            </button>
          </div>
        </div>

        {/* Card 2 (Active/Recommended) */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl ring-1 ring-blue-100 flex flex-col group relative transform -translate-y-2">
          <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800 p-4 flex flex-col justify-end">
            <div className="absolute inset-0 bg-blue-900 opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"></div>
            {/* Fake 3D Object for Visionary */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <svg width="120" height="120" viewBox="0 0 100 100" className="text-orange-400 opacity-80">
                 <path d="M50 10 Q 90 20, 80 50 T 50 90 Q 10 80, 20 50 T 50 10" fill="currentColor" className="animate-pulse" />
                 <path d="M50 20 Q 80 30, 70 50 T 50 80 Q 20 70, 30 50 T 50 20" fill="#38bdf8" />
               </svg>
            </div>

            <div className="relative z-10 flex">
              <span className="bg-blue-500/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full">
                THE VISIONARY
              </span>
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Energi Dinamis</h3>
            <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-8">
              Menggunakan gradasi berani dan bentuk asimetris untuk menciptakan kesan inovasi dan pergerakan tanpa batas.
            </p>
            <button className="w-full py-3 rounded-xl bg-[#2563EB] text-white font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-700/20">
              Pilih Desain Ini
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col group">
          <div className="h-48 relative overflow-hidden bg-gradient-to-t from-black to-slate-800 p-4 flex flex-col justify-end">
            <div className="absolute inset-0 bg-black opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"></div>
             {/* Fake 3D Object for Heritage */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-32 bg-gradient-to-b from-slate-300 to-slate-600 rounded-t-full opacity-80"></div>
            
            <div className="relative z-10 flex">
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full">
                THE HERITAGE
              </span>
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Elegan Klasik</h3>
            <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-8">
              Memadukan estetika tradisional dengan sentuhan modern. Sempurna untuk brand yang mengedepankan kualitas dan kepercayaan.
            </p>
            <button className="w-full py-3 rounded-xl border border-slate-200 font-bold text-blue-700 hover:bg-blue-50 transition-colors">
              Pilih Desain Ini
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-[#EFF6FF] rounded-3xl p-8 md:p-10 flex items-center justify-between shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 max-w-xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Suka dengan konsepnya?</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Hubungi tim ahli kami untuk eksekusi lebih lanjut melalui WhatsApp dan wujudkan identitas brand impian Anda hari ini.
          </p>
        </div>
        <div className="relative z-10">
          <button className="bg-[#2563EB] hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-lg shadow-blue-600/20">
            <MessageCircle size={20} className="text-white/80" />
            <div className="text-left leading-tight">
              <span>Hubungi via</span><br/>
              <span>WhatsApp</span>
            </div>
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
      
      {/* Pagination dots bottom right */}
      <div className="flex justify-end mt-4 gap-1.5 mr-4">
        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        <div className="w-6 h-2 rounded-full bg-blue-700"></div>
        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
      </div>
    </div>
  );
}
