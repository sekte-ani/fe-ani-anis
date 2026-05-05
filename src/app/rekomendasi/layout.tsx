import { Lightbulb, Compass, Layers, PenTool, Plus } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function DiscoveryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      {/* Sidebar */}
      <aside className="w-64 bg-[#EFF6FF] flex flex-col justify-between border-r border-slate-200/50 shrink-0">
        <div>
          <div className="p-6">
            <h1 className="text-xl font-bold text-blue-800 tracking-tight">
              Clarifying Current
            </h1>
          </div>
          
          <div className="px-4 py-2">
            <p className="text-xs font-semibold text-slate-400 mb-4 px-2 uppercase tracking-wider">
              DISCOVERY FLOW<br/>
              <span className="font-normal text-slate-400 capitalize lowercase">Process Steps</span>
            </p>
            <nav className="space-y-1">
              <NavItem href="/undefined/home2" icon={<Lightbulb size={18} />} label="Define" active={false} />
              <NavItem href="/undefined/home2" icon={<Compass size={18} />} label="Discover" active={true} />
              <NavItem href="/undefined/portofoli2" icon={<Layers size={18} />} label="Curate" active={false} />
              <NavItem href="/undefined/final2" icon={<PenTool size={18} />} label="Refine" active={false} />
            </nav>
          </div>
        </div>

        <div className="p-6">
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
            <Plus size={18} />
            New Idea
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden h-screen">
        {/* Top Navbar */}
        <header className="h-20 flex items-center justify-between px-10 bg-[#F8FAFC] shrink-0">
          <nav className="flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-blue-700 transition-colors">Overview</a>
            <a href="#" className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-1">Discovery</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Assets</a>
          </nav>
          <div className="flex items-center gap-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search ideas..." 
                className="bg-white/60 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
              <svg className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <button className="hover:text-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
              <button className="hover:text-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </button>
              <div className="w-8 h-8 bg-blue-800 rounded-full border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-10 pb-20">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ href, icon, label, active }: { href: string, icon: ReactNode, label: string, active: boolean }) {
  return (
    <Link href={href} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors ${active ? 'bg-white text-blue-800 shadow-sm' : 'text-slate-500 hover:bg-white/50 hover:text-blue-700'}`}>
      <span className={active ? "text-blue-600" : ""}>{icon}</span>
      {label}
    </Link>
  );
}
