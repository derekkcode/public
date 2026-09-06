import React from 'react';
import { 
  Radio, 
  ExternalLink, 
  ChevronRight, 
  Layers, 
  Wifi, 
  Cpu, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import { SimulacroSection } from '../components/SimulacroSection';

interface HomePageProps {
  onNavigateToCredits: () => void;
  onNavigateToCollaborators: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateToCredits,
  onNavigateToCollaborators
}) => {
  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20 animate-in fade-in duration-200">
      
      {/* Sección Prioritaria: Segundo Simulacro Nacional con imagen, contador y modal */}
      <SimulacroSection />

      {/* Hero Section (Formal Presentation) */}
      <section id="hero" className="space-y-4 sm:space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded border border-zinc-800 bg-zinc-900/60 backdrop-blur-md text-[10px] sm:text-[11px] font-mono tracking-wider text-zinc-300">
          <Radio className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
          <span>SISTEMA PÚBLICO DE INFORMACIÓN SÍSMICA</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Monitoreo Sísmico en Tiempo Real para México
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-normal leading-relaxed">
          SismosMex es una plataforma web pública orientada a la visualización y reporte continuo de la sismicidad en México. Integra el flujo de datos de estaciones ciudadanas de la red <span className="text-white font-semibold">Raspberry Shake</span> con la información oficial del <span className="text-white font-semibold">Servicio Sismológico Nacional (SSN)</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <a
            id="hero-open-monitor-btn"
            href="https://monitor.sismosmex.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[44px] rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-sm transition-all duration-150 shadow-md w-full sm:w-auto"
          >
            <span>Abrir Monitor Sísmico</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="#red-de-estaciones"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[44px] rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 hover:text-white font-medium text-sm transition-all duration-150 backdrop-blur-md w-full sm:w-auto"
          >
            <span>Información de la Red</span>
            <ChevronRight className="w-4 h-4 text-zinc-400" />
          </a>
        </div>
      </section>

      {/* Section: Propósito y Descripción Formal */}
      <section id="sobre-el-proyecto" className="space-y-6">
        <div className="border-b border-zinc-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Propósito de SismosMex
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-950/40 backdrop-blur-md space-y-2.5">
            <div className="w-8 h-8 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center text-white">
              <Radio className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-white text-base">Transmisión Continua</h3>
            <p className="text-zinc-400 leading-relaxed text-xs">
              Recepción constante de señales geofónicas y acelerométricas para la identificación de perturbaciones telúricas en el momento de su ocurrencia.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-950/40 backdrop-blur-md space-y-2.5">
            <div className="w-8 h-8 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center text-white">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-white text-base">Integración de Fuentes</h3>
            <p className="text-zinc-400 leading-relaxed text-xs">
              Combinación de registros de sismología comunitaria con reportes consolidados del Servicio Sismológico Nacional para verificar coordenadas y profundidad.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-950/40 backdrop-blur-md space-y-2.5">
            <div className="w-8 h-8 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center text-white">
              <Wifi className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-white text-base">Información Libre</h3>
            <p className="text-zinc-400 leading-relaxed text-xs">
              Plataforma pública sin costo ni restricciones de acceso para facilitar la consulta técnica y ciudadana sobre la sismicidad en el país.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Red de Estaciones (Raspberry Shake + SSN) */}
      <section id="red-de-estaciones" className="space-y-6">
        <div className="border-b border-zinc-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Red de Estaciones y Fuentes de Datos
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Estructura técnica de los sensores que alimentan la plataforma SismosMex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Raspberry Shake Card */}
          <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-950/50 backdrop-blur-md space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Red Raspberry Shake</h3>
                <div className="text-[11px] font-mono text-zinc-400">Sismología Ciudadana e Instrumental IoT</div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Estaciones sismológicas compactas equipadas con geófonos de velocidad vertical (4.5 Hz) y acelerómetros triaxiales. Operadas por ciudadanos, escuelas e investigadores en territorio mexicano.
            </p>

            <div className="space-y-2 pt-2 border-t border-zinc-900 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                <span>Transmisión en tiempo real con latencia mínima de llegada de onda.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                <span>Detección local del movimiento del suelo y aceleración pico.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                <span>Integración de telemetría a través de protocolos abiertos.</span>
              </div>
            </div>
          </div>

          {/* SSN Card */}
          <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-950/50 backdrop-blur-md space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Servicio Sismológico Nacional (SSN)</h3>
                <div className="text-[11px] font-mono text-zinc-400">Red Sísmica Oficial de México · UNAM</div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Red sismológica institucional a cargo del Instituto de Geofísica de la Universidad Nacional Autónoma de México. Aporta los parámetros científicos oficiales de cada evento registrado.
            </p>

            <div className="space-y-2 pt-2 border-t border-zinc-900 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                <span>Validación formal de magnitud (Magnitud de Momento y Magnitud Local).</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                <span>Determinación precisa de profundidad hipocentral y coordenadas epicentrales.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                <span>Catálogo sísmico nacional histórico y contemporáneo.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section: Capacidades del Monitor */}
      <section id="capacidades" className="space-y-6">
        <div className="border-b border-zinc-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Funcionalidades del Monitor Web
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border border-zinc-800/90 bg-zinc-950/30 backdrop-blur-md space-y-2">
            <div className="text-[10px] font-mono text-zinc-500 uppercase">01 / Detección</div>
            <h4 className="font-bold text-white text-sm">Registro Inmediato</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Visualización de la señal en el momento en que las ondas elásticas alcanzan las estaciones.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-800/90 bg-zinc-950/30 backdrop-blur-md space-y-2">
            <div className="text-[10px] font-mono text-zinc-500 uppercase">02 / Intensidad</div>
            <h4 className="font-bold text-white text-sm">Escala Mercalli</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Estimación de intensidad instrumental preliminar (I a X) asociada a la magnitud y profundidad.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-800/90 bg-zinc-950/30 backdrop-blur-md space-y-2">
            <div className="text-[10px] font-mono text-zinc-500 uppercase">03 / Cronología</div>
            <h4 className="font-bold text-white text-sm">Historial Sísmico</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Relación de los eventos telúricos más recientes reportados en el territorio nacional.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-800/90 bg-zinc-950/30 backdrop-blur-md space-y-2">
            <div className="text-[10px] font-mono text-zinc-500 uppercase">04 / Telemetría</div>
            <h4 className="font-bold text-white text-sm">Estado de Sensores</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Monitoreo continuo de la disponibilidad de enlace y latencia de cada nodo sismológico.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Enlaces directos a Créditos y Colaboradores */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={onNavigateToCredits}
          className="p-5 rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-950/40 hover:bg-zinc-900/60 backdrop-blur-md text-left transition-all cursor-pointer group"
        >
          <div className="text-xs font-mono text-zinc-500 uppercase">Página Oficial</div>
          <div className="text-base font-bold text-white flex items-center justify-between mt-1">
            <span>Créditos del Proyecto</span>
            <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Consulta el equipo, redes instrumentales y tecnologías de SismosMex.
          </p>
        </button>

        <button
          onClick={onNavigateToCollaborators}
          className="p-5 rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-950/40 hover:bg-zinc-900/60 backdrop-blur-md text-left transition-all cursor-pointer group"
        >
          <div className="text-xs font-mono text-zinc-500 uppercase">Página Oficial</div>
          <div className="text-base font-bold text-white flex items-center justify-between mt-1">
            <span>Red de Colaboradores</span>
            <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Revisa las estaciones ciudadanas e instituciones colaboradoras.
          </p>
        </button>
      </section>

      {/* Section: Nota Formal de Seguridad y Descargo */}
      <section id="aviso-formal" className="p-6 rounded-lg border border-zinc-800 bg-zinc-950/60 backdrop-blur-md space-y-3">
        <div className="flex items-center gap-2 text-zinc-300 font-mono text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-zinc-400" />
          <span>AVISO INSTITUCIONAL</span>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          SismosMex es una herramienta de divulgación, investigación y monitoreo técnico instrumental independiente. 
          <strong> No constituye un sistema de alertamiento sísmico anticipado gubernamental</strong> (como SASMEX). 
          Ante la ocurrencia de cualquier sismo, siga siempre los protocolos de Protección Civil de su localidad y atienda las instrucciones de las autoridades oficiales correspondientes.
        </p>
      </section>

      {/* Section: Direct Call to Action to Open the Monitor */}
      <section id="acceso-monitor" className="rounded-xl sm:rounded-2xl border border-zinc-700 bg-zinc-950/90 backdrop-blur-xl p-6 sm:p-12 text-center space-y-4 sm:space-y-5">
        <div className="max-w-xl mx-auto space-y-3">
          <div className="inline-block text-[9px] sm:text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded border border-zinc-800 bg-black text-zinc-400">
            ACCESO DIRECTO A LA PLATAFORMA
          </div>
          
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ingresar al Monitor Sísmico SismosMex
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Consulte la actividad sísmica en tiempo real a través del portal oficial.
          </p>

          <div className="pt-2 sm:pt-3">
            <a
              id="cta-open-monitor-bottom"
              href="https://monitor.sismosmex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 min-h-[44px] rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-sm transition-colors duration-150 shadow-md w-full sm:w-auto"
            >
              <span>Abrir Monitor</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-1">
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 break-all sm:break-normal">
              URL oficial: https://monitor.sismosmex.com/
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
