"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Gamepad2,
  Coins,
  Target,
  Clock,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const jetons = [
  { value: "10 FCFA", file: "10.png" },
  { value: "50 FCFA", file: "50.png" },
  { value: "100 FCFA", file: "100.png" },
  { value: "200 FCFA", file: "200.png" },
  { value: "500 FCFA", file: "500.png" },
  { value: "1 000 FCFA", file: "1000.png" },
  { value: "2 000 FCFA", file: "2000.png" },
  { value: "5 000 FCFA", file: "5000.png" },
  { value: "10 000 FCFA", file: "10000.png" },
];

const features = [
  {
    icon: Gamepad2,
    title: "8 numéros + 1 boule jaune",
    description:
      "La roue contient 8 cases numérotées et une boule spéciale jaune.",
  },
  {
    icon: Coins,
    title: "Jetons de 10 à 10 000 FCFA",
    description:
      "Choisissez la valeur de votre mise avec des jetons adaptés à tous les budgets.",
  },
  {
    icon: Target,
    title: "Plusieurs types de paris",
    description:
      "Numéro plein, couleur, pair/impair, over/under — à vous de choisir votre stratégie.",
  },
  {
    icon: Clock,
    title: "Tirage toutes les 20 secondes",
    description:
      "Pas le temps de s'ennuyer. Un nouveau tirage démarre immédiatement.",
  },
];

const numberGrid = [
  { num: 1, color: "bg-[#1a1a2e]" },
  { num: 2, color: "bg-[#e63946]" },
  { num: 3, color: "bg-[#1a1a2e]" },
  { num: 4, color: "bg-[#e63946]" },
  { num: 5, color: "bg-[#e63946]" },
  { num: 6, color: "bg-[#1a1a2e]" },
  { num: 7, color: "bg-[#e63946]" },
  { num: 8, color: "bg-[#1a1a2e]" },
];

