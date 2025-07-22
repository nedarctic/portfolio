import type { Metadata } from "next";
import "./globals.css";
import { Header } from './components/header';
import { Footer } from "./components/footer";


export const metadata: Metadata = {
  title: "Justus Kimtai | Full-Stack Web & Android Developer",
  description: "Justus Kimtai is a full-stack web and Android developer with expertise in building user-focused solutions. Passionate about crafting innovative web applications and mobile apps that make an impact.",
  keywords: "Full-Stack Developer, Android Developer, Web Development, Mobile Apps, User-Focused Solutions, Software Engineer",
  authors: [{
    name: "Justus Kimtai",
    url: "https://portfolio-asdx.onrender.com/",
  }],
  icons: {icon: "/app/favicon.ico"},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <div className="bg-black">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
