import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-transparent border border-gray-300 dark:border-gray-700 rounded px-2 py-1 text-sm text-gray-600 dark:text-gray-300"
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
    </select>
  );
}