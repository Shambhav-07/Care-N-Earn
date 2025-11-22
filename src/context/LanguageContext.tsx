import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    welcome: "Welcome back!",
    services: "Services",
    contact: "Contact",
    startEarning: "Start Earning",
    login: "Login",
    signup: "Sign up",
    email: "Email address",
    password: "Password",
    fullName: "Full Name",
    createAccount: "Create account",
    alreadyHaveAccount: "Already have an account?",
    dontHaveAccount: "Don't have an account?",
    signIn: "Sign in",
    iAmA: "I am a",
    serviceUser: "Service User",
    serviceProvider: "Service Provider",
  },
  hi: {
    welcome: "वापस स्वागत है!",
    services: "सेवाएं",
    contact: "संपर्क करें",
    startEarning: "कमाई शुरू करें",
    login: "लॉग इन",
    signup: "साइन अप",
    email: "ईमेल पता",
    password: "पासवर्ड",
    fullName: "पूरा नाम",
    createAccount: "खाता बनाएं",
    alreadyHaveAccount: "क्या आपके पास पहले से एक खाता मौजूद है?",
    dontHaveAccount: "खाता नहीं है?",
    signIn: "साइन इन करें",
    iAmA: "मैं एक",
    serviceUser: "सेवा उपयोगकर्ता",
    serviceProvider: "सेवा प्रदाता",
  }
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};