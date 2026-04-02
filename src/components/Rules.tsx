"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, AlertTriangle, Star, XCircle, Info } from "lucide-react";

const generalRules = [
  "La roue contient 8 boules (1 à 8) et 1 boule jaune spéciale.",
  "Un tirage a lieu toutes les 20 secondes automatiquement.",
  "Vous pouvez placer plusieurs mises sur différentes cases en même temps.",
  "Les gains sont crédités instantanément après chaque tirage.",
  "Les jetons disponibles vont de 10 FCFA à 10 000 FCFA.",
  "Les numéros rouges sont : 2, 4, 5, 7.",
  "Les numéros noirs sont : 1, 3, 6, 8.",
];

const restrictions = [
  {
    text: "Impossible de miser Pair ET Impair simultanément",
    detail: "Vous devez choisir l'un ou l'autre.",
  },
  {
    text: "Impossible de miser Over ET Under simultanément",
    detail: "Over = 5 à 8 / Under = 1 à 4. Un seul choix possible.",
  },
  {
    text: "Impossible de miser Rouge ET Noir simultanément",
    detail: "Choisissez une seule couleur par tour.",
  },
];

export default function Rules() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="regles" ref={ref} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] text-center"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Règles du <span className="text-[#175A38]">jeu</span>
          </h2>
          <p className="text-base md:text-lg text-[#6b7280] text-center max-w-2xl mx-auto mt-4">
            Tout ce que vous devez savoir avant de jouer à{" "}
            <span
              className="font-bold text-xl"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span
                style={{
                  color: "black",
                }}
              >
                Ze
              </span>
              <span
                style={{
                  color: "red",
                }}
              >
                Ball
              </span>
            </span>
            .
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ===== COLONNE GAUCHE — Règles générales ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <Info className="w-5 h-5 text-green-600" />
              </div>
              <h3
                className="font-bold text-[#1a1a2e] text-xl"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Règles générales
              </h3>
            </div>

            <div className="space-y-4">
              {generalRules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                  }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-[#1a1a2e] text-sm leading-relaxed">
                    {rule}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== COLONNE DROITE — Encarts spéciaux ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Encart Boule Jaune */}
            <div className="bg-[#fef9e7] border-2 border-[#f5c518] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#f5c518] flex items-center justify-center shadow-md">
                  <Star className="w-5 h-5 text-[#1a1a2e]" />
                </div>
                <h3
                  className="font-bold text-[#1a1a2e] text-lg"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Règle de la boule jaune
                </h3>
              </div>

              <p className="text-[#1a1a2e] text-sm leading-relaxed mb-3">
                Quand la boule jaune sort, elle{" "}
                <span className="font-bold text-[#e63946]">
                  invalide tous les paris simples
                </span>{" "}
                :
              </p>

              <div className="grid grid-cols-2 gap-2">
                {["Rouge", "Noir", "Pair", "Impair", "Over", "Under"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 bg-white/70 rounded-lg px-3 py-2"
                    >
                      <XCircle className="w-4 h-4 text-[#e63946]" />
                      <span className="text-sm font-medium text-[#1a1a2e]">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>

              <p className="text-[#6b7280] text-xs mt-4">
                💡 Seuls les paris &quot;Numéro plein&quot; et &quot;Boule
                Jaune&quot; restent valables.
              </p>
            </div>

            {/* Encart Contraintes */}
            <div className="bg-[#fdecea] border-2 border-[#e63946] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#e63946] flex items-center justify-center shadow-md">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="font-bold text-[#1a1a2e] text-lg"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Paris incompatibles
                </h3>
              </div>

              <div className="space-y-4">
                {restrictions.map((restriction, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#e63946] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#1a1a2e] text-sm font-semibold">
                        {restriction.text}
                      </p>
                      <p className="text-[#6b7280] text-xs mt-0.5">
                        {restriction.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
