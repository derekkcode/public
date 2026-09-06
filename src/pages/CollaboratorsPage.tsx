import React, { useState } from 'react';
import { 
  Users, 
  ArrowLeft, 
  ExternalLink, 
  Radio, 
  Code2, 
  ShieldCheck, 
  ChevronRight,
  FolderGit2,
  Terminal,
  Activity,
  PlusCircle
} from 'lucide-react';
import { ProjectsModal, ProjectItem } from '../components/ProjectsModal';

interface CollaboratorBanner {
  id: string;
  name: string;
  handle?: string;
  cardType: 'desarrollador' | 'aliado' | 'colaborador' | 'Partner' | string;
  badgeLabel: string;
  description: string;
  avatarText: string;
  highlight?: boolean;
  projects?: ProjectItem[];
}

/**
 * =========================================================================
 * LISTA DE COLABORADORES (FACILIDAD PARA AGREGAR NUEVAS TARJETAS)
 * =========================================================================
 * Para añadir una nueva tarjeta tipo "desarrollador" o "aliado", simplemente
 * agrega un nuevo objeto a este arreglo con cardType: 'desarrollador'.
 * Ejemplo:
 * {
 *   id: 'nuevo-dev',
 *   name: 'Nombre Apellido',
 *   handle: '@usuario',
 *   cardType: 'desarrollador',
 *   badgeLabel: 'Desarrollador',
 *   description: 'Descripción de sus contribuciones...',
 *   avatarText: 'NA'
 * }
 */
const COLLABORATORS_DATA: CollaboratorBanner[] = [
  {
    id: 'derek-a',
    name: 'Derek A.',
    handle: 'Derekcoode',
    cardType: 'desarrollador',
    badgeLabel: 'Desarrollador Principal',
    description: 'Desarrollador principal de SismosMex y creador de la arquitectura técnica del sistema DQuake-Project.',
    avatarText: 'DA',
    highlight: true,
    projects: [
      {
        id: 'sismosmex-monitor',
        name: 'SismosMex Monitor',
        description: 'Plataforma sismológica web en tiempo real para México.',
        url: 'https://monitor.sismosmex.com/',
        status: 'En Producción',
        tag: 'DQuake'
      }
    ]
  },
  {
    id: 'adrian-h',
    name: 'Adrian H.',
    handle: 'SismosMP',
    cardType: 'Partner',
    badgeLabel: 'Partner',
    description: 'Partner y apoyo en el monitor sísmico.',
    avatarText: 'AH',
    projects: [
      {
        id: 'sismos-mp-app',
        name: 'SismosMP',
        description: 'Receptor sismico.',
        url: 'https://sismosmp.app',
        status: 'Activo',
        tag: 'Red Aliada'
      },
      {
        id: 'sismos-mp-wa-group',
        name: 'SismosMP grupo de WhatsApp',
        description: 'Grupo de WhatsApp publico.',
        url: 'https://chat.whatsapp.com/Ky7EbJvQWpR8q6GwAEcKp5',
        status: 'Activo',
        tag: 'Red Aliada'
      },
      {
        id: 'sismos-mp-difusion',
        name: 'SMP GRUPO DE DIFUSIÓN OFICIAL',
        description: 'Grupo de WhatsApp publico.',
        url: 'https://chat.whatsapp.com/FaM5Pf38cG80i7e2fpc7FA',
        status: 'Activo',
        tag: 'Red Aliada'
      }
    ]
  }
];

interface CollaboratorsPageProps {
  onBack: () => void;
}

