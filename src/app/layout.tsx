import type { Metadata } from "next";
import { Oswald, Geist, Geist_Mono,  } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { PlanProvider } from "@/context/PlanContext";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";


const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Fit Log",
  description: "Track your fitness journey",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased`}
    >   
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <PlanProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ToastContainer />
        </PlanProvider>
      </body>
    </html>
  );
}