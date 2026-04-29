import { CheckCircle2, Download, Rocket, Type, Palette, Layout } from "lucide-react";

export default function Final2Page() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex items-start justify-between mb-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] tracking-widest uppercase mb-4">
            <CheckCircle2 size={14} /> FINAL CONCEPT VISUALIZATION
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">The Clarifying Current</h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Sebuah pendekatan editorial untuk penemuan ide yang menggabungkan kedalaman atmosferik dengan kejernihan visual.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-slate-200 text-blue-800 font-bold hover:bg-slate-50 transition-colors shadow-sm">
            <Download size={18} />
            <span className="text-left leading-tight text-sm">
              Download<br/>Concept PDF
            </span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold transition-all shadow-md shadow-blue-600/20">
            <span className="text-left leading-tight text-sm">
              Mulai<br/>Bangun
            </span>
            <Rocket size={18} className="ml-1" />
          </button>
        </div>
      </div>

      {/* Hero Image Area */}
      <div className="w-full h-80 rounded-3xl overflow-hidden relative mb-8 group bg-gradient-to-b from-slate-200 to-slate-400">
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply group-hover:bg-black/10 transition-colors duration-500"></div>
        {/* Placeholder for building image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-slate-800 rounded-t-sm shadow-2xl flex items-center justify-center">
            <div className="w-16 h-16 bg-white/10 rounded-sm absolute top-8 left-8"></div>
            <div className="w-12 h-12 bg-white/10 rounded-sm absolute top-12 right-12"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
          <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full mb-3 inline-block">
            MOOD VISUALIZATION
          </span>
          <h2 className="text-3xl font-bold text-white tracking-wide">Fluiditas & Kejelasan</h2>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-12 gap-8 mb-8">
        {/* Left Column - Colors */}
        <div className="col-span-5 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-6">
            <Palette size={18} className="text-blue-600" /> Filosofi Warna
          </h3>
          <div className="space-y-4 flex-1">
            <div className="flex gap-4 items-center bg-[#EFF6FF] p-4 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#1D4ED8] shadow-sm shrink-0"></div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Deep Teal (#066873)</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Kestabilan, kedalaman intelektual, dan ketenangan profesional.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-[#EFF6FF] p-4 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#3B82F6] shadow-sm shrink-0"></div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Aqua Mist (#509DA8)</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Transparansi, pembaruan, dan aliran ide yang segar.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-[#EFF6FF] p-4 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] shadow-sm shrink-0 border border-slate-200"></div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Soft Surface (#EBF5F7)</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Ruang bernapas bagi konten untuk tampil menonjol.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Typography */}
        <div className="col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-6">
            <Type size={18} className="text-blue-600" /> Rekomendasi Font
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#F6F8FA] p-5 rounded-2xl">
              <p className="text-[10px] font-bold text-blue-500 tracking-wider uppercase mb-2">HEADLINE</p>
              <h4 className="text-3xl font-bold text-slate-800 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Manrope</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Memberikan kesan geometris yang modern namun tetap hangat dan ekspresif.</p>
            </div>
            <div className="bg-[#F6F8FA] p-5 rounded-2xl">
              <p className="text-[10px] font-bold text-blue-500 tracking-wider uppercase mb-2">BODY & UI</p>
              <h4 className="text-2xl font-medium text-slate-800 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Inter</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Dirancang khusus untuk layar digital dengan tingkat keterbacaan tinggi di segala ukuran.</p>
            </div>
          </div>
          <div className="bg-[#EFF6FF] p-6 rounded-2xl flex-1 flex flex-col justify-center">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-3">TYPOGRAPHY PAIRING PREVIEW</p>
            <h4 className="text-xl font-bold text-slate-800 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
              The future belongs to those who believe in the beauty of their dreams.
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Eleanor Roosevelt said these words to inspire generations. Our design system adopts this philosophy through clarity and focus.
            </p>
          </div>
        </div>
      </div>

      {/* Structure Section */}
      <div className="bg-[#EFF6FF] rounded-3xl p-8 shadow-sm border border-blue-50 flex items-center justify-between">
        <div className="flex-1 pr-12">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Struktur Halaman</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm shrink-0">01</div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Hero Discovery Engine</h4>
                <p className="text-xs text-slate-500 mt-1">Area visual utama untuk mengekspresikan ide dalam bentuk multimedia berkualitas tinggi.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm shrink-0">02</div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Semantic Side Navigation</h4>
                <p className="text-xs text-slate-500 mt-1">Navigasi berbasis alur kerja yang membimbing user melalui tahapan berpikir logis.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm shrink-0">03</div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Atmospheric Canvas</h4>
                <p className="text-xs text-slate-500 mt-1">Layout asimetris tanpa border untuk menciptakan rasa tak terbatas (infinity feeling).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm shrink-0">04</div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Utility Layering</h4>
                <p className="text-xs text-slate-500 mt-1">Widget kontrol yang muncul secara kontekstual untuk menjaga fokus pada konten utama.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wireframe UI */}
        <div className="w-[350px] h-[250px] bg-white rounded-2xl shadow-xl shadow-blue-900/5 border-4 border-white overflow-hidden p-3 flex gap-3">
          {/* Sidebar Wireframe */}
          <div className="w-1/4 h-full bg-slate-100 rounded-lg flex flex-col gap-2 p-2">
            <div className="w-full h-4 bg-slate-200 rounded"></div>
            <div className="w-full h-3 bg-slate-200 rounded mt-4"></div>
            <div className="w-3/4 h-3 bg-slate-200 rounded"></div>
            <div className="w-5/6 h-3 bg-slate-200 rounded"></div>
          </div>
          {/* Main Content Wireframe */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="w-full h-1/3 bg-slate-100 rounded-xl"></div>
            <div className="w-full flex-1 bg-slate-100 rounded-xl p-3 flex gap-2">
               <div className="flex-1 h-full bg-slate-200 rounded-lg"></div>
               <div className="w-1/3 h-full bg-slate-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between text-xs text-slate-400 px-2 pb-6">
        <p>© 2024 Clarifying Current System. Generated for Idea Concept Detail View.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-600 transition-colors">Documentation</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Style Guide</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Export Assets</a>
        </div>
      </div>
    </div>
  );
}
