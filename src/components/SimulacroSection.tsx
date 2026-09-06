import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  Info, 
  X, 
  ExternalLink, 
  ShieldAlert, 
  Calendar, 
  Clock, 
  MapPin, 
  FileText,
  Building2
} from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

// 19 de septiembre de 2026 a las 12:00 PM (Hora Centro de México / UTC-6)
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

export const SimulacroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    if (isModalOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsModalOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen]);

  // Si la fecha ya pasó, no se renderiza la sección
  if (timeLeft.isExpired) {
    return null;
  }

  const formatNumber = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="segundo-simulacro-nacional" className="w-full">
      {/* Main Banner Card */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-700/80 bg-zinc-950/90 backdrop-blur-xl shadow-2xl p-4 sm:p-7 md:p-10 transition-all">
        
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
          
          {/* Left: Image with rounded borders */}
          <div className="w-full lg:w-5/12 shrink-0">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-700 bg-zinc-900 shadow-xl group">
              <img 
                src="/images.jpg" 
                alt="Segundo Simulacro Nacional 2026" 
                className="w-full h-auto object-cover object-center max-h-[260px] sm:max-h-[360px] transform group-hover:scale-[1.02] transition-transform duration-300"
                onError={(e) => {
                  // Fallback to local root if needed
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/images.jpg')) {
                    target.src = '/images.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl sm:rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Right: Content & Countdown */}
          <div className="w-full lg:w-7/12 space-y-4 sm:space-y-6">
            
            {/* Header badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md border border-zinc-700 bg-zinc-900 text-[10px] sm:text-[11px] font-mono tracking-wider text-zinc-300 uppercase font-semibold">
                <ShieldAlert className="w-3.5 h-3.5 text-white shrink-0" />
                <span>PROTECCIÓN CIVIL NACIONAL</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-400">
                19 SEP 2026 · 12:00 PM
              </span>
            </div>

            {/* Title */}
            <div className="space-y-1.5 sm:space-y-2">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Segundo Simulacro Nacional
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                Convocatoria oficial para el ejercicio de preparación ciudadana y fortalecimiento de capacidades de respuesta en todo el territorio mexicano.
              </p>
            </div>

            {/* Countdown Clock */}
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md space-y-2">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase text-zinc-400 font-semibold px-1">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Cuenta Regresiva</span>
                </span>
                <span className="text-zinc-500 font-normal">Hora CDMX</span>
              </div>

              <div className="grid grid-cols-4 gap-1.5 sm:gap-3 font-mono pt-1">
                {/* Días */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg sm:rounded-xl border border-zinc-700/80 bg-zinc-950/80 shadow-sm">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-none">
                    {formatNumber(timeLeft.days)}
                  </span>
                  <span className="text-[9px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
                    Días
                  </span>
                </div>

                {/* Horas */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg sm:rounded-xl border border-zinc-700/80 bg-zinc-950/80 shadow-sm">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-none">
                    {formatNumber(timeLeft.hours)}
                  </span>
                  <span className="text-[9px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
                    Horas
                  </span>
                </div>

                {/* Minutos */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg sm:rounded-xl border border-zinc-700/80 bg-zinc-950/80 shadow-sm">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-none">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                  <span className="text-[9px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
                    Min
                  </span>
                </div>

                {/* Segundos */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg sm:rounded-xl border border-zinc-700/80 bg-zinc-950/80 shadow-sm">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-none">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                  <span className="text-[9px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
                    Seg
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Información */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
              <button
                id="btn-simulacro-info"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs sm:text-sm transition-all duration-150 shadow-md cursor-pointer w-full sm:w-auto"
              >
                <Info className="w-4 h-4" />
                <span>Información del Simulacro</span>
              </button>

              <a
                href="https://simulacronacional.sspc.gob.mx/segundosimulacronacional2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 hover:text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer w-full sm:w-auto"
              >
                <Building2 className="w-4 h-4 text-zinc-400" />
                <span>Registrar Inmueble</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* MODAL DE INFORMACIÓN Y CONSULTA DE HIPÓTESIS */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            id="modal-simulacro-info-backdrop"
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative w-full max-w-3xl rounded-2xl sm:rounded-3xl border border-zinc-700 bg-zinc-950/95 backdrop-blur-2xl shadow-2xl p-4 sm:p-7 md:p-8 space-y-5 sm:space-y-6 my-auto max-h-[92vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 sm:pb-4 gap-3">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-zinc-700 bg-zinc-900 flex items-center justify-center text-white shrink-0">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-xl font-bold text-white tracking-tight truncate">
                      2do Simulacro Nacional 2026
                    </h3>
                    <p className="text-[11px] sm:text-xs text-zinc-400 font-mono truncate">
                      Convocatoria e Hipótesis de Protección Civil
                    </p>
                  </div>
                </div>

                <button
                  id="close-simulacro-modal-btn"
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 min-h-[36px] min-w-[36px]"
                  aria-label="Cerrar modal de información"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Photo: Hipotesis2026sep.jpg */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-xl group">
                <img 
                  src="/Hipotesis2026sep.jpg" 
                  alt="Hipótesis Segundo Simulacro Nacional 2026" 
                  className="w-full h-auto object-contain max-h-[260px] sm:max-h-[420px] mx-auto"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('/Hipotesis2026sep.jpg')) {
                      target.src = '/Hipotesis2026sep.jpg';
                    }
                  }}
                />
                <div className="absolute bottom-2 right-2 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-black/80 backdrop-blur-md border border-zinc-800 text-[9px] sm:text-[10px] font-mono text-zinc-300">
                  Hipótesis Oficial de Riesgo
                </div>
              </div>

              {/* Official Convocatoria Text */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md space-y-3 sm:space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>
                  Con el propósito de fomentar la cultura de la Protección Civil en la población y contribuir con el fortalecimiento de las capacidades de reacción de las unidades internas y sus brigadas ante la eventualidad de una emergencia o desastre, el Gobierno de México, a través de la Secretaría de Seguridad y Protección Ciudadana y la Coordinación Nacional de Protección Civil convoca a instituciones públicas y privadas a nivel nacional a participar en el <strong>2do Simulacro Nacional 2026</strong> que se llevará a cabo el próximo <strong>19 de septiembre a las 12:00 horas</strong>.
                </p>

                <p className="text-zinc-400">
                  En consideración de que no todas las Entidades Federativas están expuestas a sufrir los efectos de un sismo, solicitamos atentamente proponer la hipótesis que consideren más adecuada en función del esquema de riesgos identificados para cada inmueble según su ubicación.
                </p>
              </div>

              {/* Two Action Buttons */}
              <div className="pt-2 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                  Plataforma Nacional de Registro SSPC
                </span>

                <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                  {/* Botón 1: Registrar Inmueble con el enlace especificado */}
                  <a
                    id="btn-modal-registrar-inmueble"
                    href="https://simulacronacional.sspc.gob.mx/segundosimulacronacional2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-white hover:bg-zinc-200 text-black font-bold font-mono text-xs transition-colors shadow-sm order-1 sm:order-2"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Registrar Inmueble</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Botón 2: Cerrar */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full sm:w-auto px-5 py-3 min-h-[44px] rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs transition-colors cursor-pointer order-2 sm:order-1"
                  >
                    Cerrar
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
