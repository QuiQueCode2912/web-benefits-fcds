import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import { cn } from "@/lib/utils"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Beneficios",
  description: "Esta es lapágina de beneficios de la fundación ciudad del saber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={cn(
          `min-h-screen bg-background antialiased ${inter.className}`
        )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <Header />
            <main className="pt-36">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
    </html>
  );
}
