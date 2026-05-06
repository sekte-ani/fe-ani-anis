"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = Cookies.get("access_token");
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  return { isAuthenticated, isLoading };
}

export function getAuthToken(): string | null {
  if (typeof window !== "undefined") {
    return Cookies.get("access_token") || null;
  }
  return null;
}

export function setAuthToken(token: string): void {
  Cookies.set("access_token", token, { expires: 1 });
}

export function clearAuthToken(): void {
  Cookies.remove("access_token");
  localStorage.removeItem("user_data");
}