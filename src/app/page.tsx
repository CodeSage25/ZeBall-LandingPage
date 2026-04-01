import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GameSection from "@/components/GameSection";
import HowToPlay from "@/components/HowToPlay";
import BettingTypes from "@/components/BettingTypes";
import Rules from "@/components/Rules";
import Cashback from "@/components/Cashback";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GameSection />
        <HowToPlay />
        <BettingTypes />
        <Rules />
        <Cashback />
        <SocialSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
