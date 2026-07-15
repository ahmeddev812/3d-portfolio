import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils/cn";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "@/app/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ahmed - Full Stack Developer & Creative Problem Solver",
  description:
    "Building exceptional digital experiences that blend creativity with cutting-edge technology. Explore my portfolio of web apps, mobile apps, and 3D experiences.",
  keywords: [
    "developer",
    "portfolio",
    "react",
    "next.js",
    "three.js",
    "full stack",
  ],
  authors: [{ name: "Ahmed" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ahmed - Full Stack Developer & Creative Problem Solver",
    description:
      "Building exceptional digital experiences that blend creativity with cutting-edge technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-primary text-primary antialiased",
          poppins.variable
        )}
      >
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--bg-surface)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
              },
            }}
          />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
