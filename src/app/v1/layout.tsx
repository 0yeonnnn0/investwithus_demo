import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";
import ReadyToInvest from "@/components/ReadyToInvest";

export default function V2Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-[85px]">
        <Header />
        <main>{children}</main>
        <ReadyToInvest />
        <Footer />
      </body>
    </html>
  );
}
