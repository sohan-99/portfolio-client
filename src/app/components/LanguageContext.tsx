"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type LangType = "EN" | "BN";

interface LanguageContextProps {
  lang: LangType;
  setLang: (lang: LangType) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangType>("EN");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
