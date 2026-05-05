"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Layout from "./Layout";
import { AOSProvider } from "@/components/Aos/AOSProvider";
import ReduxProvider from "@/components/Providers/ReduxProvider";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <ReduxProvider>
      {isAdminRoute ? (
        <AOSProvider>{children}</AOSProvider>
      ) : (
        <Layout>
          <AOSProvider>{children}</AOSProvider>
        </Layout>
      )}
    </ReduxProvider>
  );
}