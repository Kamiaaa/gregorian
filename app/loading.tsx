// app/loading.tsx
'use client';

import { useEffect, useState } from 'react';
import { 
  RiLoader2Line, 
  RiSparkling2Line,
  RiMoonFill,
  RiSunFill,
  RiCompasses2Line
} from 'react-icons/ri';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  // Progress simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + Math.random() * 15, 95); // Slower towards end
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Animated dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      
      {/* Main loader container */}
      <div className="relative w-full max-w-md px-6">
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Loader content */}
        <div className="text-center space-y-8">
          
          {/* Animated icons */}
          <div className="relative mx-auto w-32 h-32">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin" />
            
            {/* Middle ring */}
            <div className="absolute inset-4 border-4 border-transparent border-t-purple-500 border-r-pink-500 rounded-full animate-spin-slow" />
            
            {/* Inner icon */}
            <div className="absolute inset-8 flex items-center justify-center">
              <RiCompasses2Line className="w-16 h-16 text-gray-700 dark:text-gray-300 animate-pulse" />
            </div>
            
            {/* Floating sparkles */}
            <RiSparkling2Line className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 animate-ping" />
            <RiSparkling2Line className="absolute -bottom-2 -left-2 w-6 h-6 text-blue-500 animate-ping delay-300" />
          </div>

          {/* Progress bar */}
          <div className="space-y-4">
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
              Loading your experience
              <span className="ml-1 w-4 inline-block">{dots}</span>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Starting</span>
              <span className="font-semibold">{progress.toFixed(0)}%</span>
              <span>Almost there</span>
            </div>
          </div>

          {/* Loading tips */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
              Pro tip: Good things take time!
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-150" />
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Theme indicator */}
      <div className="absolute bottom-8 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <RiSunFill className="w-4 h-4" />
        <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1">
          <div className="w-4 h-4 bg-white rounded-full dark:translate-x-6 transition-transform duration-300" />
        </div>
        <RiMoonFill className="w-4 h-4" />
      </div>
    </div>
  );
}