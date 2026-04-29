import { Sparkles, MapPin, Check, RefreshCw, Edit2, ArrowRight, LayoutTemplate, ShoppingBag, Building2 } from "lucide-react";

export default function Home2Page() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Discovery Questionnaire</h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          Tell us about your vision. We'll use these details to craft a digital experience that resonates with your brand essence.
        </p>
      </div>

      <div className="flex flex-col items-center text-center mb-16">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md shadow-blue-600/20 rotate-3">
          <Sparkles size={24} />
        </div>
        <h2 className="text-4xl font-extrabold text-[#1f2937] mb-4">Halo, kamu mau buat<br/>apa nih?</h2>
        <p className="text-slate-500 mb-8 text-lg">Tuangkan ide kreatifmu, biarkan kami merancang<br/>konsepnya.</p>
        
        <div className="w-full max-w-2xl relative shadow-sm rounded-2xl overflow-hidden">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-slate-400" />
          </div>
          <input 
            type="text" 
            className="w-full py-4 pl-12 pr-32 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700" 
            placeholder="Ketik ide atau konsepmu di sini..."
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <button className="bg-[#2563EB] hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 transition-all">
              Mulai <ArrowRight size={16} />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-6 text-sm">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-xs">Inspirasi:</span>
          <span className="text-slate-500">Aplikasi Edukasi</span>
          <span className="text-slate-500">Kampanye Lingkungan</span>
          <span className="text-slate-500">Smart Home Concept</span>
        </div>
      </div>

      <div className="space-y-12">
        {/* Step 1 */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">1</span>
            Choose Website Type
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 p-6 rounded-3xl hover:border-blue-500 cursor-pointer transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 mb-4">
                <LayoutTemplate size={24} />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Landing Page</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Focused on conversion and single-goal engagement.</p>
            </div>
            {/* Card 2 (Active) */}
            <div className="bg-white border-2 border-blue-600 p-6 rounded-3xl relative shadow-md">
              <div className="absolute top-4 right-4 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <Check size={14} strokeWidth={3} />
              </div>
              <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center text-white mb-4">
                <ShoppingBag size={24} />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Online Store</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Full e-commerce capabilities for your products.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-slate-200 p-6 rounded-3xl hover:border-blue-500 cursor-pointer transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 mb-4">
                <Building2 size={24} />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Company Profile</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Professional showcase of your business and team.</p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">2</span>
              Choose Color Palette
            </h3>
            <button className="text-blue-600 text-sm font-semibold flex items-center gap-2 hover:text-blue-700">
              <RefreshCw size={14} /> Acak Warna Lain
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Palette 1 */}
            <div className="bg-white border border-slate-200 p-3 rounded-2xl cursor-pointer hover:border-blue-500">
              <div className="flex h-20 rounded-xl overflow-hidden mb-3">
                <div className="flex-1 bg-[#1A6C6B]"></div>
                <div className="flex-1 bg-[#47A4A3]"></div>
                <div className="flex-1 bg-[#EFF6FF]"></div>
                <div className="flex-1 bg-[#1F2D40]"></div>
              </div>
              <p className="text-xs font-semibold text-slate-600 text-center">Midnight Teal</p>
            </div>
            {/* Palette 2 */}
            <div className="bg-white border border-slate-200 p-3 rounded-2xl cursor-pointer hover:border-blue-500">
              <div className="flex h-20 rounded-xl overflow-hidden mb-3">
                <div className="flex-1 bg-[#333333]"></div>
                <div className="flex-1 bg-[#666666]"></div>
                <div className="flex-1 bg-[#A3A3A3]"></div>
                <div className="flex-1 bg-[#E5E5E5]"></div>
              </div>
              <p className="text-xs font-semibold text-slate-600 text-center">Arctic Mono</p>
            </div>
            {/* Palette 3 */}
            <div className="bg-white border border-slate-200 p-3 rounded-2xl cursor-pointer hover:border-blue-500">
              <div className="flex h-20 rounded-xl overflow-hidden mb-3">
                <div className="flex-1 bg-[#0958D9]"></div>
                <div className="flex-1 bg-[#4096FF]"></div>
                <div className="flex-1 bg-[#91CAFF]"></div>
                <div className="flex-1 bg-[#E6F4FF]"></div>
              </div>
              <p className="text-xs font-semibold text-slate-600 text-center">Deep Ocean</p>
            </div>
            {/* Palette 4 (Active) */}
            <div className="bg-white border-2 border-blue-600 p-3 rounded-2xl relative shadow-sm">
               <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white z-10 border-2 border-white">
                <Check size={12} strokeWidth={3} />
              </div>
              <div className="flex h-20 rounded-xl overflow-hidden mb-3">
                <div className="flex-1 bg-[#636E8C]"></div>
                <div className="flex-1 bg-[#8C98B6]"></div>
                <div className="flex-1 bg-[#B5C2E0]"></div>
                <div className="flex-1 bg-[#DDE9FF]"></div>
              </div>
              <p className="text-xs font-semibold text-slate-600 text-center">Soft Slate</p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">3</span>
            Brand Name
          </h3>
          <div className="relative mb-2">
            <input 
              type="text" 
              className="w-full py-4 pl-6 pr-12 bg-[#EFF6FF] border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-700" 
              placeholder="Enter your brand or business name..."
            />
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <Edit2 className="h-5 w-5 text-slate-400" />
            </div>
          </div>
          <p className="text-xs text-slate-500 pl-2">This name will be used across all generated visual assets.</p>
        </div>

        {/* Submit */}
        <div className="flex flex-col items-center pt-8 pb-12">
          <button className="bg-[#2563EB] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20 text-lg mb-4">
            Generate Concept <ArrowRight size={20} />
          </button>
          <p className="text-xs text-slate-400">Estimated time: ~30 seconds for AI synthesis</p>
        </div>
      </div>
      
      {/* Floating Chat Icon */}
      <div className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-700 cursor-pointer hover:scale-105 transition-transform">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
      </div>
    </div>
  );
}
