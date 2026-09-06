import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, Calendar, Bell } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

// 19 de septiembre de 2026 a las 12:00 PM (Hora de la Ciudad de México / UTC-6)
const TARGET_SIMULACRO_DATE = new Date('2026-09-19T12:00:00-06:00').getTime();

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();
  const difference = TARGET_SIMULACRO_DATE - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
    isExpired: false
  };
}

export const SimulacroBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // "una vez que acabe pues lo borras": Si el tiempo llegó a cero, no se muestra nada
  if (timeLeft.isExpired) {
    return null;
  }

  const formatNumber = (n: number) => String(n).padStart(2, '0');

  return (
    <div 
      id="simulacro-nacional-banner"
      className="relative z-30 w-full bg-zinc-950/90 border-b border-zinc-700/80 backdrop-blur-xl px-4 sm:px-8 py-3 transition-all"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3.5">
        
        {/* Left: Indicator & Title */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 text-white shrink-0">
            <Bell className="w-4 h-4 animate-bounce" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white" />
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-xs sm:text-sm font-black text-white tracking-wide uppercase font-mono">
                Segundo Simulacro Nacional 2026
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-600 bg-zinc-900 text-zinc-200 uppercase font-semibold">
                PROTECCIÓN CIVIL MÉXICO
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
              19 de septiembre de 2026 · 12:00 PM (Hora Centro de México)
            </p>
          </div>
        </div>

        {/* Right: Countdown Clock Display */}
        <div className="flex items-center gap-1.5 sm:gap-2 font-mono">
          <div className="text-[10px] uppercase text-zinc-400 font-semibold mr-1 hidden lg:block tracking-wider">
            Tiempo Restante:
          </div>

          {/* Days */}
          <div className="flex flex-col items-center justify-center px-2.5 py-1 rounded-lg border border-zinc-700 bg-zinc-900/80 min-w-[50px] shadow-sm">
            <span className="text-sm sm:text-base font-black text-white leading-tight">
              {formatNumber(timeLeft.days)}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold">Días</span>
          </div>

          <span className="text-zinc-600 font-bold text-xs">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center justify-center px-2.5 py-1 rounded-lg border border-zinc-700 bg-zinc-900/80 min-w-[50px] shadow-sm">
            <span className="text-sm sm:text-base font-black text-white leading-tight">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold">Horas</span>
          </div>

          <span className="text-zinc-600 font-bold text-xs">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center justify-center px-2.5 py-1 rounded-lg border border-zinc-700 bg-zinc-900/80 min-w-[50px] shadow-sm">
            <span className="text-sm sm:text-base font-black text-white leading-tight">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold">Min</span>
          </div>

          <span className="text-zinc-600 font-bold text-xs">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center justify-center px-2.5 py-1 rounded-lg border border-zinc-700 bg-zinc-900/80 min-w-[50px] shadow-sm">
            <span className="text-sm sm:text-base font-black text-white leading-tight">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold">Seg</span>
          </div>
        </div>

      </div>
    </div>
  );
};
