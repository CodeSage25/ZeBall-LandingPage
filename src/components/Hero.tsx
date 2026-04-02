"use client";

import { motion } from "framer-motion";
import { Timer, ArrowRight, Zap, TrendingUp, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      {/* Fond décoratif */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#22c55e]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-150px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#22c55e]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#22c55e]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ===== COLONNE GAUCHE — Texte ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-[#22c55e]/10 text-[#1a1a2e] border border-[#165B38]/30 mb-6">
              <Timer className="w-4 h-4 text-[#22c55e]" />
              <span> Tirage toutes les 30 secondes</span>
            </div>

            {/* Titre */}
            <div className="flex items-center gap-0 mb-4">
              <span
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
                style={{
                  fontFamily: "var(--font-poppins)",
                  color: "#1a1a2e",
                  WebkitTextStroke: "2px white",
                  paintOrder: "stroke fill",
                }}
              >
                Ze
              </span>
              <span
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
                style={{
                  fontFamily: "var(--font-poppins)",
                  color: "#e63946",
                  WebkitTextStroke: "2px white",
                  paintOrder: "stroke fill",
                }}
              >
                Ball
              </span>
            </div>

            {/* Accroche principale */}
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] leading-tight max-w-xl"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Misez et
              <span className="text-[#165B38]">
                {" "}
                Gagnez jusqu&apos;à 8 fois la mise.
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="mt-4 text-lg md:text-xl text-[#6b7280] max-w-lg leading-relaxed">
              Le jeu de tirage le plus rapide du Cameroun. Un nouveau tirage
              toutes les{" "}
              <span className="font-semibold text-[#1a1a2e]">30 secondes</span>.
              Choisissez votre numéro et tentez votre chance !
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              <div className="flex items-center gap-2 bg-[#22c55e]/10 rounded-full px-4 py-2.5 border border-[#22c55e]/20">
                <Zap className="w-4 h-4 text-[#165B38]" />
                <span className="text-sm font-semibold text-[#1a1a2e]">
                  Mise x8
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[#22c55e]/10 rounded-full px-4 py-2.5 border border-[#22c55e]/20">
                <TrendingUp className="w-4 h-4 text-[#165B38]" />
                <span className="text-sm font-semibold text-[#1a1a2e]">
                  10% Cashback
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[#22c55e]/10 rounded-full px-4 py-2.5 border border-[#22c55e]/20">
                <Timer className="w-4 h-4 text-[#165B38]" />
                <span className="text-sm font-semibold text-[#1a1a2e]">
                  30s / tirage
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
              <a
                href="https://iziloto.cm/casino/games/dyce-games-zeball"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center
                           bg-[#165B38] text-white font-bold
                           px-8 py-4 rounded-full text-lg
                           hover:bg-[#165B38]
                          
                           transition-all duration-300"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Jouer maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#comment-jouer"
                className="inline-flex items-center gap-2 font-medium
                           text-[#6b7280] hover:text-[#1a1a2e] transition-colors text-base"
              >
                Comment jouer ?
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* ===== COLONNE DROITE — Image du jeu ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]">
              {/* Fond décoratif */}
              <div className="absolute inset-0 bg-[#22c55e]/10 rounded-[3rem] rotate-2 scale-105" />

              {/* Cadre téléphone */}
              <div className="relative bg-[#1a1a2e] rounded-[2.5rem] p-3 shadow-2xl border border-white/10">
                {/* Encoche du téléphone */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a2e] rounded-b-2xl z-10 flex items-center justify-center">
                  <div className="w-12 h-3 bg-black rounded-full" />
                </div>

                {/* Écran */}
                <div className="relative rounded-[2rem] overflow-hidden bg-black">
                  <Image
                    src="/izilotoMobile.webp"
                    alt="ZeBall — Aperçu du jeu de tirage rapide sur IziLoto"
                    width={320}
                    height={550}
                    className="w-full h-auto"
                    priority
                  />
                </div>

                {/* Barre du bas */}
                <div className="flex justify-center mt-2">
                  <div className="w-24 h-1 bg-white/20 rounded-full" />
                </div>
              </div>

              {/* Badge flottant 30s */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-3 -left-3 bg-white text-[#1a1a2e]
                           font-bold text-sm px-4 py-2.5 rounded-2xl
                           shadow-lg border border-[#e5e7eb] flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <Timer className="w-4 h-4 text-[#165B38]" />
                30s
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Flèche scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mt-8 lg:mt-12"
        >
          <a
            href="#jeu"
            className="flex flex-col items-center gap-1 text-[#6b7280] hover:text-[#22c55e] transition-colors"
          >
            <span className="text-xs font-medium">Découvrir</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
