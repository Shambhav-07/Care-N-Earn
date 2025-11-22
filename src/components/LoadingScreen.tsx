import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50">
      <div className="text-center">
        <img
          src="/CareNEarnLogo.png"
          alt="Care & Earn"
          className="w-32 h-32 mx-auto mb-8 animate-pulse"
        />
        <h1 className="text-4xl font-bold text-emerald-700 dark:text-emerald-500 mb-2">
          Care&Earn
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Where Every Act of Kindness is Rewarded!
        </p>
        
        {/* Progress Bar */}
        <div className="w-80 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
          <div
            className="bg-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Loading... {progress}%
        </p>
      </div>
    </div>
  );
}