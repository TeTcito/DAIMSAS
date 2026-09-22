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
      title: 'Energía Solar & Renovables',
      desc: 'Sistemas fotovoltaicos, soluciones híbridas, almacenamiento energético e integración para aplicaciones industriales y comerciales.',
      badge: 'Solar & Almacenamiento',
      icon: Sun,
    },
    {
      title: 'Plantas & Procesos Industriales',
      desc: 'Ingeniería eléctrica, mecánica, piping, automatización, soporte técnico y servicios para instalaciones industriales.',
      badge: 'Plantas & Procesos',
      icon: Layers,
    },
    {
      title: 'Iluminación & Soluciones Urbanas',
      desc: 'Iluminación vial, alumbrado exterior, sistemas solares autónomos y soluciones de eficiencia energética.',
      badge: 'Eficiencia & Vías',
      icon: Lightbulb,
    },
    {
      title: 'Transmisión & Redes Eléctricas',
      desc: 'Líneas de transmisión, distribución, subestaciones, media y baja tensión, protección y control.',
      badge: 'Media & Alta Tensión',
      icon: Zap,
    },
  ];

  return (
    <div id="experiencia">
      {/* 1. ENERGÍA Y GENERACIÓN */}
      <section id="energia" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200 relative scroll-mt-20 md:scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-l-4 border-celeste-energia pl-3 sm:pl-6 mb-6 sm:mb-12">
            <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-azul-daim block mb-1">
              EXPERIENCIA TÉCNICA & ÁREAS DE APLICACIÓN
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-azul-marino tracking-tight">
              Capacidades desarrolladas por nuestro equipo
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-1.5 sm:mt-2 max-w-2xl leading-relaxed text-left">
              Soluciones integrales de ingeniería aplicada, infraestructura energética y soporte técnico industrial especializado.
            </p>
          </div>

          {/* 4 Cards de Energía */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-14">
            {energyItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-4 sm:p-6 border-t-4 border-azul-daim shadow-sm hover:shadow-md transition-shadow group rounded-xl sm:rounded-none flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="p-2 sm:p-3 bg-azul-marino text-celeste-energia group-hover:bg-azul-daim group-hover:text-white transition-colors rounded sm:rounded-none">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-sm sm:text-base text-azul-marino mb-1.5 sm:mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Galería Fotográfica de Evidencia en Campo */}
          <div className="bg-azul-marino p-4 sm:p-8 text-white relative shadow-industrial-lg rounded-xl sm:rounded-none">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-celeste-energia block mb-1">
                  CAPACIDADES TÉCNICAS · EXPERIENCIA APLICADA
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white">
                  Infraestructura Eléctrica, Energía y Sistemas Industriales
                </h3>
              </div>
              <a
                href="https://wa.me/593983838317?text=Hola%20DAIM%20S.A.S.,%20quisiera%20solicitar%20asesor%C3%ADa%20sobre%20proyectos%20de%20infraestructura%20el%C3%A9ctrica%20y%20energ%C3%ADa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-amarillo-seguridad hover:bg-amber-400 text-azul-marino font-black px-4 py-2 sm:py-2.5 text-xs uppercase tracking-wider transition-colors w-fit rounded-sm shadow-md"
              >
                <span>SOLICITAR ASESORÍA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Card 1 */}
              <div className="group relative overflow-hidden border border-white/10 bg-black/30 rounded-lg sm:rounded-none flex flex-col justify-between">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/project-solar-workers.webp" 
                    alt="Sistemas Solares & Soluciones Energéticas DAIM" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4 bg-azul-marino-card border-t border-white/10 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-celeste-energia font-extrabold uppercase tracking-wider block mb-1">
                      ENERGÍA RENOVABLE
                    </span>
                    <h4 className="text-xs sm:text-sm font-black text-white leading-snug mb-1">
                      Sistemas Solares & Soluciones Energéticas
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal text-justify">
                      Diseño, integración e instalación de soluciones fotovoltaicas, sistemas híbridos y almacenamiento energético.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden border border-white/10 bg-black/30 rounded-lg sm:rounded-none flex flex-col justify-between">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/project-substation.webp" 
                    alt="Subestaciones & Sistemas de Potencia DAIM" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4 bg-azul-marino-card border-t border-white/10 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-celeste-energia font-extrabold uppercase tracking-wider block mb-1">
                      INFRAESTRUCTURA ELÉCTRICA
                    </span>
                    <h4 className="text-xs sm:text-sm font-black text-white leading-snug mb-1">
                      Subestaciones & Sistemas de Potencia
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal text-justify">
                      Subestaciones, transformadores, media y alta tensión, protección, control y sistemas auxiliares.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden border border-white/10 bg-black/30 rounded-lg sm:rounded-none flex flex-col justify-between">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/service-turbine-power.webp" 
                    alt="Turbinas & Gestión Integral de Suministro DAIM" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4 bg-azul-marino-card border-t border-white/10 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-celeste-energia font-extrabold uppercase tracking-wider block mb-1">
                      ENERGY & POWER
                    </span>
                    <h4 className="text-xs sm:text-sm font-black text-white leading-snug mb-1">
                      Turbinas & Gestión Integral de Suministro
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal text-justify">
                      Selección técnica, adquisición, logística, traslado y almacenamiento temporal de turbinas para proyectos de generación eléctrica.
                    </p>
                  </div>
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
                Integrar Energía, Ingeniería e Infraestructura
              </h3>
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed italic text-justify">
                "Desarrollar soluciones integrales de energía, ingeniería, infraestructura y O&M, combinando capacidad técnica, seguridad, eficiencia y gestión responsable para generar valor sostenible en cada proyecto."
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
                Crecer como Integrador Técnico y Energético
              </h3>
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed italic text-justify">
                "Consolidar a DAIM como una empresa referente en soluciones de energía, infraestructura eléctrica, ingeniería EPC y servicios industriales, reconocida por su capacidad técnica, confiabilidad, innovación y compromiso con el desarrollo sostenible."
              </p>
            </div>
          </div>

          {/* 3 Principios de Ejecución */}
          <div className="bg-azul-marino p-5 sm:p-8 text-white rounded-xl sm:rounded-none">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-celeste-energia block mb-4 sm:mb-6">
              NUESTROS 3 PRINCIPIOS DE EJECUCIÓN
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="border-l-2 border-celeste-energia pl-3 sm:pl-4">
                <span className="text-white font-black text-[11px] sm:text-xs uppercase tracking-wider block mb-1">
                  01 · INGENIERÍA & PLANIFICACIÓN
                </span>
                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                  Desarrollo técnico desde etapas tempranas para definir soluciones eficientes, optimizar recursos y reducir riesgos durante la ejecución.
                </p>
              </div>

              <div className="border-l-2 border-celeste-energia pl-3 sm:pl-4">
                <span className="text-white font-black text-[11px] sm:text-xs uppercase tracking-wider block mb-1">
                  02 · CALIDAD & SEGURIDAD
                </span>
                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                  Aplicación de criterios técnicos, control de calidad y buenas prácticas de seguridad durante todo el ciclo del proyecto.
                </p>
              </div>

              <div className="border-l-2 border-celeste-energia pl-3 sm:pl-4">
                <span className="text-white font-black text-[11px] sm:text-xs uppercase tracking-wider block mb-1">
                  03 · INNOVACIÓN & MEJORA CONTINUA
                </span>
                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                  Integración de nuevas tecnologías, metodologías y soluciones energéticas para mejorar el desempeño y la confiabilidad de cada proyecto.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