export const CollaboratorsPage: React.FC<CollaboratorsPageProps> = ({ onBack }) => {
  const [activeProjectsModal, setActiveProjectsModal] = useState<{
    isOpen: boolean;
    name: string;
    projects: ProjectItem[];
  }>({
    isOpen: false,
    name: '',
    projects: []
  });

  const handleOpenProjects = (name: string, projects?: ProjectItem[]) => {
    if (!projects || projects.length === 0) return;
    setActiveProjectsModal({
      isOpen: true,
      name,
      projects
    });
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      
      {/* Navigation Breadcrumb & Back button */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 gap-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-mono transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al Inicio</span>
        </button>

        <div className="text-[11px] sm:text-xs font-mono text-zinc-500 truncate">
          SismosMex / Colaboradores
        </div>
      </div>

      {/* Page Header */}
      <div className="space-y-2 sm:space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded border border-zinc-800 bg-zinc-900/60 backdrop-blur-md text-[10px] sm:text-[11px] font-mono tracking-wider text-zinc-300">
          <Users className="w-3.5 h-3.5 text-zinc-300" />
          <span>EQUIPO Y RED DE APOYO</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Colaboradores de SismosMex
        </h1>
        <p className="text-xs sm:text-base text-zinc-400 leading-relaxed">
          Equipo de desarrollo, alianzas estratégicas y soporte técnico para la plataforma de monitoreo sísmico.
        </p>
      </div>

      {/* BANNER CARDS LIST */}
      <div className="space-y-4 sm:space-y-6">
        <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500 pb-1">
          // INTEGRANTES DEL PROYECTO
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {COLLABORATORS_DATA.map((collab) => {
            const isDeveloper = collab.cardType === 'desarrollador';

            return (
              <div
                key={collab.id}
                id={`collaborator-card-${collab.id}`}
                className={`relative overflow-hidden rounded-xl sm:rounded-2xl border p-4 sm:p-7 md:p-8 backdrop-blur-xl transition-all duration-200 ${
                  isDeveloper
                    ? 'border-zinc-700 bg-zinc-950/90 shadow-xl shadow-black/50'
                    : 'border-zinc-800 bg-zinc-950/60 hover:border-zinc-700'
                }`}
              >
                {/* Subtle top indicator bar for developer cards */}
                {isDeveloper && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-500 via-white to-zinc-500" />
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
                  
                  {/* Left: Avatar + Details */}
                  <div className="flex items-start gap-3.5 sm:gap-5 min-w-0">
                    {/* Banner Avatar / Monogram */}
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl border flex items-center justify-center font-mono font-bold text-base sm:text-xl shrink-0 ${
                      isDeveloper
                        ? 'bg-zinc-900 border-zinc-600 text-white shadow-inner'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-300'
                    }`}>
                      {isDeveloper ? (
                        <div className="flex flex-col items-center justify-center">
                          <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      ) : (
                        collab.avatarText
                      )}
                    </div>

                    {/* Information */}
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight truncate">
                          {collab.name}
                        </h2>

                        {/* Badge type */}
                        <span className={`text-[9px] sm:text-[10px] font-mono tracking-wide px-2 sm:px-2.5 py-0.5 rounded border uppercase font-semibold shrink-0 ${
                          isDeveloper
                            ? 'bg-white text-black border-white'
                            : 'bg-zinc-900 text-zinc-300 border-zinc-700'
                        }`}>
                          {collab.badgeLabel}
                        </span>

                        {isDeveloper && (
                          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 shrink-0">
                            CORE TEAM
                          </span>
                        )}
                      </div>

                      {/* Subtitle / Handle */}
                      {collab.handle && (
                        <div className="text-xs sm:text-sm font-mono text-zinc-400 flex items-center gap-1.5 truncate">
                          <span className="text-zinc-500">@</span>
                          <span className="text-zinc-300 font-semibold truncate">{collab.handle}</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed pt-0.5">
                        {collab.description}
                      </p>
                    </div>
                  </div>

                  {/* Right / Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 pt-2 md:pt-0 w-full md:w-auto">
                    {collab.projects && collab.projects.length > 0 && (
                      <button
                        id={`btn-projects-${collab.id}`}
                        onClick={() => handleOpenProjects(collab.name, collab.projects)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs transition-all cursor-pointer shadow-sm group w-full sm:w-auto"
                      >
                        <FolderGit2 className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                        <span>Ver proyectos</span>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    )}

                    {isDeveloper && (
                      <a
                        href="https://monitor.sismosmex.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-white hover:bg-zinc-200 text-black font-mono text-xs font-bold transition-all shadow-sm w-full sm:w-auto"
                      >
                        <span>SismosMex</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>

                {/* Banner Footer Line */}
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span>Activo en la red SismosMex</span>
                  </div>
                  <span>ID: {collab.id}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* CTA Bottom: Open Monitor */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950/60">
        <div>
          <div className="text-sm font-bold text-white">Visualiza la red en tiempo real</div>
          <div className="text-xs text-zinc-400">Accede directamente al monitor sísmico público interactivo.</div>
        </div>
        <a
          href="https://monitor.sismosmex.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-xs transition-colors shadow-sm w-full sm:w-auto shrink-0"
        >
          <span>Abrir Monitor</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Projects Modal Popup */}
      <ProjectsModal
        isOpen={activeProjectsModal.isOpen}
        onClose={() => setActiveProjectsModal(prev => ({ ...prev, isOpen: false }))}
        collaboratorName={activeProjectsModal.name}
        projects={activeProjectsModal.projects}
      />

    </div>
  );
};
