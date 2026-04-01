"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hash, Star, Diamond, Divide, ArrowDown, ArrowUp } from "lucide-react";

const bets = [
  {
    type: "Numéro plein",
    description:
      "Misez sur un numéro exact (1 à 8). Si la boule tombe dessus, vous gagnez !",
    winning: "Le numéro exact sort",
    cote: "x8",
    miseMin: "10 FCFA",
    miseMax: "2 000 FCFA",
    icon: Hash,
    borderColor: "border-[#f5c518]",
    bgBadge: "bg-[#f5c518]",
    textBadge: "text-[#1a1a2e]",
    examples: ["1", "2", "3", "4", "5", "6", "7", "8"],
    exampleType: "numbers",
  },
  {
    type: "Boule Jaune ",
    description: "Misez sur la boule spéciale jaune. Rare mais très rentable !",
    winning: "La boule jaune sort",
    cote: "x8",
    miseMin: "10 FCFA",
    miseMax: "2 000 FCFA",
    icon: Star,
    borderColor: "border-[#f5c518]",
    bgBadge: "bg-[#f5c518]",
    textBadge: "text-[#1a1a2e]",
    examples: ["★"],
    exampleType: "yellow",
  },
  {
    type: "Rouge",
    description:
      "Misez sur la couleur rouge. Les numéros rouges sont : 2, 4, 5, 7.",
    winning: "2, 4, 5 ou 7 sort",
    cote: "x2",
    miseMin: "10 FCFA",
    miseMax: "10 000 FCFA",
    icon: Diamond,
    borderColor: "border-[#e63946]",
    bgBadge: "bg-[#e63946]",
    textBadge: "text-white",
    examples: ["2", "4", "5", "7"],
    exampleType: "red",
  },
  {
    type: "Noir",
    description:
      "Misez sur la couleur noire. Les numéros noirs sont : 1, 3, 6, 8.",
    winning: "1, 3, 6 ou 8 sort",
    cote: "x2",
    miseMin: "10 FCFA",
    miseMax: "10 000 FCFA",
    icon: Diamond,
    borderColor: "border-[#1a1a2e]",
    bgBadge: "bg-[#1a1a2e]",
    textBadge: "text-white",
    examples: ["1", "3", "6", "8"],
    exampleType: "black",
  },
  {
    type: "Pair",
    description:
      "Misez sur les numéros pairs. Vous gagnez si 2, 4, 6 ou 8 sort.",
    winning: "2, 4, 6 ou 8 sort",
    cote: "x2",
    miseMin: "10 FCFA",
    miseMax: "10 000 FCFA",
    icon: Divide,
    borderColor: "border-blue-500",
    bgBadge: "bg-blue-500",
    textBadge: "text-white",
    examples: ["2", "4", "6", "8"],
    exampleType: "blue",
  },
  {
    type: "Impair",
    description:
      "Misez sur les numéros impairs. Vous gagnez si 1, 3, 5 ou 7 sort.",
    winning: "1, 3, 5 ou 7 sort",
    cote: "x2",
    miseMin: "10 FCFA",
    miseMax: "10 000 FCFA",
    icon: Divide,
    borderColor: "border-violet-500",
    bgBadge: "bg-violet-500",
    textBadge: "text-white",
    examples: ["1", "3", "5", "7"],
    exampleType: "violet",
  },
  {
    type: "Under (1 à 4)",
    description:
      "Misez sur les petits numéros. Vous gagnez si 1, 2, 3 ou 4 sort.",
    winning: "1, 2, 3 ou 4 sort",
    cote: "x2",
    miseMin: "10 FCFA",
    miseMax: "10 000 FCFA",
    icon: ArrowDown,
    borderColor: "border-teal-500",
    bgBadge: "bg-teal-500",
    textBadge: "text-white",
    examples: ["1", "2", "3", "4"],
    exampleType: "teal",
  },
  {
    type: "Over (5 à 8)",
    description:
      "Misez sur les grands numéros. Vous gagnez si 5, 6, 7 ou 8 sort.",
    winning: "5, 6, 7 ou 8 sort",
    cote: "x2",
    miseMin: "10 FCFA",
    miseMax: "10 000 FCFA",
    icon: ArrowUp,
    borderColor: "border-amber-600",
    bgBadge: "bg-amber-600",
    textBadge: "text-white",
    examples: ["5", "6", "7", "8"],
    exampleType: "amber",
  },
];

function getExampleBg(type: string, value: string): string {
  switch (type) {
    case "numbers": {
      const isRed = ["2", "4", "5", "7"].includes(value);
      return isRed ? "bg-[#e63946] text-white" : "bg-[#1a1a2e] text-white";
    }
    case "yellow":
      return "bg-[#f5c518] text-[#1a1a2e]";
    case "red":
      return "bg-[#e63946] text-white";
    case "black":
      return "bg-[#1a1a2e] text-white";
    case "blue":
      return "bg-blue-500 text-white";
    case "violet":
      return "bg-violet-500 text-white";
    case "teal":
      return "bg-teal-500 text-white";
    case "amber":
      return "bg-amber-600 text-white";
    default:
      return "bg-gray-200 text-gray-800";
  }
}

export default function BettingTypes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="paris" ref={ref} className="bg-[#f8f9fb] py-16 md:py-24">
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
            Types de <span className="text-[#165B38]">paris</span> & cotes
          </h2>
          <p className="text-base md:text-lg text-[#6b7280] text-center max-w-2xl mx-auto mt-4">
            Découvrez tous les types de paris disponibles, leurs cotes et les
            limites de mise.
          </p>
        </motion.div>

        {/* Légende rapide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-[#e5e7eb]">
            <div className="w-6 h-6 rounded-full bg-[#f5c518] flex items-center justify-center">
              <span className="text-[#1a1a2e] text-xs font-bold">x8</span>
            </div>
            <span className="text-sm font-medium text-[#1a1a2e]">
              Cote élevée
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-[#e5e7eb]">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">x2</span>
            </div>
            <span className="text-sm font-medium text-[#1a1a2e]">
              Cote standard
            </span>
          </div>
        </motion.div>

        {/* Grille de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bets.map((bet, index) => (
            <motion.div
              key={bet.type}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
              }}
              className={`bg-white rounded-2xl shadow-md border-2 ${bet.borderColor}
                          p-5 transition-all duration-300
                          hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Header de la card */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${bet.bgBadge}
                                flex items-center justify-center`}
                  >
                    <bet.icon className={`w-5 h-5 ${bet.textBadge}`} />
                  </div>
                  <h3
                    className="font-bold text-[#1a1a2e] text-sm"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {bet.type}
                  </h3>
                </div>
                {/* Badge cote */}
                <span
                  className={`${bet.bgBadge} ${bet.textBadge} font-bold text-lg
                              px-3 py-1 rounded-xl`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {bet.cote}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
                {bet.description}
              </p>

              {/* Numéros exemples */}
              <div className="flex flex-wrap gap-2 mb-4">
                {bet.examples.map((ex) => (
                  <span
                    key={ex}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center
                                text-xs font-bold ${getExampleBg(bet.exampleType, ex)}`}
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {ex}
                  </span>
                ))}
              </div>

              {/* Limites de mise */}
              <div className="border-t border-[#e5e7eb] pt-3 mt-auto">
                <div className="flex justify-between text-xs text-[#6b7280]">
                  <span>
                    Min :{" "}
                    <span className="font-semibold text-[#1a1a2e]">
                      {bet.miseMin}
                    </span>
                  </span>
                  <span>
                    Max :{" "}
                    <span className="font-semibold text-[#1a1a2e]">
                      {bet.miseMax}
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
