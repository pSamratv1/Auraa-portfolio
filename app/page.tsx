"use client";
import Hero from "./components/HeroSection";
import FeaturedWork from "./components/FeaturedWork";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-background">
        <Navbar />
        <Hero />
        <FeaturedWork />
        <Services />

        {/* Simple Footer */}
        <footer className="py-20 px-8 border-t border-white/10 text-center">
          <h2 className="font-serif text-[12vw] leading-none mb-10 tracking-tighter">
            LET&apos;S TALK
          </h2>
          <a
            href="mailto:hello@auraa.com"
            className="font-sans uppercase tracking-widest text-accent hover:text-white transition-colors"
          >
            hello@auraa.productions
          </a>
        </footer>
      </main>
    </SmoothScroll>
  );
}
