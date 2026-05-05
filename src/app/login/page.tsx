import LoginForm from "@/components/Auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - ANI Solution",
  description: "Masuk ke akun ANI Solution Anda",
};

export default function LoginPage() {
  return <LoginForm />;
}