export default function GameSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="jeu" ref={ref} className="bg-[#f8f9fb] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== TITRE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Plongez dans l'univers{" "}
            <span className="text-[#165B38]">ZeBall</span>
          </h2>
          <p className="text-base md:text-lg text-[#6b7280] max-w-2xl mx-auto mt-4">
            Découvrez le fonctionnement de ZeBall et lancez votre première
            partie.
          </p>
        </motion.div>

        {/* ===== GRILLE FEATURES + TABLEAU DE JEU ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* COLONNE GAUCHE — Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#165B38]" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-[#1a1a2e] text-base md:text-lg"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10"
            >
              <a
                href="https://iziloto.cm/casino/games/dyce-games-zeball"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center
                           bg-[#165B38] text-white font-bold
                           px-8 py-4 rounded-full text-base
                           hover:bg-[#16a34a] hover:shadow-lg
                           shadow-lg shadow-[#22c55e]/30
                           transition-all duration-300"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <Gamepad2 className="w-5 h-5 mr-2" />
                Lancer une partie
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </motion.div>

          {/* COLONNE DROITE — Tableau de jeu interactif */}
          {/* COLONNE DROITE — Tableau de mise ZeBall */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-[#003d1e] rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
              {/* Header */}
              <div className="bg-[#1a1a2e] px-6 py-4 flex items-center justify-between">
                <h3
                  className="text-white font-bold text-base"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Tableau de mise
                </h3>
                <span className="text-white/40 text-xs">ZeBall</span>
              </div>

              {/* Tableau */}
              <div className="p-3 md:p-4">
                <table
                  className="w-full border-collapse"
                  style={{ tableLayout: "fixed" }}
                >
                  <tbody>
                    {/* Ligne 1 : 7, 8, OVER */}
                    <tr>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#cd0001] text-white font-extrabold
                                   text-2xl md:text-3xl h-14 md:h-16
                                   hover:brightness-125 transition-all cursor-pointer"
                        style={{
                          fontFamily: "var(--font-poppins)",
                          textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                        }}
                      >
                        7
                      </td>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#000101] text-white font-extrabold
                                   text-2xl md:text-3xl h-14 md:h-16
                                   hover:bg-[#2a2a2a] transition-all cursor-pointer"
                        style={{
                          fontFamily: "var(--font-poppins)",
                          textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                        }}
                      >
                        8
                      </td>
                      <td
                        rowSpan={2}
                        className="border border-white/20 text-center align-middle
                                   bg-white/5 text-white font-bold
                                   text-sm md:text-base tracking-widest uppercase
                                   hover:bg-white/10 transition-all cursor-pointer
                                   leading-tight px-1 md:px-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        O<br />V<br />E<br />R
                      </td>
                    </tr>

                    {/* Ligne 2 : 5, 6 */}
                    <tr>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#cd0001] text-white font-extrabold
                                   text-2xl md:text-3xl h-14 md:h-16
                                   hover:brightness-125 transition-all cursor-pointer"
                        style={{
                          fontFamily: "var(--font-poppins)",
                          textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                        }}
                      >
                        5
                      </td>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#000101] text-white font-extrabold
                                   text-2xl md:text-3xl h-14 md:h-16
                                   hover:bg-[#2a2a2a] transition-all cursor-pointer"
                        style={{
                          fontFamily: "var(--font-poppins)",
                          textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                        }}
                      >
                        6
                      </td>
                    </tr>

                    {/* Ligne 3 : Grand losange jaune + losange rouge */}
                    <tr>
                      <td
                        rowSpan={2}
                        colSpan={2}
                        className="border border-white/20 text-center align-middle
                                   bg-[#003d1e] h-24 md:h-28
                                   cursor-pointer"
                      >
                        <div className="flex items-center justify-center h-full">
                          <div
                            className="w-20 h-20 md:w-24 md:h-24 bg-[#ffd36a]
                                       hover:scale-110 hover:brightness-125
                                       transition-all duration-200 cursor-pointer"
                            style={{
                              clipPath:
                                "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                            }}
                          />
                        </div>
                      </td>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#003d1e] h-12 md:h-14
                                   cursor-pointer"
                      >
                        <div className="flex items-center justify-center h-full">
                          <div
                            className="w-16 h-8 md:w-20 md:h-9 bg-[#fd0000]
                                       hover:scale-110 hover:brightness-125
                                       transition-all duration-200 cursor-pointer"
                            style={{
                              clipPath:
                                "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                            }}
                          />
                        </div>
                      </td>
                    </tr>

                    {/* Ligne 4 : losange gris-noir */}
                    <tr>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#003d1e] h-12 md:h-14
                                   cursor-pointer"
                      >
                        <div className="flex items-center justify-center h-full">
                          <div
                            className="w-16 h-8 md:w-20 md:h-9 bg-[#2a2b2b]
                                       hover:scale-110 hover:brightness-125
                                       transition-all duration-200 cursor-pointer"
                            style={{
                              clipPath:
                                "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                            }}
                          />
                        </div>
                      </td>
                    </tr>

                    {/* Ligne 5 : 3, 4, UNDER */}
                    <tr>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#000101] text-white font-extrabold
                                   text-2xl md:text-3xl h-14 md:h-16
                                   hover:bg-[#2a2a2a] transition-all cursor-pointer"
                        style={{
                          fontFamily: "var(--font-poppins)",
                          textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                        }}
                      >
                        3
                      </td>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#cd0001] text-white font-extrabold
                                   text-2xl md:text-3xl h-14 md:h-16
                                   hover:brightness-125 transition-all cursor-pointer"
                        style={{
                          fontFamily: "var(--font-poppins)",
                          textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                        }}
                      >
                        4
                      </td>
                      <td
                        rowSpan={2}
                        className="border border-white/20 text-center align-middle
                                   bg-white/5 text-white font-bold
                                   text-sm md:text-base tracking-widest uppercase
                                   hover:bg-white/10 transition-all cursor-pointer
                                   leading-tight px-1 md:px-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        U<br />N<br />D<br />E<br />R
                      </td>
                    </tr>

                    {/* Ligne 6 : 1, 2 */}
                    <tr>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#000101] text-white font-extrabold
                                   text-2xl md:text-3xl h-14 md:h-16
                                   hover:bg-[#2a2a2a] transition-all cursor-pointer"
                        style={{
                          fontFamily: "var(--font-poppins)",
                          textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                        }}
                      >
                        1
                      </td>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#cd0001] text-white font-extrabold
                                   text-2xl md:text-3xl h-14 md:h-16
                                   hover:brightness-125 transition-all cursor-pointer"
                        style={{
                          fontFamily: "var(--font-poppins)",
                          textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                        }}
                      >
                        2
                      </td>
                    </tr>

                    {/* Ligne 7 : Impair, Pair */}
                    <tr>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#003d1e] text-white font-bold
                                   text-xs md:text-sm tracking-wider uppercase
                                   h-12 md:h-14
                                   hover:bg-[#004d26] transition-all cursor-pointer"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        Impair
                      </td>
                      <td
                        className="border border-white/20 text-center align-middle
                                   bg-[#003d1e] text-white font-bold
                                   text-xs md:text-sm tracking-wider uppercase
                                   h-12 md:h-14
                                   hover:bg-[#004d26] transition-all cursor-pointer"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        Pair
                      </td>
                      <td className="border border-white/10 bg-transparent" />
                    </tr>
                  </tbody>
                </table>

                {/* Bouton jouer sous le tableau */}
                <a
                  href="https://iziloto.cm/casino/games/dyce-games-zeball"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full mt-4
                             bg-[#22c55e] text-white font-bold
                             py-3.5 rounded-xl text-sm md:text-base
                             hover:bg-[#16a34a] transition-all duration-300
                             shadow-md hover:shadow-lg"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Jouer maintenant sur IziLoto
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== SECTION JETONS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-24"
        >
          <div className="text-center mb-10">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#1a1a2e]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Choisissez votre <span className="text-[#22c55e]">jeton</span>
            </h3>
            <p className="text-[#6b7280] text-base mt-2">
              Des mises accessibles de 10 à 10 000 FCFA pour tous les joueurs.
            </p>
          </div>

          {/* Grille des jetons PNG */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 md:gap-6">
            {jetons.map((jeton, index) => (
              <motion.div
                key={jeton.file}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.08,
                  type: "spring",
                  stiffness: 200,
                }}
                className="flex flex-col items-center gap-2 group"
              >
                {/* Image du jeton */}
                <div
                  className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24
                                group-hover:scale-110 transition-transform duration-300
                                drop-shadow-lg group-hover:drop-shadow-2xl"
                >
                  <Image
                    src={`/${jeton.file}`}
                    alt={`Jeton ${jeton.value}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                  />
                </div>
                {/* Valeur */}
                <span
                  className="text-[#1a1a2e] text-xs md:text-sm font-bold text-center
                             group-hover:text-[#22c55e] transition-colors"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {jeton.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-8">
            <div
              className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5
                            shadow-sm border border-[#e5e7eb]"
            >
              <Coins className="w-4 h-4 text-[#22c55e]" />
              <span className="text-sm text-[#6b7280]">
                Sélectionnez un jeton puis cliquez sur une case pour miser
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
