import React from 'react';
import { 
  Award, 
  ArrowLeft, 
  ExternalLink, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Code2,
  Edit3,
  Globe,
  Radio,
  Building2,
  Info
} from 'lucide-react';

export interface CreditButton {
  label: string;
  url?: string;
  type?: 'primary' | 'secondary' | 'outline';
  icon?: 'external' | 'globe' | 'code' | 'radio' | 'info';
  onClick?: () => void;
}

export interface CreditMetadataItem {
  label: string;
  value: string;
}

export interface CreditItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Desarrollo' | 'Instrumental' | 'Datos Oficiales' | 'Prevención' | 'Comunidad' | string;
  description: string;
  badge?: string;
  iconType: 'code' | 'cpu' | 'shield' | 'layers' | 'radio' | 'building';
  metadata?: CreditMetadataItem[];
  buttons: CreditButton[];
}

/**
 * =========================================================================
 * LISTA DE CRÉDITOS CONFIGURABLE DESDE EL CÓDIGO
 * =========================================================================
 * Puedes agregar fácilmente nuevos créditos, instituciones o personas
 * directamente en este arreglo. Cada elemento admite una lista de botones
 * tipo 'primary', 'secondary' u 'outline' con enlaces externos o funciones.
 */
const INITIAL_CREDITS_DATA: CreditItem[] = [
  {
    id: 'dquake-project',
    title: 'Dirección y Desarrollo',
    subtitle: 'DQuake-Project · Derekcoode',
    category: 'Desarrollo',
    badge: 'Arquitectura',
    iconType: 'code',
    description: 'Diseño integral de la arquitectura web, procesador de datos en tiempo real y panel sismológico táctico para SismosMex.',
    metadata: [
      { label: 'Proyecto', value: 'DQuake-Project' },
      { label: 'Sistema', value: 'SismosMex Web' },
      { label: 'Objetivo', value: 'Monitoreo Sísmico Abierto' }
    ],
    buttons: [
      {
        label: 'Abrir Monitor',
        url: 'https://monitor.sismosmex.com/',
        type: 'primary',
        icon: 'external'
      },
      {
        label: 'Plataforma Web',
        url: 'https://sismosmex.com',
        type: 'secondary',
        icon: 'globe'
      }
    ]
  },
  {
    id: 'raspberry-shake',
    title: 'Instrumentación Ciudadana',
    subtitle: 'Raspberry Shake Community',
    category: 'Instrumental',
    badge: 'Hardware & Red',
    iconType: 'cpu',
    description: 'Geófonos y sismógrafos IoT de la red ciudadana que proporcionan el flujo continuo de señales sísmicas en territorio nacional.',
    metadata: [
      { label: 'Red Instrumental', value: 'Raspberry Shake Global' },
      { label: 'Sensores', value: 'Geófonos 1D / 3D & Acelerómetros' },
      { label: 'Transmisión', value: 'Protocolo SeedLink en tiempo real' }
    ],
    buttons: [
      {
        label: 'Red Raspberry Shake',
        url: 'https://raspberryshake.org/',
        type: 'primary',
        icon: 'globe'
      },
      {
        label: 'Estaciones en Vivo',
        url: 'https://stationview.raspberryshake.org/',
        type: 'secondary',
        icon: 'radio'
      }
    ]
  },
  {
    id: 'ssn-unam',
    title: 'Servicio Sismológico Nacional',
    subtitle: 'Instituto de Geofísica · UNAM',
    category: 'Datos Oficiales',
    badge: 'Fuente Oficial',
    iconType: 'shield',
    description: 'Referencia sismológica oficial de México. Proporciona localización preliminar y revisada, profundidad y magnitud calculada.',
    metadata: [
      { label: 'Institución', value: 'UNAM (Universidad Nacional)' },
      { label: 'Servicio', value: 'SSN México' },
      { label: 'Cobertura', value: 'Territorio Nacional' }
    ],
    buttons: [
      {
        label: 'Portal Oficial SSN',
        url: 'http://www.ssn.unam.mx/',
        type: 'primary',
        icon: 'external'
      },
      {
        label: 'Catálogo de Sismos',
        url: 'http://www2.ssn.unam.mx:8080/catalogo/',
        type: 'secondary',
        icon: 'globe'
      }
    ]
  },
  {
    id: 'proteccion-civil',
    title: 'Protección Civil & Prevención',
    subtitle: 'SSPC · CNPC México',
    category: 'Prevención',
    badge: 'Normativa',
    iconType: 'building',
    description: 'Cultura de autoprotección, simulacros nacionales y protocolos preventivos para la reducción de riesgos de desastre en México.',
    metadata: [
      { label: 'Coordinación', value: 'CNPC México' },
      { label: 'Marco', value: 'Sistema Nacional de Protección Civil' },
      { label: 'Simulacros', value: '19 de Septiembre' }
    ],
    buttons: [
      {
        label: 'Portal CNPC',
        url: 'https://www.gob.mx/cenapred',
        type: 'primary',
        icon: 'external'
      },
      {
        label: 'Simulacro Nacional',
        url: 'https://simulacronacional.sspc.gob.mx/segundosimulacronacional2026/',
        type: 'secondary',
        icon: 'info'
      }
    ]
  },
  {
    id: 'kotoho7',
    title: 'Kotoho7',
    subtitle: 'Inspiración Técnica & Audiovisual',
    category: 'Inspiración',
    badge: 'Inspiración',
    iconType: 'code',
    description: 'Inspirado en el diseño y los efectos de sonido del monitor de interfaz (Scratch SREV).',
    metadata: [
      { label: 'Proyecto', value: 'Scratch SREV' },
      { label: 'Enfoque', value: 'Monitoreo Sísmico' }
    ],
    buttons: [
      { label: 'Ver GitHub', url: 'https://github.com/kotoho7/', type: 'primary', icon: 'globe' },
      { label: 'X (Twitter)', url: 'https://x.com/kotoho76', type: 'secondary', icon: 'external' },
      { label: 'Monitor Japonés', url: 'https://kotoho7.github.io/scratch-realtime-earthquake-viewer-page/', type: 'secondary', icon: 'external' }
    ]
  }
];

