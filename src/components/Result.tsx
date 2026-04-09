import { motion } from "motion/react";
import { LiteraryFate } from "../lib/gemini";

interface ResultProps {
  fate: LiteraryFate;
  onRegenerate: () => void;
  language: "en" | "zh";
}

export default function Result({ fate, onRegenerate, language }: ResultProps) {
  const content = {
    en: {
      header1: "From the Rain Town Archive",
      header2: "Recorded during violet dusk",
      l1: "World Entry",
      l2: "Role Assigned",
      l3: "Object Recovered",
      l4: "Novel Opening",
      button: "Enter Another Fate"
    },
    zh: {
      header1: "来自雨镇档案馆",
      header2: "记录于紫色的黄昏",
      l1: "世界入口",
      l2: "分配的角色",
      l3: "寻回的物件",
      l4: "小说开篇",
      button: "进入另一个命运"
    }
  };

  const t = content[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-6 md:p-12 bg-mysterious shadow-overlay text-[#d4af37] font-serif relative overflow-hidden"
    >
      {/* Fire Background */}
      <div className="fire-bg" />
      {/* Rainforest Background */}
      <div className="rainforest-bg" />
      {/* Old Book Background */}
      <div className="book-bg" />
      {/* Plant Shadow */}
      <svg className="plant-shadow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M100,20 C120,50 150,80 140,120 C130,160 100,180 80,180 C60,180 30,160 20,120 C10,80 40,50 60,20 Z" fill="#d4af37" />
      </svg>
      {/* Butterfly */}
      <div className="butterfly-bg" />
      {/* Grid Shadow */}
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop" className="grid-shadow-bg" alt="" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        {/* Hero Section */}
        <header className="text-center space-y-4 border-b border-[#d4af37]/20 pb-12">
          <p className="text-xs font-sans uppercase tracking-[0.3em] opacity-50 italic">{t.header1}</p>
          <h1 className="text-6xl md:text-8xl italic">{fate.title}</h1>
          <p className="text-sm font-sans uppercase tracking-widest opacity-60">{t.header2}</p>
        </header>

        {/* Archive Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2 border-l border-[#d4af37]/20 pl-4">
            <p className="archive-label">{t.l1}</p>
            <p className="text-lg italic">{fate.town}</p>
          </div>
          <div className="space-y-2 border-l border-[#d4af37]/20 pl-4">
            <p className="archive-label">{t.l2}</p>
            <p className="text-lg italic">{fate.identity}</p>
          </div>
          <div className="space-y-2 border-l border-[#d4af37]/20 pl-4">
            <p className="archive-label">{t.l3}</p>
            <p className="text-lg italic">{fate.symbol}</p>
          </div>
        </section>

        {/* Opening Passage */}
        <section className="max-w-2xl mx-auto pt-8">
          <p className="archive-label mb-8">{t.l4}</p>
          <p className="text-2xl leading-relaxed drop-cap">{fate.opening}</p>
        </section>

        {/* Closing Line */}
        <footer className="text-center space-y-12 pt-16 border-t border-[#d4af37]/20">
          <p className="text-3xl italic font-bold max-w-xl mx-auto">{fate.fateLine}</p>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={onRegenerate}
              className="px-8 py-4 border border-[#d4af37] rounded-full font-sans uppercase tracking-widest text-sm hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors"
            >
              {t.button}
            </button>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}
