"use client";

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Image,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLogoutMutation } from "@/services/authApi";
import AdminRouteGuard from "@/components/Auth/AdminRouteGuard";
import type { User } from "@/types/auth";
import Cookies from "js-cookie";

const menuItems = [
  { key: "/admin", label: "Dashboard Overview", icon: LayoutDashboard },
  { key: "/admin/mockup", label: "Mockup Manager", icon: Image },
  { key: "/admin/settings", label: "Settings", icon: Settings },
];

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [logout] = useLogoutMutation();
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user_data");
    if (storedUser) {
      try {
        setUserData(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLogout = async () => {
    try {
      await logout().unwrap();
    } catch (error) {
      console.error("Logout error:", error);
    }
    
    Cookies.remove("access_token");
    localStorage.removeItem("user_data");
    router.push("/login");
  };

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const getSidebarWidth = () => {
    if (isMobile) {
      return sidebarOpen ? "w-64" : "w-0";
    }
    return collapsed ? "w-20" : "w-64";
  };

  return (
    <AdminRouteGuard>
    <div className="min-h-screen bg-gray-50 flex">
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:relative inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden ${getSidebarWidth()}`}
        style={{ height: "100vh" }}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100 shrink-0">
          <Link href="/admin" className="flex items-center gap-3">
            <img
              src="/images/logo-ani.png"
              alt="ANI Logo"
              className="h-8 w-auto"
            />
            {!collapsed && !isMobile && (
              <span className="font-bold text-greenfont1">Admin</span>
            )}
          </Link>
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-lg hover:bg-gray-100"
            >
              <X size={20} className="text-gray-500" />
            </button>
          )}
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.key || 
              (item.key !== "/admin" && pathname.startsWith(item.key));
            const Icon = item.icon;

            return (
              <Link
                key={item.key}
                href={item.key}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                } ${collapsed && !isMobile ? "lg:justify-center" : ""}`}
              >
                <Icon size={20} />
                {(!collapsed || isMobile) && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-gray-100 shrink-0">
          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 ${
              collapsed && !isMobile ? "lg:justify-center" : ""
            }`}
          >
            <LogOut size={20} />
            {(!collapsed || isMobile) && <span>Logout</span>}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-xl hover:bg-gray-100"
            >
              {isMobile ? (
                <Menu size={20} className="text-gray-600" />
              ) : collapsed ? (
                <ChevronRight size={20} className="text-gray-600" />
              ) : (
                <ChevronLeft size={20} className="text-gray-600" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">
                  {userData?.email?.charAt(0).toUpperCase() || "A"}
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-900">
                  {userData?.email || "Admin"}
                </p>
                <p className="text-xs text-gray-500">
                  {userData?.role || "User"}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-red-600 transition-colors"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
    </AdminRouteGuard>
  );
}