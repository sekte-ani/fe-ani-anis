"use client";

import {
  Image,
  Folder,
  Brain,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const recentActivities = [
  { action: "Mockup baru ditambahkan", time: "2 menit yang lalu", icon: Image },
  { action: "Embedding selesai untuk FIN-003", time: "15 menit yang lalu", icon: Brain },
  { action: "Mockup dihapus oleh Admin", time: "1 jam yang lalu", icon: Image },
  { action: "Keywords di-update untuk TEKNO-005", time: "2 jam yang lalu", icon: TrendingUp },
];

const sectorStats = [
  { sektor: "Teknologi", count: 45, color: "#4C9DAE" },
  { sektor: "Finance", count: 32, color: "#27AE60" },
  { sektor: "Retail", count: 28, color: "#E2B93B" },
  { sektor: "Healthcare", count: 21, color: "#EB5757" },
  { sektor: "Education", count: 18, color: "#2F80ED" },
  { sektor: "Automotive", count: 12, color: "#9B51E0" },
];

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Selamat datang di panel admin A.N.I Tech</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Image size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Mockup</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Folder size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Sektor</p>
              <p className="text-2xl font-bold text-gray-900">6</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <CheckCircle size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Sudah Embedding</p>
              <p className="text-2xl font-bold text-green-600">89</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <Brain size={20} className="text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Embedding</p>
              <p className="text-2xl font-bold text-amber-600">67</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Aktivitas Terbaru */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="px-5 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Aktivitas Terbaru</h3>
          </div>
          <div className="p-5 space-y-4">
            {recentActivities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon size={16} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.action}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistik per Sektor */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="px-5 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Statistik per Sektor</h3>
          </div>
          <div className="p-5 space-y-3">
            {sectorStats.map((item) => (
              <div key={item.sektor} className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="flex-1 text-sm text-gray-700">{item.sektor}</span>
                <span className="text-sm font-semibold text-gray-900">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}