import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer } from "react-toastify";
import TechnicalOverlay from "./components/TechnicalOverlay";
import FloatingCTA from "./components/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Service Walah | Premium HVAC Solutions",
  description:
    "Professional thermal efficiency solutions for domestic and commercial HVAC systems. Expert installation, maintenance, and emergency repair services with guaranteed performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased thermal-bg min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TechnicalOverlay />
          <div className="relative z-10">
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </div>
          <FloatingCTA />
          <Toaster />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            toastClassName="glass-morphic border border-white/10"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
