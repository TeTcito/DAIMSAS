import React from 'react';
import { 
  Zap, 
  Flame, 
  Building2, 
  Quote, 
  CheckCircle,
  HardHat,
  ShieldCheck,
  Ruler,
  Award,
  Sliders
} from 'lucide-react';

export default function About() {
  const sectors = [
    { 
      name: 'Energía & Generación', 
      icon: Zap, 
      desc: 'Generación térmica, renovables, BESS, sistemas de respaldo y soluciones de potencia para proyectos energéticos e industriales.',
      badge: 'Generación & BESS'
    },
    { 
      name: 'Infraestructura Eléctrica', 
      icon: Sliders, 
      desc: 'Subestaciones, transmisión, distribución, media y baja tensión, protección, control y sistemas auxiliares.',
      badge: 'Media & Alta Tensión'
    },
    { 
      name: 'Industria & Procesos', 
      icon: Flame, 
      desc: 'Soluciones eléctricas, mecánicas, instrumentación, automatización, piping, montajes y soporte técnico para instalaciones industriales.',
      badge: 'Montajes & Procesos'
    },
    { 
      name: 'Infraestructura & Construcción', 
      icon: Building2, 
      desc: 'Obras civiles, estructuras, instalaciones electromecánicas y ejecución de infraestructura asociada a proyectos energéticos e industriales.',
      badge: 'Electromecánica & Civil'
    },
  ];

  const thumbnails = [
    {
      src: '/assets/sector-solar.webp',
      title: 'Energía Solar y Renovables',
      caption: 'Sistemas fotovoltaicos industriales y comerciales'
    },
    {
      src: '/assets/sector-refinery.webp',
      title: 'Complejos Industriales',
      caption: 'Plantas petroquímicas e ingeniería de procesos'
    },
    {
      src: '/assets/sector-lighting.webp',
      title: 'Iluminación Vial Solar',
      caption: 'Luminarias autónomas en corredores estratégicos'
    },
    {
      src: '/assets/sector-transmission.webp',
      title: 'Torres y Redes Eléctricas',
      caption: 'Líneas de transmisión y distribución de potencia'
    },
  ];

  return (
    <section id="nosotros" className="py-12 sm:py-20 lg:py-28 bg-white relative overflow-hidden scroll-mt-20 md:scroll-mt-24">
      {/* Background Subtle Geometries */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50 transform rotate-12 -z-0 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================ */}
        {/* BLOQUE PRINCIPAL "SOBRE NOSOTROS" */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch mb-12 sm:mb-20">
          
          {/* Columna Izquierda: Fotografía de Supervisión e Ingeniería DAIM (Regenerada) */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full h-[230px] sm:h-[340px] lg:h-full lg:min-h-[440px] overflow-hidden rounded-2xl shadow-xl border border-slate-100">
              <img 
                src="/assets/about-solid-principles.webp" 
                alt="Equipo técnico y de supervisión DAIM S.A.S. planificando planos de obra" 
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-azul-marino-dark/30 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>

          {/* Columna Derecha: Eyebrow, Titular, Párrafo, Principios y Métricas */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              
              {/* Eyebrow con guión azul DAIM */}
              <div className="flex items-center space-x-2 text-azul-daim font-extrabold text-[11px] sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
                <span className="w-4 sm:w-5 h-[2px] bg-azul-daim inline-block" />
                <span>Sobre DAIM S.A.S.</span>
              </div>

              {/* Titular Imponente: "Experiencia, Ingeniería y Compromiso" */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-azul-marino tracking-tight leading-[1.15] mb-3 sm:mb-5">
                Experiencia, Ingeniería<br />
                y Compromiso
              </h2>

              {/* Párrafo de Apertura Corporativa */}
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-5 sm:mb-8 max-w-2xl font-normal text-justify">
                DAIM integra experiencia profesional, capacidad técnica y una gestión orientada a la seguridad, la calidad y el cumplimiento. Nuestro equipo ha participado en proyectos de ingeniería, energía, infraestructura eléctrica, construcción y mantenimiento en distintos entornos industriales.
              </p>

              {/* Sub-Grid: 3 Principios (Izq) y 2 Cajas de Métricas (Der) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start">
                
                {/* Sub-columna Izquierda: Integridad, Seguridad, Precisión + Botón Conocer Más */}
                <div className="sm:col-span-7 space-y-4 sm:space-y-6">
                  
                  {/* 1. Integridad */}
                  <div className="flex items-start space-x-3 sm:space-x-3.5">
                    <div className="p-1.5 sm:p-2 border border-azul-daim/30 rounded-lg bg-blue-50 text-azul-daim flex-shrink-0 mt-0.5 shadow-sm">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-azul-marino text-sm sm:text-base mb-0.5">
                        Integridad
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal text-justify">
                        Actuamos con transparencia, responsabilidad y compromiso en cada proyecto y relación comercial.
                      </p>
                    </div>
                  </div>

                  {/* 2. Seguridad */}
                  <div className="flex items-start space-x-3 sm:space-x-3.5">
                    <div className="p-1.5 sm:p-2 border border-azul-daim/30 rounded-lg bg-blue-50 text-azul-daim flex-shrink-0 mt-0.5 shadow-sm">
                      <HardHat className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-azul-marino text-sm sm:text-base mb-0.5">
                        Seguridad
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal text-justify">
                        Aplicamos criterios de seguridad, prevención y buenas prácticas durante la planificación y ejecución de nuestras actividades.
                      </p>
                    </div>
                  </div>

                  {/* 3. Precisión en Ingeniería */}
                  <div className="flex items-start space-x-3 sm:space-x-3.5">
                    <div className="p-1.5 sm:p-2 border border-azul-daim/30 rounded-lg bg-blue-50 text-azul-daim flex-shrink-0 mt-0.5 shadow-sm">
                      <Ruler className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-azul-marino text-sm sm:text-base mb-0.5">
                        Precisión en Ingeniería
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal text-justify">
                        Desarrollamos soluciones técnicas basadas en criterios de ingeniería, normativa aplicable y control de calidad.
                      </p>
                    </div>
                  </div>

                  {/* Botón "Conocer Más +" con paleta DAIM */}
                  <div className="pt-1 sm:pt-2">
                    <a 
                      href="#servicios" 
                      className="inline-flex items-center space-x-2 px-5 py-2 sm:px-6 sm:py-2.5 bg-white hover:bg-azul-daim text-azul-marino hover:text-white border-2 border-azul-daim rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all shadow-sm transform hover:-translate-y-0.5 group"
                    >
                      <span>Conocer Servicios</span>
                      <span className="text-sm font-black transition-transform group-hover:rotate-90 duration-300">+</span>
                    </a>
                  </div>

                </div>

                {/* Sub-columna Derecha: Experiencia Técnica y Normas */}
                <div className="sm:col-span-5 flex flex-col gap-3 sm:gap-4">
                  
                  {/* Caja 1 Azul DAIM: Experiencia Profesional & Técnica */}
                  <div className="bg-azul-daim text-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-industrial flex flex-col justify-between">
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-amarillo-seguridad mb-1">
                        EXPERIENCIA PROFESIONAL
                      </div>
                      <h5 className="text-base sm:text-xl font-black text-white tracking-tight leading-snug">
                        EXPERIENCIA TÉCNICA
                      </h5>
                      <p className="text-xs font-bold text-celeste-energia mt-0.5 mb-2">
                        Proyectos desarrollados por nuestro equipo
                      </p>
                      <p className="text-[11px] text-slate-100 leading-relaxed font-normal text-left">
                        Experiencia acumulada en ingeniería, energía, infraestructura eléctrica, construcción y mantenimiento industrial.
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-white/20 text-[9px] sm:text-[10px] font-extrabold text-slate-200 uppercase tracking-wider">
                      Ingeniería · Energía · EPC · O&M
                    </div>
                  </div>

                  {/* Caja 2 Azul DAIM: Excelencia Técnica y Normativa */}
                  <div className="bg-azul-daim text-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-industrial border border-white/20 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-1.5">
                      <ShieldCheck className="w-5 h-5 text-amarillo-seguridad flex-shrink-0" />
                      <h5 className="font-black text-white text-xs sm:text-sm leading-tight">
                        Excelencia Técnica y Normativa
                      </h5>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-100 leading-relaxed font-normal text-left">
                      Ingeniería y ejecución bajo estándares internacionales ASTM, ASME, NEC e IEEE, priorizando la seguridad, la calidad y la confiabilidad en cada proyecto.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Cita Destacada Oficial de DAIM */}
        <div className="relative mb-10 sm:mb-16 bg-gradient-to-r from-azul-marino via-azul-marino-card to-azul-marino p-5 sm:p-10 text-white shadow-industrial-lg border-l-4 sm:border-l-8 border-amarillo-seguridad rounded-xl sm:rounded-2xl">
          <Quote className="absolute right-4 bottom-3 w-16 h-16 sm:w-24 sm:h-24 text-white/5 pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <span className="text-amarillo-seguridad font-bold uppercase tracking-widest text-[10px] sm:text-xs block mb-2 sm:mb-3">
              Compromiso y Modalidad Llave en Mano
            </span>
            <blockquote className="text-xs sm:text-xl lg:text-2xl font-bold leading-snug tracking-tight text-white italic text-justify">
              "Integramos energía, ingeniería e infraestructura para desarrollar soluciones confiables, eficientes y seguras, acompañando cada proyecto desde la planificación y el diseño hasta la ejecución, puesta en marcha y soporte operativo."
            </blockquote>
            <div className="mt-3 sm:mt-4 flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-celeste-energia font-semibold">
              <span className="h-0.5 w-4 sm:w-6 bg-celeste-energia" />
              <span>DAIM S.A.S. · Excelencia y Seguridad en Cada Proyecto</span>
            </div>
          </div>
        </div>

        {/* 4 Sectores Atendidos (Badges/Chips) */}
        <div className="mb-10 sm:mb-16">
          <div className="mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-azul-daim">
              Sectores Atendidos
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-azul-marino tracking-tight mt-1">
              Especialización en Sectores de Alta Demanda
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {sectors.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 sm:border-2 hover:border-azul-daim p-3 sm:p-5 transition-all shadow-sm hover:shadow-md group relative rounded-xl"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="p-2 sm:p-2.5 bg-azul-marino text-celeste-energia group-hover:bg-azul-daim group-hover:text-white transition-colors rounded-lg">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                      {sec.badge}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xs sm:text-base text-azul-marino group-hover:text-azul-daim transition-colors mb-0.5 sm:mb-1">
                    {sec.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-none text-justify">
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Proyectos e Infraestructura en Operación */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-1 bg-azul-daim rounded-full inline-block" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-700">
                Infraestructura & Proyectos en Operación
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline-block">
              Evidencia técnica en terreno
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {thumbnails.map((thumb, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden border border-slate-200 bg-slate-100 shadow-sm rounded-xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={thumb.src} 
                    alt={thumb.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-3 bg-azul-marino text-white border-t-2 border-celeste-energia">
                  <h5 className="font-bold text-xs truncate text-white">
                    {thumb.title}
                  </h5>
                  <p className="text-[11px] text-slate-300 truncate mt-0.5">
                    {thumb.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
