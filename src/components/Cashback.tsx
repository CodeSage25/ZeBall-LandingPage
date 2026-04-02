"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, TrendingUp, RotateCcw, Coins } from "lucide-react";

const cashbackSteps = [
  {
    icon: RotateCcw,
    title: "Jouez 10 parties",
    description: "Le cashback se déclenche après 10 parties jouées.",
  },
  {
    icon: TrendingUp,
    title: "10% de vos pertes",
    description:
      "Le montant du cashback est calculé sur vos pertes accumulées.",
  },
  {
    icon: Coins,
    title: "Crédité automatiquement",
    description: "Le cashback est crédité automatiquement sur votre solde.",
  },
];

export default function Cashback() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="cashback" ref={ref} className="bg-[#f8f9fb] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ===== COLONNE GAUCHE — Le gros chiffre ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            {/* Icône cadeau */}
            <motion.div
              animate={isInView ? { rotate: [0, -10, 10, -10, 0] } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
                         bg-[#f5c518]/10 mb-6"
            >
              <Gift className="w-8 h-8 text-[#175A38]" />
            </motion.div>

            {/* Le gros 10% */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            >
              <span
                className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#CB3B32] leading-none"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                10%
              </span>
            </motion.div>

            <h2
              className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mt-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              de cashback sur vos pertes
            </h2>

            <p className="text-[#6b7280] text-base md:text-lg mt-4 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Parce que chaque joueur mérite une seconde chance. Récupérez{" "}
              <span className="font-semibold text-[#1a1a2e]">
                10% de vos pertes accumulées
              </span>{" "}
              automatiquement après 10 parties jouées.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://iziloto.cm/casino/games/dyce-games-zeball"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center
                           bg-[#175A38] text-[#FCFEF0] font-bold
                           px-8 py-4 rounded-full text-base
                          
                        
                           transition-all duration-300"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <Gift className="w-5 h-5 mr-2" />
                Profiter du cashback
              </a>
            </div>
          </motion.div>

          {/* ===== COLONNE DROITE — Comment ça marche ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-[#e5e7eb] p-8">
              <h3
                className="font-bold text-[#1a1a2e] text-xl mb-8"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                🎁 Comment fonctionne le cashback ?
              </h3>

              <div className="space-y-8">
                {cashbackSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.2,
                    }}
                    className="flex items-start gap-4"
                  >
                    {/* Numéro + Icône */}
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#f5c518]/10 flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-[#f5c518]" />
                      </div>
                      <span
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full
                                   bg-[#f5c518] text-[#1a1a2e] flex items-center justify-center
                                   text-xs font-bold shadow-sm"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {index + 1}
                      </span>
                    </div>

                    {/* Texte */}
                    <div>
                      <h4
                        className="font-bold text-[#1a1a2e] text-base"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {step.title}
                      </h4>
                      <p className="text-[#6b7280] text-sm mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Encart info */}
              <div className="mt-8 bg-[#fef9e7] border border-[#f5c518]/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-[#f5c518] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#1a1a2e] text-sm font-semibold">
                      Exemple concret
                    </p>
                    <p className="text-[#6b7280] text-sm mt-1">
                      Vous perdez 5 000 FCFA sur 10 parties → Vous recevez{" "}
                      <span className="font-bold text-[#f5c518]">500 FCFA</span>{" "}
                      de cashback automatiquement !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
