"use client";
import {Manrope} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/scss/theme.scss";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { Helmet } from 'react-helmet';


const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export default function RootLayout({children}) {
  return (
    <I18nextProvider i18n={i18n}>
  
    <html lang="sv">
    <head> <Helmet>
    <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/8960af079003136771ea236c/script.js"></script>
      </Helmet></head>
   <body
        suppressHydrationWarning={true}
        className={manrope.className}
      > 
        
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </I18nextProvider>
  );
}
