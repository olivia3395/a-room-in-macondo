import { motion } from "motion/react";

interface LandingProps {
  onEnter: () => void;
  language: "en" | "zh";
  setLanguage: (lang: "en" | "zh") => void;
}

export default function Landing({ onEnter, language, setLanguage }: LandingProps) {
  const content = {
    en: {
      title: "A Room in Macondo",
      intro1: "Macondo is the legendary fictional town from Gabriel García Márquez's One Hundred Years of Solitude. It has become a symbol of magical realism, family destiny, tropical rain, memory and forgetting, time loops, and the profound melancholy of South American literature.",
      intro2: "\"A Room in Macondo\" is not about reading the novel, but temporarily living inside it. It offers you a corner, a room, and a fate of your own within that world.",
      button: "Enter the Novel",
      toggle: "中文"
    },
    zh: {
      title: "A Room in Macondo",
      intro1: "马孔多（Macondo）是加西亚·马尔克斯《百年孤独》中最著名的虚构小镇。它几乎已经成了一个象征，代表着魔幻现实主义、家族命运、热带雨季、记忆与遗忘、时间循环，以及南美文学式的神秘与忧伤。",
      intro2: "“A Room in Macondo” 并非让你去“读完马孔多”，而是让你暂时住进去，在那个世界里拥有一个属于自己的角落、房间、命运。",
      button: "进入小说",
      toggle: "English"
    }
  };

  const t = content[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-mysterious shadow-overlay text-[#d4af37] relative overflow-hidden"
    >
      {/* Language Toggle */}
      <button 
        onClick={() => setLanguage(language === "en" ? "zh" : "en")}
        className="absolute top-6 right-6 z-20 font-sans text-sm tracking-widest opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
      >
        {t.toggle}
      </button>

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

      <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-8">{t.title}</h1>
        <div className="space-y-6 mb-12 text-left opacity-80 leading-relaxed font-serif text-lg md:text-xl px-4">
          <p>{t.intro1}</p>
          <p>{t.intro2}</p>
        </div>
        <button
          onClick={onEnter}
          className="px-8 py-4 border border-[#d4af37] rounded-full font-sans uppercase tracking-widest text-sm hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors"
        >
          {t.button}
        </button>
      </div>
    </motion.div>
  );
}
