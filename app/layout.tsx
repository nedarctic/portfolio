import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { bodoniModa } from '@/app/ui/fonts';
import { Header } from './components/header';
import { Footer } from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Justus Kimtai | Full-Stack Web & Android Developer",
  description: "Justus Kimtai is a full-stack web and Android developer with expertise in building user-focused solutions. Passionate about crafting innovative web applications and mobile apps that make an impact.",
  keywords: "Full-Stack Developer, Android Developer, Web Development, Mobile Apps, User-Focused Solutions, Software Engineer",
  authors: [{
    name: "Justus Kimtai",
    url: "https://portfolio-asdx.onrender.com/",
  }],
  icons: {icon: "/app/logo.png"},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodoniModa.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
