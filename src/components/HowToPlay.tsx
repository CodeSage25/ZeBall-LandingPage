"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CreditCard,
  CircleDollarSign,
  Target,
  Timer,
  Trophy,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Rechargez votre compte",
    description:
      "Rendez-vous sur IziLoto.cm et rechargez votre compte en toute sécurité.",
    icon: CreditCard,
    color: "bg-blue-500",
  },
  {
    number: 2,
    title: "Sélectionnez un jeton",
    description:
      "Choisissez la valeur de votre mise parmi les jetons disponibles (10 à 10 000 FCFA).",
    icon: CircleDollarSign,
    color: "bg-green-500",
  },
  {
    number: 3,
    title: "Placez vos mises",
    description:
      "Misez sur un numéro, une couleur, pair/impair ou over/under selon votre choix.",
    icon: Target,
    color: "bg-purple-500",
  },
  {
    number: 4,
    title: "Attendez le tirage",
    description:
      "Le tirage a lieu toutes les 30 secondes. La roue tourne et la boule s'arrête !",
    icon: Timer,
    color: "bg-orange-500",
  },
  {
    number: 5,
    title: "Encaissez vos gains !",
    description:
      "Si votre pari est gagnant, vos gains sont crédités instantanément sur votre solde.",
    icon: Trophy,
    color: "bg-[#f5c518]",
  },
];

export default function HowToPlay() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="comment-jouer" ref={ref} className="bg-white py-16 md:py-24">
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
            Comment <span className="text-[#175A38]">jouer</span> ?
          </h2>
          <p className="text-base md:text-lg text-[#6b7280] text-center max-w-2xl mx-auto mt-4">
            5 étapes simples pour commencer à jouer et gagner sur{" "}
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

        {/* ===== STEPPER DESKTOP (horizontal) ===== */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Ligne de connexion horizontale */}
            <div className="absolute top-10 left-[10%] right-[10%] h-1 bg-[#e5e7eb] rounded-full" />
            <motion.div
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="absolute top-10 left-[10%] right-[10%] h-1 bg-[#175A38] rounded-full origin-left"
              style={{ maxWidth: "80%" }}
            />

            {/* Les 5 étapes */}
            <div className="relative grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.2,
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Cercle numéro */}
                  <div
                    className={`relative z-10 w-20 h-20 rounded-full ${step.color}
                                flex items-center justify-center shadow-lg mb-6
                                border-4 border-white`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Numéro */}
                  <span
                    className="text-sm font-bold text-[#175A38] mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    ÉTAPE {step.number}
                  </span>

                  {/* Titre */}
                  <h3
                    className="font-bold text-[#1a1a2e] text-base mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6b7280] text-sm leading-relaxed px-2">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== STEPPER MOBILE (vertical) ===== */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#e5e7eb]" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.15,
                  }}
                  className="relative flex items-start gap-5 pl-2"
                >
                  {/* Cercle numéro */}
                  <div
                    className={`relative z-10 shrink-0 w-12 h-12 rounded-full ${step.color}
                                flex items-center justify-center shadow-md
                                border-2 border-white`}
                  >
                    <step.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Contenu */}
                  <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4 flex-1">
                    <span
                      className="text-xs font-bold text-[#175A38]"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      ÉTAPE {step.number}
                    </span>
                    <h3
                      className="font-bold text-[#1a1a2e] text-base mt-1"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA en bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://iziloto.cm/casino/games/dyce-games-zeball"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center
                       bg-[#175A38] text-[#F8FCEE] font-bold
                       px-8 py-4 rounded-full text-base
                      
                      
                       transition-all duration-300"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Commencer à jouer
          </a>
          <p className="text-[#6b7280] text-sm mt-3">
            Inscription gratuite sur IziLoto.cm
          </p>
        </motion.div>
      </div>
    </section>
  );
}
