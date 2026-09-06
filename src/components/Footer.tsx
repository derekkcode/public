import React from 'react';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'inicio' | 'creditos' | 'colaboradores') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="site-footer" className="mt-16 border-t border-zinc-900 bg-black py-8 px-4 sm:px-10 text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div 
          onClick={() => onNavigate('inicio')}
          className="flex items-center gap-2.5 font-mono cursor-pointer hover:text-zinc-300 transition-colors py-1"
        >
          <img src="/smsmx.png" alt="SismosMex Logo" className="w-4 h-4 object-contain" />
          <span className="font-bold text-zinc-300">SismosMex</span>
          <span className="text-zinc-700">|</span>
          <span>DQuake-Project</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
          <button
            onClick={() => onNavigate('inicio')}
            className="hover:text-zinc-300 cursor-pointer transition-colors font-mono py-1 px-1.5"
          >
            Inicio
          </button>
          <span className="text-zinc-800">•</span>
          <button
            onClick={() => onNavigate('creditos')}
            className="hover:text-zinc-300 cursor-pointer transition-colors font-mono py-1 px-1.5"
          >
            Créditos
          </button>
          <span className="text-zinc-800">•</span>
          <button
            onClick={() => onNavigate('colaboradores')}
            className="hover:text-zinc-300 cursor-pointer transition-colors font-mono py-1 px-1.5"
          >
            Colaboradores
          </button>
          <span className="text-zinc-800">•</span>
          <a 
            href="https://monitor.sismosmex.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-300 hover:text-white font-mono flex items-center gap-1 transition-colors py-1 px-1.5"
          >
            <span>monitor.sismosmex.com</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
};
