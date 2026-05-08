import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/Layouts/ClientLayout";

export const metadata: Metadata = {
  title: "ANI Solution",
  description: "A.N.I Tech - Solusi Digital Terbaik",
  icons: {
    icon: "/images/logo-ani.png",
    apple: "/images/logo-ani.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-ani.png" />
        <link rel="apple-touch-icon" href="/images/logo-ani.png" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}