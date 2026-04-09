/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Landing from "./components/Landing";
import Intake from "./components/Intake";
import Result from "./components/Result";
import { generateFate, LiteraryFate } from "./lib/gemini";

export default function App() {
  const [step, setStep] = useState<"landing" | "intake" | "result">("landing");
  const [fate, setFate] = useState<LiteraryFate | null>(null);
  const [loading, setLoading] = useState(false);
  const [intakeData, setIntakeData] = useState<{haunting: string, weather: string, tone: string, logic: string} | null>(null);
  const [language, setLanguage] = useState<"en" | "zh">("zh");

  const handleGenerate = async (haunting: string, weather: string, tone: string, logic: string) => {
    setLoading(true);
    setIntakeData({haunting, weather, tone, logic});
    try {
      const result = await generateFate(haunting, weather, tone, logic, language);
      setFate(result);
      setStep("result");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-mysterious text-[#d4af37] font-serif p-6 text-center shadow-overlay relative overflow-hidden">
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
        
        <div className="relative z-10 text-2xl md:text-4xl italic tracking-widest">
          {language === "zh" ? "正在书写你的命运..." : "Writing your fate..."}
        </div>
      </div>
    );
  }

  return (
    <>
      {step === "landing" && <Landing onEnter={() => setStep("intake")} language={language} setLanguage={setLanguage} />}
      {step === "intake" && <Intake onGenerate={handleGenerate} language={language} />}
      {step === "result" && fate && <Result fate={fate} onRegenerate={() => handleGenerate(intakeData!.haunting, intakeData!.weather, intakeData!.tone, intakeData!.logic)} language={language} />}
    </>
  );
}
