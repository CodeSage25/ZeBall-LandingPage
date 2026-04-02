"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";

const navigationLinks = [
  { label: "Jouer", href: "#jeu" },
  { label: "Comment jouer", href: "#comment-jouer" },
  { label: "Types de paris", href: "#paris" },
  { label: "Règles", href: "#regles" },
  { label: "Cashback", href: "#cashback" },
];

const legalLinks = [
  { label: "CGU", href: "https://iziloto.cm/" },
  { label: "Mentions légales", href: "https://iziloto.cm/" },
  { label: "Jeu responsable", href: "https://iziloto.cm/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e]">
      {/* ===== CONTENU PRINCIPAL ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Colonne 1 — Logo & Description */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex flex-col leading-none">
                <span
                  className="font-bold text-xl"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <span
                    style={{
                      color: "black",
                      WebkitTextStroke: "0.5px white",
                    }}
                  >
                    Ze
                  </span>
                  <span
                    style={{
                      color: "red",
                      WebkitTextStroke: "0.5px white",
                    }}
                  >
                    Ball
                  </span>
                </span>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              ZeBall est un jeu de tirage rapide disponible sur IziLoto.cm. Un
              tirage toutes les 30 secondes avec des gains jusqu&apos;à 8 fois
              la mise. Rejoignez l&apos;aventure !
            </p>

            {/* Bouton CTA */}
            <a
              href="https://iziloto.cm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2
                         bg-[#175A38] text-[#E5EFDF] font-bold
                         px-6 py-3 rounded-full text-sm
                        
                         transition-all duration-300"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Jouer sur IziLoto.cm
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Colonne 2 — Navigation rapide */}
          <div>
            <h3
              className="text-white font-bold text-base mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#f5c518]
                               transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Légal + Réseaux */}
          <div>
            <h3
              className="text-white font-bold text-base mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Informations
            </h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-[#f5c518]
                               transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Facebook */}
            <h3
              className="text-white font-bold text-base mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Réseaux sociaux
            </h3>
            <a
              href="https://www.facebook.com/people/IziLotocm/61585217354848/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 text-sm
                         hover:text-[#1877F2] transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              Facebook IziLoto
            </a>
            {/* Moyens de paiement */}
            <div className="mt-8">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">
                Moyens de paiement
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/image_Mtn_momo.png"
                  alt="MTN Mobile Money"
                  width={80}
                  height={32}
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/orange_money.png"
                  alt="Orange Money"
                  width={80}
                  height={32}
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SÉPARATEUR ===== */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2026 IziLoto.cm — Tous droits réservés.
            </p>
            <p className="text-white/40 text-sm text-center md:text-right">
              ZeBall est un jeu proposé par{" "}
              <a
                href="https://iziloto.cm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[  #22c55e] hover:underline"
              >
                IziLoto.cm
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ===== BANDEAU JEU RESPONSABLE ===== */}
      <div className="bg-gradient-to-r from-[#e63946] to-[#c0392b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <span className="text-white text-lg"></span>
            <p className="text-white text-sm font-medium">
              <span className="font-bold"> ⚠️ Jeu responsable</span> — Interdits
              aux <span className="font-bold underline">moins de 21 ans</span>.
            </p>
            <span className="text-white text-lg"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
