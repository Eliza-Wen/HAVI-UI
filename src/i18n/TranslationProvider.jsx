import React, { createContext, useContext, useEffect, useState } from 'react';
import translations from './translations';

const TranslationContext = createContext(null);

export function TranslationProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'en';
    } catch (e) {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {}
  }, [lang]);

  const t = (key, fallback) => {
    const parts = key.split('.');
    let obj = translations[lang] || translations.en;
    for (const p of parts) {
      obj = obj && obj[p];
      if (obj === undefined) break;
    }
    if (obj === undefined) return fallback || key;
    return obj;
  };

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return ctx;
}
