"use client";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/scss/theme.scss";
<<<<<<< Updated upstream
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
=======
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import CookiesConsent from "@/components/CookiesConsent";

>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      <html lang="sv">
        <body suppressHydrationWarning={true} className={manrope.className}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
=======
    <html lang="sv">
<CookiesConsent />
    
   <body
        suppressHydrationWarning={true}
        className={manrope.className}
      > 
       
        <Navbar />
       
        <main>{children}</main>
 
        <Footer />
      </body>
    </html>
>>>>>>> Stashed changes
    </I18nextProvider>
  );
}
