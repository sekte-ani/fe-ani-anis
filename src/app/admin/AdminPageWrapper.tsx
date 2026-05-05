"use client";

import { ReactNode } from "react";
import AdminRouteGuard from "@/components/Auth/AdminRouteGuard";

interface AdminPageWrapperProps {
  children: ReactNode;
}

export default function AdminPageWrapper({ children }: AdminPageWrapperProps) {
  return <AdminRouteGuard>{children}</AdminRouteGuard>;
}