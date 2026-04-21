"use client";

import { ReactNode } from "react";
import Navbar from "../Nav/Navbar";
import Footer from "../Footer/FooterComponent";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </div>
  );
}

export default Layout;
