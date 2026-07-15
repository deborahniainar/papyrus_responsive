import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { PageLoader } from "@/components/common/page-loader";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "PAPYRUS - Livres audio premium",
  description:
    "PAPYRUS est une plateforme premium pour decouvrir, acheter et ecouter des livres audio."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
