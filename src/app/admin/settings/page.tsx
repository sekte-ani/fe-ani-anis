"use client";

import { useState } from "react";
import { Save, User, Bell, Shield, Key } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profil", icon: User },
    { id: "notifications", label: "Notifikasi", icon: Bell },
    { id: "security", label: "Keamanan", icon: Shield },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Kelola pengaturan akun Anda</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="border-b border-gray-100">
          <div className="flex gap-1 p-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6">
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">A</span>
                </div>
                <div>
                  <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                    Ganti Foto
                  </button>
                  <p className="text-xs text-gray-500 mt-1">JPG, PNG maks 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    defaultValue="Admin User"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="admin@ani-tech.com"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    defaultValue="+62 812 3456 7890"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <input
                    type="text"
                    defaultValue="Administrator"
                    disabled
                    className="w-full px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2">
                  <Save size={16} />
                  Simpan Perubahan
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-4">
              {[
                { label: "Email notifikasi untuk mockup baru", desc: "Terima email saat ada mockup baru ditambahkan" },
                { label: "Email notifikasi untuk embedding selesai", desc: "Terima email saat proses embedding selesai" },
                { label: "Email notifikasi mingguan", desc: "Ringkasan aktivitas mingguan" },
              ].map((item, idx) => (
                <label key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </label>
              ))}
              <div className="pt-4">
                <button className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2">
                  <Save size={16} />
                  Simpan Pengaturan
                </button>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Key size={18} className="text-gray-500" />
                  <h4 className="text-sm font-semibold text-gray-900">Ubah Password</h4>
                </div>
                <div className="space-y-3">
                  <input
                    type="password"
                    placeholder="Password saat ini"
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <input
                    type="password"
                    placeholder="Password baru"
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <input
                    type="password"
                    placeholder="Konfirmasi password baru"
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <button className="mt-4 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Update Password
                </button>
              </div>

              <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                <h4 className="text-sm font-semibold text-red-800 mb-2">Zona Berbahaya</h4>
                <p className="text-xs text-red-600 mb-3">Tindakan ini tidak dapat dibatalkan.</p>
                <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors">
                  Hapus Akun
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}