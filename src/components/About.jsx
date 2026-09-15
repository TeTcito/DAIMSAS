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
    <section id="nosotros" className="pt-36 sm:pt-44 lg:pt-52 pb-20 lg:pb-28 bg-white relative overflow-hidden scroll-mt-20 md:scroll-mt-24">
      {/* Background Subtle Geometries */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50 transform rotate-12 -z-0 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================ */}
        {/* BLOQUE PRINCIPAL "SOBRE NOSOTROS" (DISEÑO IDÉNTICO A LA REFERENCIA) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-20">
          
          {/* Columna Izquierda: Fotografía de Supervisión e Ingeniería DAIM */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full min-h-[440px] overflow-hidden rounded-sm shadow-xl border border-slate-100">
              <img 
                src="/assets/about-solid-principles.jpg" 
                alt="Equipo técnico y de supervisión DAIM S.A.S. planificando planos de obra" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>

          {/* Columna Derecha: Eyebrow, Titular, Párrafo, Principios y Métricas */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              
              {/* Eyebrow con guión naranja idéntico a "— ABOUT STRUCT" */}
              <div className="flex items-center space-x-2 text-[#F26522] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-3">
                <span className="w-5 h-[2px] bg-[#F26522] inline-block" />
                <span>Sobre DAIM S.A.S.</span>
              </div>

              {/* Titular Imponente: "Construidos Sobre Principios Sólidos" */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1E33] tracking-tight leading-[1.12] mb-5">
                Construidos Sobre<br />
                Principios Sólidos
              </h2>

              {/* Párrafo de Apertura Corporativa */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-normal">
                Operamos con integridad, precisión técnica y responsabilidad absoluta, garantizando que cada solución llave en mano cumpla con las más altas expectativas de rendimiento, rigurosas normas de seguridad y valor duradero para su industria.
              </p>

              {/* Sub-Grid: 3 Principios (Izq) y 2 Cajas de Métricas (Der) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Sub-columna Izquierda: Integridad, Seguridad, Precisión + Botón Conocer Más */}
                <div className="sm:col-span-7 space-y-6">
                  
                  {/* 1. Integridad */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 border border-[#F26522]/30 rounded-sm bg-orange-50 text-[#F26522] flex-shrink-0 mt-0.5 shadow-sm">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#0B1E33] text-base mb-1">
                        Integridad
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        Operamos con total transparencia y responsabilidad, honrando cada compromiso contractual y presupuestario con los más altos estándares éticos.
                      </p>
                    </div>
                  </div>

                  {/* 2. Seguridad */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 border border-[#F26522]/30 rounded-sm bg-orange-50 text-[#F26522] flex-shrink-0 mt-0.5 shadow-sm">
                      <HardHat className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#0B1E33] text-base mb-1">
                        Seguridad
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        La seguridad es no negociable: protocolos rigurosos y 100% EPP integrados transversalmente en planificación, procura y faenas en campo.
                      </p>
                    </div>
                  </div>

                  {/* 3. Precisión en Ingeniería */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 border border-[#F26522]/30 rounded-sm bg-orange-50 text-[#F26522] flex-shrink-0 mt-0.5 shadow-sm">
                      <Ruler className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#0B1E33] text-base mb-1">
                        Precisión en Ingeniería
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        Entregamos soluciones estructuralmente robustas y montajes electromecánicos confiables mediante ingeniería disciplinada y ejecución milimétrica.
                      </p>
                    </div>
                  </div>

                  {/* Botón "Conocer Más +" Idéntico al Botón Read More de la Referencia */}
                  <div className="pt-2">
                    <a 
                      href="#servicios" 
                      className="inline-flex items-center space-x-2 px-6 py-2.5 bg-white hover:bg-[#F26522] text-[#0B1E33] hover:text-white border-2 border-[#F26522] rounded-sm text-xs font-black uppercase tracking-wider transition-all shadow-sm transform hover:-translate-y-0.5 group"
                    >
                      <span>Conocer Más</span>
                      <span className="text-sm font-black transition-transform group-hover:rotate-90 duration-300">+</span>
                    </a>
                  </div>

                </div>

                {/* Sub-columna Derecha: 2 Cajas de Datos Apiladas (Naranja y Negra) */}
                <div className="sm:col-span-5 space-y-4">
                  
                  {/* Caja 1 Naranja: 150+ Proyectos Completados */}
                  <div className="bg-[#F26522] text-white p-6 sm:p-7 rounded-sm shadow-md flex flex-col justify-center min-h-[140px]">
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none mb-2">
                      150+
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-white/95 leading-tight">
                      Proyectos<br />Completados
                    </div>
                  </div>

                  {/* Caja 2 Negra: Certificaciones & Normas */}
                  <div className="bg-[#0C0C0C] text-white p-6 sm:p-7 rounded-sm shadow-md flex flex-col justify-center min-h-[160px]">
                    <Award className="w-7 h-7 text-[#F26522] mb-3 flex-shrink-0" />
                    <h5 className="font-black text-white text-sm sm:text-base leading-tight mb-1.5">
                      Certificaciones & Normas
                    </h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                      Normativas ASTM, ASME, NEC, IEEE, estándares de seguridad y licenciamiento industrial.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Cita Destacada Oficial de DAIM */}
        <div className="relative mb-16 bg-gradient-to-r from-azul-marino via-azul-marino-card to-azul-marino p-6 sm:p-10 text-white shadow-industrial-lg border-l-8 border-[#F26522]">
          <Quote className="absolute right-6 bottom-4 w-24 h-24 text-white/5 pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <span className="text-[#FFC72C] font-bold uppercase tracking-widest text-xs block mb-3">
              Compromiso y Modalidad Llave en Mano
            </span>
            <blockquote className="text-base sm:text-xl lg:text-2xl font-bold leading-snug tracking-tight text-white italic">
              "En nuestra empresa, nos especializamos en el desarrollo de proyectos eléctricos, mecánicos y civiles, asegurando entregas puntuales, cumplimiento presupuestario y excelencia en cada detalle. Incorporamos la tecnología más avanzada para garantizar soluciones innovadoras y de alta calidad que superen las expectativas de nuestros clientes."
            </blockquote>
            <div className="mt-4 flex items-center space-x-3 text-xs sm:text-sm text-celeste-energia font-semibold">
              <span className="h-0.5 w-6 bg-celeste-energia" />
              <span>DAIM S.A.S. · Excelencia y Seguridad en Cada Proyecto</span>
            </div>
          </div>
        </div>

        {/* 4 Sectores Atendidos (Badges/Chips) */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F26522]">
              Sectores Atendidos
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-azul-marino tracking-tight mt-1">
              Especialización en Sectores de Alta Demanda
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border-2 border-slate-200 hover:border-[#F26522] p-5 transition-all shadow-sm hover:shadow-md group relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 bg-azul-marino text-celeste-energia group-hover:bg-[#F26522] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 bg-slate-100 text-slate-700">
                      {sec.badge}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-base text-azul-marino group-hover:text-[#F26522] transition-colors mb-1">
                    {sec.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Fotografías Originales del Brochure DAIM */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Fotografías Originales del Brochure DAIM
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {thumbnails.map((thumb, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden border border-slate-200 bg-slate-100 shadow-sm"
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
