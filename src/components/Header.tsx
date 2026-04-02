"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Jouer", href: "#jeu" },
  { label: "Comment jouer", href: "#comment-jouer" },
  { label: "Règles", href: "#regles" },
  { label: "Cashback", href: "#cashback" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ===== LOGO ZeBall ===== */}
          <a href="#" className="flex items-center gap-1">
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
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#6b7280]
                           hover:text-[#1a1a2e] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://iziloto.cm/casino/games/dyce-games-zeball"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center
                         bg-[#165B38] text-[#FCFFF1] font-bold
                         px-6 py-3 rounded-full
                        
                         transition-all duration-300 text-sm"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Jouer maintenant
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu de navigation"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1a1a2e]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1a1a2e]" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-[#e5e7eb] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-base font-medium text-[#6b7280]
                             hover:text-[#1a1a2e] transition-colors py-2
                             border-b border-gray-100 last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://iziloto.cm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center
                           bg-[#22c55e] text-[#1a1a2e] font-bold
                           px-6 py-3 rounded-full text-center mt-2
                           hover:bg-green-400 hover:shadow-lg
                           transition-all duration-300 text-sm"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Jouer maintenant
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
