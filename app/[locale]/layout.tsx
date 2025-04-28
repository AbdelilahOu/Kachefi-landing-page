import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ReactElement } from "react";
import { Footer } from "./_components/footer-section";
import { Providers } from "./providers";

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
  metadataBase: new URL("https://www.kachefi.com"),
  title: "Kachefi | Détectez tôt les risques de cancer et agissez rapidement",
  description:
    "Kachefi est votre assistant de pré-dépistage pour détecter les risques de cancer et prendre des mesures tôt. Téléchargez l&aposapp maintenant.",
  twitter: {
    title: "Kachefi | Détectez tôt les risques de cancer et agissez rapidement",
    description:
      "Kachefi est votre assistant de pré-dépistage pour détecter les risques de cancer et prendre des mesures tôt. Téléchargez l&aposapp maintenant.",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "/og-image.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
  openGraph: {
    title: "Kachefi | Détectez tôt les risques de cancer et agissez rapidement",
    description:
      "Kachefi est votre assistant de pré-dépistage pour détecter les risques de cancer et prendre des mesures tôt. Téléchargez l&aposapp maintenant.",
    url: "https://www.kachefi.com",
    siteName: "Kachefi",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "/og-image.png",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactElement;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen w-full flex-col bg-white">
          <Providers locale={locale}>{children}</Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
