import React from 'react';
import { 
  Zap, 
  Flame, 
  Wheat, 
  Building2, 
  Quote, 
  CheckCircle,
  HardHat,
  ShieldCheck,
  Ruler,
  Award
} from 'lucide-react';

export default function About() {
  const sectors = [
    { 
      name: 'Eléctrico', 
      icon: Zap, 
      desc: 'Subestaciones, líneas de transmisión, tableros y sistemas solares adaptados.',
      badge: 'Media & Alta Tensión'
    },
    { 
      name: 'Petroquímico', 
      icon: Flame, 
      desc: 'Tuberías de proceso, montajes industriales y mantenimiento especializado.',
      badge: 'Normativa Industrial'
    },
    { 
      name: 'Alimenticio', 
      icon: Wheat, 
      desc: 'Sistemas de refrigeración, galpones y líneas de procesamiento higiénico.',
      badge: 'Agro & Frío'
    },
    { 
      name: 'Construcción', 
      icon: Building2, 
      desc: 'Obras civiles, fundidos, losas de hormigón, estructuras de acero y acabados.',
      badge: 'Infraestructura Civil'
    },
  ];

  const thumbnails = [
    {
      src: '/assets/sector-solar.jpg',
      title: 'Energía Solar y Renovables',
      caption: 'Sistemas fotovoltaicos industriales y comerciales'
    },
    {
      src: '/assets/sector-refinery.jpg',
      title: 'Complejos Industriales',
      caption: 'Plantas petroquímicas e ingeniería de procesos'
    },
    {
      src: '/assets/sector-lighting.jpg',
      title: 'Iluminación Vial Solar',
      caption: 'Luminarias autónomas en corredores estratégicos'
    },
    {
      src: '/assets/sector-transmission.jpg',
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
                src="/assets/about-solid-principles.jpg" 
                alt="Equipo técnico y de supervisión DAIM S.A.S. planificando planos de obra" 
                className="w-full h-full object-cover object-center"
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

              {/* Titular Imponente: "Construidos Sobre Principios Sólidos" */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-azul-marino tracking-tight leading-[1.15] mb-3 sm:mb-5">
                Construidos Sobre<br />
                Principios Sólidos
              </h2>

              {/* Párrafo de Apertura Corporativa */}
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-5 sm:mb-8 max-w-2xl font-normal">
                Operamos con integridad, precisión técnica y responsabilidad absoluta, garantizando que cada solución llave en mano cumpla con las más altas expectativas de rendimiento y seguridad.
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
                      <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                        Operamos con total transparencia y responsabilidad, honrando cada compromiso contractual con los más altos estándares éticos.
                      </p>
                    </div>
                  </div>

                  {/* 2. Seguridad */}
                  <div className="flex items-start space-x-3 sm:space-x-3.5">
                    <div className="p-1.5 sm:p-2 border border-amarillo-seguridad/40 rounded-lg bg-amber-50 text-amber-600 flex-shrink-0 mt-0.5 shadow-sm">
                      <HardHat className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-azul-marino text-sm sm:text-base mb-0.5">
                        Seguridad
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                        Protocolos rigurosos y 100% EPP integrados transversalmente en planificación, procura y faenas en campo.
                      </p>
                    </div>
                  </div>

                  {/* 3. Precisión en Ingeniería */}
                  <div className="flex items-start space-x-3 sm:space-x-3.5">
                    <div className="p-1.5 sm:p-2 border border-celeste-energia/40 rounded-lg bg-sky-50 text-azul-daim flex-shrink-0 mt-0.5 shadow-sm">
                      <Ruler className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-azul-marino text-sm sm:text-base mb-0.5">
                        Precisión en Ingeniería
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                        Entregamos soluciones estructuralmente robustas y montajes electromecánicos confiables mediante ejecución milimétrica.
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

                {/* Sub-columna Derecha: 2 Cajas de Datos (En móvil en 2 columnas para no alargar verticalmente) */}
                <div className="sm:col-span-5 grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                  
                  {/* Caja 1 Azul DAIM: 150+ Proyectos Completados */}
                  <div className="bg-azul-daim text-white p-4 sm:p-7 rounded-xl sm:rounded-2xl shadow-industrial flex flex-col justify-center min-h-[100px] sm:min-h-[140px]">
                    <div className="text-3xl sm:text-5xl font-black text-amarillo-seguridad tracking-tight leading-none mb-1 sm:mb-2">
                      150+
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/95 leading-tight">
                      Proyectos<br />Completados
                    </div>
                  </div>

                  {/* Caja 2 Azul Marino Profundo: Certificaciones & Normas */}
                  <div className="bg-azul-marino text-white p-4 sm:p-7 rounded-xl sm:rounded-2xl shadow-industrial border border-white/10 flex flex-col justify-center min-h-[100px] sm:min-h-[160px]">
                    <Award className="w-5 h-5 sm:w-7 sm:h-7 text-celeste-energia mb-1.5 sm:mb-3 flex-shrink-0" />
                    <h5 className="font-black text-white text-xs sm:text-base leading-tight mb-1">
                      Certificaciones & Normas
                    </h5>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">
                      Normativas ASTM, ASME, NEC, IEEE y seguridad.
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
            <blockquote className="text-xs sm:text-xl lg:text-2xl font-bold leading-snug tracking-tight text-white italic">
              "En nuestra empresa, nos especializamos en el desarrollo de proyectos eléctricos, mecánicos y civiles, asegurando entregas puntuales, cumplimiento presupuestario y excelencia en cada detalle."
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
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
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
