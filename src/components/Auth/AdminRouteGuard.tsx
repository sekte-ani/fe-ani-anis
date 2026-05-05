"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getAuthToken } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

interface AdminRouteGuardProps {
  children: React.ReactNode;
}

export default function AdminRouteGuard({ children }: AdminRouteGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = getAuthToken();
      
      if (!token) {
        router.replace(`/login?redirect=${pathname}`);
        return;
      }
      
      setIsChecking(false);
    };

    checkAuth();
  }, [router, pathname]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-gray-500">Memeriksa autentikasi...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}