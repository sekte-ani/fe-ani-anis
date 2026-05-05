"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  AlertCircle,
  CheckCircle,
  X,
} from "lucide-react";
import { useSignInMutation } from "@/services/authApi";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error";
}

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toasts, setToasts] = useState<Toast[]>([]);

  const [signIn, { isLoading }] = useSignInMutation();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      const redirect = searchParams.get("redirect") || "/admin";
      router.replace(redirect);
    }
  }, [router, searchParams]);

  const addToast = (message: string, type: "success" | "error") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await signIn({ email, password }).unwrap();

      if (result.data?.access_token) {
        localStorage.setItem("access_token", result.data.access_token);
        localStorage.setItem("user_data", JSON.stringify(result.data.user));
        addToast(result.message || "Login berhasil!", "success");

        setTimeout(() => {
          const redirect = searchParams.get("redirect") || "/admin";
          router.push(redirect);
        }, 1000);
      }
    } catch (error: any) {
      const message =
        error?.data?.message ||
        error?.message ||
        "Login gagal. Silakan coba lagi.";
      addToast(message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-white to-third/50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <Link href="/" className="inline-block mb-6">
                <img
                  src="/images/logo-ani.png"
                  alt="ANI Logo"
                  className="h-10 w-auto mx-auto"
                />
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-greenfont1 mb-2">
                Welcome Back
              </h1>
              <p className="text-greenfont3 text-sm md:text-base">
                Silakan masuk untuk melanjutkan
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-greenfont1 mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-greenfont3" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-greenfont1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all duration-200"
                    placeholder="Masukkan email Anda"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-greenfont1 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-greenfont3" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-14 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-greenfont1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all duration-200"
                    placeholder="Masukkan password Anda"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-greenfont3 hover:text-greenfont2 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary/30"
                  />
                  <span className="ml-2 text-sm text-greenfont3">
                    Ingat saya
                  </span>
                </label>
                <Link
                  href="#"
                  className="text-sm font-semibold text-primary hover:text-greenfont2 transition-colors"
                >
                  Lupa password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:ring-offset-2 transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Memproses...
                  </span>
                ) : (
                  "Masuk"
                )}
              </button>
            </form>
          </div>

          <div className="px-8 md:px-10 py-6 bg-gray-50 border-t border-gray-100">
            <p className="text-center text-sm text-greenfont3">
              Belum punya akun?{" "}
              <Link
                href="#"
                className="font-semibold text-primary hover:text-greenfont2 transition-colors"
              >
                Daftar sekarang
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-6 text-sm text-greenfont3">
          <Link href="/" className="hover:text-greenfont2 transition-colors">
            ← Kembali ke halaman utama
          </Link>
        </p>
      </div>

      {/* Toast Container */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border ${
              toast.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle size={18} className="text-green-600" />
            ) : (
              <AlertCircle size={18} className="text-red-600" />
            )}
            <span className="text-sm font-medium">{toast.message}</span>
            <button
              onClick={() =>
                setToasts((prev) => prev.filter((t) => t.id !== toast.id))
              }
              className="ml-auto hover:opacity-70"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
