"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/scss/theme.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Manrope } from "next/font/google";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export default function RootLayout({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <html lang="sv">
        <body suppressHydrationWarning={true} className={manrope.className}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </I18nextProvider>
  );
}