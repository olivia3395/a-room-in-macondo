import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface IntakeProps {
  onGenerate: (haunting: string, weather: string, tone: string, logic: string) => void;
  language: "en" | "zh";
}

export default function Intake({ onGenerate, language }: IntakeProps) {
  const content = {
    en: {
      title: "The Ritual",
      q1: "What has been haunting you lately?",
      p1: "A memory, a feeling...",
      q2: "Which weather would you like to enter?",
      o2: ["Rain-soaked dusk", "Tropical noon", "Sleepless midnight", "Golden storm light", "A week of unending rain"],
      q3: "What kind of story can hold you tonight?",
      o3: ["Magical realism", "Family secrets", "Melancholy love story", "A town of prophecy", "Memory and ghosts", "A quiet political sadness"],
      q4: "What do you trust more tonight?",
      o4: ["Memory", "Prophecy", "Longing", "Silence"],
      button: "Open the Story"
    },
    zh: {
      title: "仪式",
      q1: "最近有什么在萦绕着你？",
      p1: "一段记忆，一种感觉...",
      q2: "你想进入怎样的天气？",
      o2: ["被雨水浸透的黄昏", "热带的正午", "无法入眠的午夜", "金色的暴风雨之光", "连绵一周的阴雨"],
      q3: "今晚什么样的故事能承载你？",
      o3: ["魔幻现实主义", "家族秘密", "忧伤的爱情故事", "充满预言的小镇", "记忆与幽灵", "一种安静的政治忧伤"],
      q4: "今晚你更相信什么？",
      o4: ["记忆", "预言", "渴望", "沉默"],
      button: "开启故事"
    }
  };

  const t = content[language];

  const [haunting, setHaunting] = useState("");
  const [weather, setWeather] = useState(t.o2[0]);
  const [tone, setTone] = useState(t.o3[0]);
  const [logic, setLogic] = useState(t.o4[0]);

  // Update defaults if language changes while on this screen
  useEffect(() => {
    setWeather(t.o2[0]);
    setTone(t.o3[0]);
    setLogic(t.o4[0]);
  }, [language, t.o2, t.o3, t.o4]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(haunting, weather, tone, logic);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-mysterious shadow-overlay text-[#d4af37] relative overflow-hidden"
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

      <div className="max-w-xl w-full space-y-8 relative z-10">
        <h2 className="font-serif text-4xl text-center mb-12">{t.title}</h2>
        
        <div className="space-y-4">
          <label className="block font-sans text-sm uppercase tracking-widest opacity-70">{t.q1}</label>
          <input
            type="text"
            value={haunting}
            onChange={(e) => setHaunting(e.target.value)}
            className="w-full p-4 border-b border-[#d4af37] bg-transparent font-serif text-xl focus:outline-none placeholder:opacity-50 placeholder:text-[#d4af37]"
            placeholder={t.p1}
            required
          />
        </div>

        <div className="space-y-4">
          <label className="block font-sans text-sm uppercase tracking-widest opacity-70">{t.q2}</label>
          <select value={weather} onChange={(e) => setWeather(e.target.value)} className="w-full p-4 border border-[#d4af37] bg-[#0a0a0a] font-serif text-xl">
            {t.o2.map(w => <option key={w} value={w}>{w}</option>)}
          </select>
        </div>

        <div className="space-y-4">
          <label className="block font-sans text-sm uppercase tracking-widest opacity-70">{t.q3}</label>
          <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full p-4 border border-[#d4af37] bg-[#0a0a0a] font-serif text-xl">
            {t.o3.map(toneOpt => <option key={toneOpt} value={toneOpt}>{toneOpt}</option>)}
          </select>
        </div>

        <div className="space-y-4">
          <label className="block font-sans text-sm uppercase tracking-widest opacity-70">{t.q4}</label>
          <select value={logic} onChange={(e) => setLogic(e.target.value)} className="w-full p-4 border border-[#d4af37] bg-[#0a0a0a] font-serif text-xl">
            {t.o4.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 border border-[#d4af37] rounded-full font-sans uppercase tracking-widest text-sm hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors"
        >
          {t.button}
        </button>
      </div>
    </motion.form>
  );
}
