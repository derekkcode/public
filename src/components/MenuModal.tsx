import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Home, 
  Award, 
  Users, 
  ExternalLink, 
  ArrowUpRight,
  ChevronRight,
  Activity,
  Layers
} from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: 'inicio' | 'creditos' | 'colaboradores';
  onNavigate: (page: 'inicio' | 'creditos' | 'colaboradores') => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate
}) => {
  // Prevent body scroll when menu is open & close on Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  const handleSelect = (page: 'inicio' | 'creditos' | 'colaboradores') => {
    onNavigate(page);
    onClose();
  };

  const navItems = [
    {
      id: 'inicio' as const,
      index: '01',
      title: 'Inicio',
      description: 'Presentación formal del monitor sísmico y red de telemetría',
      icon: Home,
      badge: 'Principal'
    },
    {
      id: 'creditos' as const,
      index: '02',
      title: 'Créditos',
      description: 'Atribución técnica, instrumental, desarrollo y fuentes oficiales',
      icon: Award,
      badge: 'Proyecto'
    },
    {
      id: 'colaboradores' as const,
      index: '03',
      title: 'Colaboradores',
      description: 'Desarrolladores, aliados y red de estaciones participantes',
      icon: Users,
      badge: 'Equipo & Red'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="fullscreen-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Subtle monochrome ambient light inside overlay */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none -z-10" />

          {/* Top Bar inside Fullscreen Menu */}
          <header className="w-full max-w-6xl mx-auto px-4 sm:px-10 py-4 sm:py-6 flex items-center justify-between border-b border-zinc-800/80 gap-3">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center overflow-hidden p-1 shrink-0">
                <img src="/smsmx.png" alt="SismosMex" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-sm sm:text-base font-extrabold tracking-wider text-white font-mono uppercase truncate">
                    Sismos<span className="text-zinc-400">Mex</span>
                  </span>
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded border border-zinc-700 text-zinc-300 bg-zinc-900">
                    MENÚ
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 font-mono truncate">DQuake-Project</p>
              </div>
            </div>

            <button
              id="close-fullscreen-menu"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 min-h-[40px] sm:min-h-[44px] rounded-lg border border-zinc-800 hover:border-zinc-500 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-mono transition-all cursor-pointer shadow-lg shrink-0"
              aria-label="Cerrar Menú"
            >
              <span>Cerrar</span>
              <X className="w-4 h-4 text-zinc-400" />
            </button>
          </header>

          {/* Center Navigation Options */}
          <main className="w-full max-w-4xl mx-auto px-4 sm:px-10 py-6 sm:py-16 flex-1 flex flex-col justify-center space-y-4 sm:space-y-6">
            
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-500 pb-1">
              // SELECCIONE UNA SECCIÓN
            </div>

            <nav className="space-y-2.5 sm:space-y-3">
              {navItems.map((item, idx) => {
                const isCurrent = currentPage === item.id;
                const IconComponent = item.icon;

                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.22 }}
                    onClick={() => handleSelect(item.id)}
                    className={`w-full group text-left p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 ${
                      isCurrent
                        ? 'bg-white text-black border-white shadow-xl shadow-white/5'
                        : 'bg-zinc-950/60 hover:bg-zinc-900/90 text-zinc-300 hover:text-white border-zinc-800/90 hover:border-zinc-600 backdrop-blur-md'
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3 sm:gap-6 min-w-0">
                      <span className={`text-xs font-mono font-bold mt-1 sm:mt-0 ${
                        isCurrent ? 'text-zinc-600' : 'text-zinc-600 group-hover:text-zinc-400'
                      }`}>
                        {item.index}
                      </span>

                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isCurrent ? 'bg-black text-white' : 'bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-white group-hover:border-zinc-700'
                      }`}>
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight">
                            {item.title}
                          </h2>
                          <span className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded border uppercase ${
                            isCurrent
                              ? 'bg-zinc-200 text-black border-zinc-300'
                              : 'bg-zinc-900/80 text-zinc-400 border-zinc-800'
                          }`}>
                            {item.badge}
                          </span>
                        </div>
                        <p className={`text-xs sm:text-sm mt-1 line-clamp-1 ${
                          isCurrent ? 'text-zinc-700' : 'text-zinc-400'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center self-end sm:self-center gap-2 shrink-0">
                      <span className={`text-xs font-mono uppercase font-semibold hidden sm:inline ${
                        isCurrent ? 'text-black' : 'text-zinc-500 group-hover:text-zinc-300'
                      }`}>
                        {isCurrent ? 'Activo' : 'Ir a sección'}
                      </span>
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-transform group-hover:translate-x-1 ${
                        isCurrent ? 'bg-zinc-200 text-black' : 'bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white'
                      }`}>
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </nav>

            {/* Direct Link to Live Monitor */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.22 }}
              className="pt-2 sm:pt-3"
            >
              <a
                href="https://monitor.sismosmex.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full flex items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-700 hover:border-zinc-500 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 hover:from-zinc-850 hover:to-zinc-850 text-white transition-all shadow-lg group"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white shrink-0">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-base font-bold flex items-center gap-1.5 sm:gap-2 truncate">
                      <span className="truncate">Abrir Monitor Sísmico</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>
                    <div className="text-[11px] text-zinc-400 font-mono truncate">
                      monitor.sismosmex.com
                    </div>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black font-semibold text-xs font-mono shrink-0">
                  <span>Acceso En Vivo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            </motion.div>

          </main>

          {/* Bottom Footer inside Fullscreen Menu */}
          <footer className="w-full max-w-6xl mx-auto px-4 sm:px-10 py-4 sm:py-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-zinc-500 font-mono text-center sm:text-left">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
              <span className="text-zinc-400 font-bold">SismosMex</span>
              <span>•</span>
              <span>DQuake-Project</span>
              <span className="hidden xs:inline">•</span>
              <span className="hidden xs:inline">Red de Monitoreo Sísmico Público</span>
            </div>
            <div>
              Presione <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px]">ESC</kbd> o clic en Cerrar para salir
            </div>
          </footer>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
