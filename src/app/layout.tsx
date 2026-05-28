import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_FULL_NAME, SITE_TAGLINE } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_FULL_NAME} (DOTS)`,
    template: `%s · ${SITE_FULL_NAME}`,
  },
  description: SITE_TAGLINE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
