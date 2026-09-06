import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Activity, FolderGit2, ArrowUpRight } from 'lucide-react';

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  url: string;
  status?: string;
  tag?: string;
}

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  collaboratorName: string;
  projects: ProjectItem[];
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  onClose,
  collaboratorName,
  projects
}) => {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="projects-modal-backdrop"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl shadow-2xl p-4 sm:p-7 space-y-4 sm:space-y-6"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 sm:pb-4 gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-zinc-700 bg-zinc-900 flex items-center justify-center text-white shrink-0">
                  <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">Proyectos de {collaboratorName}</h3>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-mono truncate">Iniciativas y plataformas asociadas</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Cerrar ventana"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List of Projects */}
            <div className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-3.5 sm:p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 backdrop-blur-md transition-all space-y-3 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white shrink-0 mt-0.5">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-bold text-white text-sm">{project.name}</h4>
                          {project.tag && (
                            <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-700 text-zinc-300 bg-zinc-800 shrink-0">
                              {project.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-900/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                    <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500">
                      {project.status || 'Proyecto Activo'}
                    </span>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[38px] rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-semibold font-mono transition-colors shadow-sm w-full sm:w-auto"
                    >
                      <span>Ir al Proyecto</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span className="text-[10px] sm:text-xs">SismosMex · DQuake-Project</span>
              <button
                onClick={onClose}
                className="px-4 py-2 min-h-[36px] rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors cursor-pointer text-xs"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