interface CreditsPageProps {
  onBack: () => void;
  onNavigateToCollaborators?: () => void;
}

export const CreditsPage: React.FC<CreditsPageProps> = ({ 
  onBack,
  onNavigateToCollaborators 
}) => {

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'code':
        return <Code2 className="w-4 h-4 text-white" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-white" />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-white" />;
      case 'building':
        return <Building2 className="w-4 h-4 text-white" />;
      case 'radio':
        return <Radio className="w-4 h-4 text-white" />;
      default:
        return <Layers className="w-4 h-4 text-white" />;
    }
  };

  const renderButtonIcon = (icon?: string) => {
    switch (icon) {
      case 'external':
        return <ExternalLink className="w-3.5 h-3.5" />;
      case 'globe':
        return <Globe className="w-3.5 h-3.5" />;
      case 'code':
        return <Code2 className="w-3.5 h-3.5" />;
      case 'radio':
        return <Radio className="w-3.5 h-3.5" />;
      case 'info':
        return <Info className="w-3.5 h-3.5" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5" />;
    }
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
          SismosMex / Créditos
        </div>
      </div>

      {/* Page Header */}
      <div className="space-y-2 sm:space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded border border-zinc-800 bg-zinc-900/60 backdrop-blur-md text-[10px] sm:text-[11px] font-mono tracking-wider text-zinc-300">
          <Award className="w-3.5 h-3.5 text-zinc-300" />
          <span>ATRIBUCIÓN Y RECONOCIMIENTO</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Créditos del Proyecto
        </h1>
        <p className="text-xs sm:text-base text-zinc-400 leading-relaxed">
          Reconocimiento formal a las tecnologías, redes instrumentales y fuentes de datos que hacen posible la operación continua de <span className="text-white font-medium">SismosMex</span>.
        </p>
      </div>

      {/* Credits Grid with Buttons configurable from code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {INITIAL_CREDITS_DATA.map((credit) => (
          <div 
            key={credit.id}
            id={`credit-card-${credit.id}`}
            className="flex flex-col justify-between p-4 sm:p-7 rounded-xl sm:rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md hover:border-zinc-700 transition-all space-y-4 sm:space-y-5"
          >
            {/* Top info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-zinc-700 bg-zinc-900 flex items-center justify-center shrink-0">
                    {renderIcon(credit.iconType)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-base sm:text-lg leading-snug truncate">
                      {credit.title}
                    </h3>
                    <div className="text-xs text-zinc-400 font-mono truncate">
                      {credit.subtitle}
                    </div>
                  </div>
                </div>

                {credit.badge && (
                  <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono border border-zinc-700 bg-zinc-900 text-zinc-300 uppercase tracking-wider shrink-0">
                    {credit.badge}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {credit.description}
              </p>

              {/* Metadata rows */}
              {credit.metadata && credit.metadata.length > 0 && (
                <div className="space-y-1.5 pt-3 border-t border-zinc-900 text-xs">
                  {credit.metadata.map((meta, idx) => (
                    <div key={idx} className="flex justify-between py-0.5 border-b border-zinc-900/60 last:border-0 gap-2">
                      <span className="text-zinc-500 font-mono text-[10px] sm:text-[11px] shrink-0">{meta.label}:</span>
                      <span className="text-zinc-300 font-mono text-[10px] sm:text-[11px] text-right truncate">{meta.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons Row (Configured in Code) */}
            {credit.buttons && credit.buttons.length > 0 && (
              <div className="pt-3 border-t border-zinc-900/80 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2">
                {credit.buttons.map((btn, btnIdx) => {
                  const isPrimary = btn.type === 'primary';
                  const baseClasses = isPrimary
                    ? "bg-white hover:bg-zinc-200 text-black font-semibold shadow-sm"
                    : "border border-zinc-800 hover:border-zinc-600 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white";

                  return (
                    <a
                      key={btnIdx}
                      id={`btn-credit-${credit.id}-${btnIdx}`}
                      href={btn.url || '#'}
                      target={btn.url ? "_blank" : undefined}
                      rel={btn.url ? "noopener noreferrer" : undefined}
                      onClick={btn.onClick}
                      className={`inline-flex items-center justify-center gap-2 px-3.5 py-2.5 min-h-[40px] rounded-xl text-xs font-mono transition-all cursor-pointer w-full sm:w-auto ${baseClasses}`}
                    >
                      <span>{btn.label}</span>
                      {renderButtonIcon(btn.icon)}
                    </a>
                  );
                })}
              </div>
            )}

          </div>
        ))}
      </div>

      {/* CTA Bottom */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950/60">
        <div>
          <div className="text-sm font-bold text-white">¿Deseas consultar a los colaboradores del equipo?</div>
          <div className="text-xs text-zinc-400">Revisa los perfiles de desarrollo y aliados técnicos de la red.</div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
          {onNavigateToCollaborators && (
            <button
              onClick={onNavigateToCollaborators}
              className="px-4 py-2.5 min-h-[44px] rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-xs transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Ver Colaboradores
            </button>
          )}

          <a
            href="https://monitor.sismosmex.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-xs transition-colors shadow-sm w-full sm:w-auto"
          >
            <span>Abrir Monitor</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
};
