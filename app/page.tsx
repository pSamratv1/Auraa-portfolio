"use client";
import Hero from "./components/HeroSection";
import FeaturedWork from "./components/FeaturedWork";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import ClientLogos from "./components/ClientsLogos";
import Process from "./components/Process";
import ProjectCTA from "./components/ProjectCTA";
import Manifesto from "./components/Manifesto";
import { motion } from "framer-motion";
import Perspective from "./components/Prespective";
import VideoShowcase from "./components/VIdeoShowcase";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-background">
        <Navbar />
        <Hero />
        <Perspective />
        <ClientLogos /> {/* TRUST */}
        <VideoShowcase /> {/* MOTION GALLERY */}
        <FeaturedWork /> {/* PROOF */}
        <Process /> {/* CONFIDENCE */}
        <Services /> {/* OUTCOME */}
        <ProjectCTA /> {/* ACTION */}
        <footer className="py-32 px-8 border-t border-white/5 bg-background flex flex-col items-center">
          <motion.div whileHover={{ scale: 1.02 }} className="cursor-none">
            <h2 className="font-serif text-[15vw] leading-none mb-12 tracking-tighter opacity-10 hover:opacity-100 transition-opacity duration-700">
              AURAA
            </h2>
          </motion.div>
          <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl font-sans text-[10px] uppercase tracking-widest text-white/40">
            <p>© 2026 Auraa Productions UK</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent">
                Instagram
              </a>
              <a href="#" className="hover:text-accent">
                Vimeo
              </a>
              <a
                href="mailto:hello@auraa.productions"
                className="hover:text-accent"
              >
                hello@auraa.productions
              </a>
            </div>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
