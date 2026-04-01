import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5c518",
};

export const metadata: Metadata = {
  title: "ZeBall — Jeu de tirage rapide | IziLoto",
  description:
    "ZeBall : un tirage toutes les 20 secondes. Misez sur un numéro, une couleur ou pair/impair et gagnez jusqu'à x8 votre mise. Disponible sur IziLoto.cm",
  keywords: [
    "ZeBall",
    "IziLoto",
    "jeu en ligne",
    "tirage rapide",
    "casino",
    "Cameroun",
    "FCFA",
    "jeu d'argent",
    "boule",
    "roulette",
  ],
  authors: [{ name: "IziLoto" }],
  // ===========================
  // 🖼️ FAVICON SVG
  // ===========================
  icons: {
    icon: "/favicon.svg",
  },
  creator: "IziLoto",
  publisher: "IziLoto",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ZeBall — Jeu de tirage rapide | IziLoto",
    description:
      "Un tirage toutes les 20 secondes. Misez. Gagnez. Recommencez. Gains jusqu'à x8 et 10% de cashback.",
    url: "https://iziloto.cm/casino/games/dyce-games-zeball",
    siteName: "ZeBall by IziLoto",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeBall — Jeu de tirage rapide | IziLoto",
    description:
      "Un tirage toutes les 20 secondes. Misez. Gagnez. Recommencez.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
