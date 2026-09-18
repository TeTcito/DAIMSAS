import React from 'react';
import { 
  Target, 
  Eye, 
  Sun, 
  Zap, 
  Lightbulb, 
  Layers, 
  ArrowRight
} from 'lucide-react';

export default function MissionExperience() {
  const energyItems = [
    {
      title: 'Subestaciones 69 / 13.8 kV',
      desc: 'Diseño, construcción, montaje y mantenimiento integral de subestaciones de media y alta tensión.',
      badge: 'Potencia Industrial',
      icon: Zap,
    },
    {
      title: 'Energía Solar Fotovoltaica',
      desc: 'Sistemas solares on-grid y off-grid a medida para reducción inmediata de costos energéticos.',
      badge: 'Renovables',
      icon: Sun,
    },
    {
      title: 'Iluminación Vial y Perimetral Solar',
      desc: 'Postes solares autosustentables de alto rendimiento para vías, plantas industriales y predios.',
      badge: 'Autonomía Solar',
      icon: Lightbulb,
    },
    {
      title: 'Líneas de Transmisión y Redes',
      desc: 'Tendido, conexionado y mantenimiento de redes aéreas y subterráneas bajo normativa nacional.',
      badge: 'Transmisión',
      icon: Layers,
    },
  ];

  return (
    <div id="experiencia">
      {/* 1. ENERGÍA Y GENERACIÓN */}
      <section id="energia" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200 relative scroll-mt-20 md:scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-l-4 border-celeste-energia pl-3 sm:pl-6 mb-6 sm:mb-12">
            <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-azul-daim block mb-1">
              Capacidad Energética Estratégica
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-azul-marino tracking-tight">
              Energía y Generación
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-1.5 sm:mt-2 max-w-2xl leading-relaxed">
              Diseño, construcción y mantenimiento de subestaciones, líneas de distribución y sistemas solares fotovoltaicos.
            </p>
          </div>

          {/* 4 Cards de Energía (2 columnas en móviles para ahorrar espacio vertical) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-14">
            {energyItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-3.5 sm:p-6 border-t-4 border-azul-daim shadow-sm hover:shadow-md transition-shadow group rounded-b-xl sm:rounded-none"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-azul-marino text-celeste-energia group-hover:bg-azul-daim group-hover:text-white transition-colors rounded sm:rounded-none">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-xs sm:text-base text-azul-marino mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Galería Fotográfica de Evidencia en Campo (3-strip del Brochure) */}
          <div className="bg-azul-marino p-4 sm:p-8 text-white relative shadow-industrial-lg rounded-xl sm:rounded-none">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-celeste-energia block mb-1">
                  Evidencia en Campo · Brochure Oficial
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white">
                  Infraestructura Eléctrica, Solar y Tuberías de Proceso
                </h3>
              </div>
              <a
                href="https://wa.me/593983838317?text=Hola%20DAIM%20S.A.S.,%20quisiera%20cotizar%20un%20proyecto%20de%20energ%C3%ADa%20y%20generaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-amarillo-seguridad text-azul-marino font-bold px-4 py-2 sm:py-2.5 text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors w-fit rounded-sm"
              >
                <span>Consultar Proyecto Energético</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="group relative overflow-hidden border border-white/10 bg-black/30 rounded-lg sm:rounded-none">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/project-solar-workers.jpg" 
                    alt="Técnicos DAIM instalando paneles solares fotovoltaicos" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5 sm:p-3 bg-azul-marino-card border-t border-white/10">
                  <span className="text-[9px] sm:text-[10px] text-celeste-energia font-bold uppercase block">Solar & Ahorro</span>
                  <p className="text-[11px] sm:text-xs font-bold text-white">Instalación y Montaje de Sistemas Solares</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-white/10 bg-black/30 rounded-lg sm:rounded-none">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/project-substation.jpg" 
                    alt="Subestación eléctrica y transformadores de potencia DAIM" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5 sm:p-3 bg-azul-marino-card border-t border-white/10">
                  <span className="text-[9px] sm:text-[10px] text-celeste-energia font-bold uppercase block">Potencia Eléctrica</span>
                  <p className="text-[11px] sm:text-xs font-bold text-white">Subestaciones 69 / 13.8 kV y Transformadores</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-white/10 bg-black/30 rounded-lg sm:rounded-none">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/project-piping.jpg" 
                    alt="Tuberías de proceso y válvulas industriales DAIM" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5 sm:p-3 bg-azul-marino-card border-t border-white/10">
                  <span className="text-[9px] sm:text-[10px] text-celeste-energia font-bold uppercase block">Mecánica de Procesos</span>
                  <p className="text-[11px] sm:text-xs font-bold text-white">Tuberías Industriales y Válvulas de Presión</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MISIÓN, VISIÓN Y OBJETIVOS ESTRATÉGICOS */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-l-4 border-azul-daim pl-3 sm:pl-6 mb-6 sm:mb-12">
            <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-azul-daim block mb-1">
              Filosofía Institucional
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-azul-marino tracking-tight">
              Misión y Visión
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-14">
            {/* Misión */}
            <div className="bg-slate-50 border border-slate-200 sm:border-2 p-5 sm:p-8 relative rounded-xl sm:rounded-none">
              <div className="flex items-center space-x-2.5 sm:space-x-3 text-azul-daim font-black text-xs uppercase tracking-widest mb-2 sm:mb-3">
                <div className="p-1.5 sm:p-2 bg-azul-marino text-white rounded sm:rounded-none">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-celeste-energia" />
                </div>
                <span>Misión</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-azul-marino mb-2 sm:mb-4">
                Crear Valor para la Sociedad
              </h3>
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed italic">
                "Crear valor para la sociedad proporcionando soluciones integrales en ingeniería, construcción y mantenimiento, trabajando en equipo con eficiencia y eficacia."
              </p>
            </div>

            {/* Visión */}
            <div className="bg-slate-50 border border-slate-200 sm:border-2 p-5 sm:p-8 relative rounded-xl sm:rounded-none">
              <div className="flex items-center space-x-2.5 sm:space-x-3 text-azul-daim font-black text-xs uppercase tracking-widest mb-2 sm:mb-3">
                <div className="p-1.5 sm:p-2 bg-azul-marino text-white rounded sm:rounded-none">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-celeste-energia" />
                </div>
                <span>Visión</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-azul-marino mb-2 sm:mb-4">
                Liderazgo y Desarrollo Sostenible
              </h3>
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed italic">
                "Ser la empresa líder en satisfacción del cliente, suministrando soluciones innovadoras y comprometidas en ingeniería, construcción y mantenimiento que contribuyan al desarrollo sostenible."
              </p>
            </div>
          </div>

          {/* 3 Objetivos Clave */}
          <div className="bg-azul-marino p-5 sm:p-8 text-white rounded-xl sm:rounded-none">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-celeste-energia block mb-4 sm:mb-6">
              Nuestros 3 Pilares de Ejecución
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="border-l-2 border-celeste-energia pl-3 sm:pl-4">
                <span className="text-amarillo-seguridad font-black text-[11px] sm:text-xs uppercase tracking-wider block mb-1">
                  01 · Asesoría Oportuna
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Asesoramiento durante la etapa conceptual para optimizar costos de construcción y maximizar utilidades.
                </p>
              </div>

              <div className="border-l-2 border-celeste-energia pl-3 sm:pl-4">
                <span className="text-celeste-energia font-black text-[11px] sm:text-xs uppercase tracking-wider block mb-1">
                  02 · Calidad y Seguridad
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Estándares de calidad y prevención de riesgos en obra, garantizando un resultado seguro en plazos realistas.
                </p>
              </div>

              <div className="border-l-2 border-celeste-energia pl-3 sm:pl-4">
                <span className="text-white font-black text-[11px] sm:text-xs uppercase tracking-wider block mb-1">
                  03 · Actualización Continua
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Conocimiento de vanguardia en ingeniería y construcción con mejoras tecnológicas continuas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
