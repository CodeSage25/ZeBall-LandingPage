"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, ExternalLink } from "lucide-react";

export default function SocialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icône */}
          <motion.div
            animate={isInView ? { scale: [0.8, 1.1, 1] } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
                       bg-blue-50 mb-6"
          >
            <Users className="w-8 h-8 text-blue-600" />
          </motion.div>

          {/* Titre */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Suivez-<span className="text-[#165B38]">nous</span> !
          </h2>

          <p className="text-base md:text-lg text-[#6b7280] mt-4 max-w-lg mx-auto leading-relaxed">
            Rejoignez notre communauté sur Facebook pour ne rien manquer :
            actualités, astuces et promotions exclusives.
          </p>

          {/* Bouton Facebook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8"
          >
            <a
              href="https://www.facebook.com/people/IziLotocm/61585217354848/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3
                         bg-[#1877F2] text-white font-bold
                         px-8 py-4 rounded-full text-base
                         hover:bg-[#166FE5] hover:shadow-lg hover:shadow-[#1877F2]/30
                         transition-all duration-300 group"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {/* Logo Facebook SVG */}
              <svg
                className="w-6 h-6"
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
              Suivre IziLoto sur Facebook
              <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          {/* Texte secondaire */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-[#6b7280] text-sm mt-4"
          >
            Rejoignez des milliers de joueurs sur notre page Facebook
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
