import { ReactNode } from "react";

export default function DiscoveryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      <main className="flex-1 flex flex-col overflow-hidden h-screen">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-10 pt-24 pb-20">
          <div className="max-w-4xl mx-auto">{children}</div>
        </div>
      </main>
    </div>
  );
}
