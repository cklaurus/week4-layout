import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Pixel Peak | Featured Projects",
  description: "Explore Pixel Peak community projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-[#080D1A] text-[#F8FAFC] antialiased`}
      >

        <Header />
          {children}
        <Footer />

      </body>
    </html>
  );
}