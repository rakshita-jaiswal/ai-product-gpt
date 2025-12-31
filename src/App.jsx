import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(5);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [iconDrawn, setIconDrawn] = useState(false);

  useEffect(() => {
    setTimeout(() => setIconDrawn(true), 300);
  }, []);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      // progress should complete roughly in the same time as the countdown (5s)
      const progressTimer = setInterval(() => {
        setProgress(prev => Math.min(prev + 1, 100));
      }, 50);
      return () => {
        clearTimeout(timer);
        clearInterval(progressTimer);
      };
    } else {
      setIsExiting(true);
      setTimeout(() => window.location.href = 'https://chatgpt.com/g/g-694d6e96f49c8191bfbaa43f80eeb041-prd-ai', 500);
    }
  }, [count]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 ${isExiting ? 'scale-105 opacity-0' : ''}`}
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
      }}>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #14B8A6 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)', animationDelay: '1s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Animated Icon */}
        <div className={`mb-6 transition-all duration-700 ${iconDrawn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative">
            <svg width="100" height="120" viewBox="0 0 100 120" className="drop-shadow-2xl">
              {/* Document shape */}
              <path
                d="M20 10 L65 10 L80 25 L80 110 Q80 115 75 115 L25 115 Q20 115 20 110 Z"
                fill="none"
                stroke="url(#iconGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-all duration-1000 ${iconDrawn ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  strokeDasharray: 350,
                  strokeDashoffset: iconDrawn ? 0 : 350,
                  transition: 'stroke-dashoffset 1s ease-out'
                }}
              />
              {/* Folded corner */}
              <path
                d="M65 10 L65 25 L80 25"
                fill="none"
                stroke="url(#iconGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-all duration-500 delay-500 ${iconDrawn ? 'opacity-100' : 'opacity-0'}`}
              />
              {/* Lines */}
              <line x1="35" y1="50" x2="65" y2="50" stroke="url(#iconGradient)" strokeWidth="3" strokeLinecap="round"
                className={`transition-all duration-300 ${iconDrawn ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '0.7s' }} />
              <line x1="35" y1="70" x2="65" y2="70" stroke="url(#iconGradient)" strokeWidth="3" strokeLinecap="round"
                className={`transition-all duration-300 ${iconDrawn ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '0.9s' }} />
              <line x1="35" y1="90" x2="55" y2="90" stroke="url(#iconGradient)" strokeWidth="3" strokeLinecap="round"
                className={`transition-all duration-300 ${iconDrawn ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '1.1s' }} />
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Glow effect */}
            <div className="absolute inset-0 blur-xl opacity-30 animate-pulse"
              style={{ background: 'radial-gradient(circle, #14B8A6 0%, transparent 70%)' }} />
          </div>
        </div>

        {/* Logo */}
        <h1 className={`text-5xl font-bold mb-4 transition-all duration-700 delay-200 ${iconDrawn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-white">PRD</span>
          <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">.ai</span>
        </h1>

        {/* Tagline */}
        <p className={`text-slate-400 text-sm mb-8 transition-all duration-700 delay-300 ${iconDrawn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Your AI-powered product partner
        </p>

        {/* Countdown circle */}
        <div className={`relative mb-6 transition-all duration-700 delay-500 ${iconDrawn ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <svg width="120" height="120" className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="60" cy="60" r="54"
              fill="none"
              stroke="#1E293B"
              strokeWidth="6"
            />
            {/* Progress circle */}
            <circle
              cx="60" cy="60" r="54"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={339.292}
              strokeDashoffset={339.292 * (1 - progress / 100)}
              className="transition-all duration-100 ease-linear"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14B8A6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Countdown number */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              key={count}
              className="text-6xl font-bold text-white animate-pulse"
              style={{
                animation: 'countPop 0.3s ease-out'
              }}
            >
              {count}
            </span>
          </div>
        </div>

        {/* Status text */}
        <div className={`flex items-center gap-2 transition-all duration-700 delay-700 ${iconDrawn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-slate-300 text-lg">
            {count > 0 ? 'Launching PRD AI Assistant' : 'Redirecting now'}
          </p>
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
          </span>
        </div>

        {/* Tip */}
        <div className={`mt-8 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 transition-all duration-700 delay-1000 ${iconDrawn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-slate-400 text-xs">
            💡 Tip: Be specific about your target audience for better PRDs
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50" />

      <style>{`
        @keyframes countPop {
          0% { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
