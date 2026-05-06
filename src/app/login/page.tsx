import LoginForm from "@/components/Auth/LoginForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Login - ANI Solution",
  description: "Masuk ke akun ANI Solution Anda",
};

function LoginFormFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-white to-third/50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-8 md:p-10">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-32 mx-auto mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-48 mx-auto mb-8"></div>
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded-xl"></div>
              <div className="h-12 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFormFallback />}>
      <LoginForm />
    </Suspense>
  );
}