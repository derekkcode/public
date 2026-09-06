import React from 'react';
import { Menu, ExternalLink, Activity } from 'lucide-react';

interface NavbarProps {
  onOpenMenu: () => void;
  onNavigateHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenu, onNavigateHome }) => {
  return (
    <header id="site-header" className="sticky top-0 z-40 px-3.5 sm:px-6 md:px-10 py-2.5 sm:py-3.5 backdrop-blur-2xl bg-black/40 border-b border-zinc-800/60 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        
        {/* Brand with smsmx.png */}
        <div 
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer group select-none min-w-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center overflow-hidden p-1 shrink-0 group-hover:border-zinc-500 transition-colors">
            <img 
              src="/smsmx.png" 
              alt="SismosMex Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
                const fallback = e.currentTarget.parentElement?.querySelector('.brand-fallback');
                if (fallback) (fallback as HTMLElement).style.display = 'flex';
              }}
            />
            <div className="brand-fallback hidden w-full h-full items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-sm sm:text-base font-extrabold tracking-wider text-white font-mono uppercase truncate">
                Sismos<span className="text-zinc-400">Mex</span>
              </span>
              <span className="hidden sm:inline-flex text-[10px] font-mono tracking-wider px-2 py-0.5 rounded border border-zinc-700 text-zinc-300 bg-zinc-900/90 whitespace-nowrap">
                MONITOR PÚBLICO
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-zinc-400 font-normal truncate">DQuake-Project</p>
          </div>
        </div>

        {/* Header Controls: Menú & Abrir Monitor */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            id="header-menu-btn"
            onClick={onOpenMenu}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 min-h-[40px] sm:min-h-[44px] rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 hover:text-white font-medium text-xs transition-all duration-150 backdrop-blur-md cursor-pointer"
            aria-label="Abrir Menú"
          >
            <Menu className="w-4 h-4" />
            <span>Menú</span>
          </button>

          <a
            id="header-open-monitor"
            href="https://monitor.sismosmex.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 min-h-[40px] sm:min-h-[44px] rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs transition-colors duration-150 shadow-sm"
          >
            <span className="hidden xs:inline sm:inline">Abrir Monitor</span>
            <span className="xs:hidden sm:hidden">Monitor</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
