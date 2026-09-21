import React from 'react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full bg-azul-marino-dark text-white min-h-[520px] sm:min-h-[620px] lg:h-[780px] flex flex-col justify-between"
    >
      {/* Background 1920x800 DAIM Plant & Technicians with subtle gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/assets/daim-hero-1920x800.webp" 
          alt="Instalaciones industriales y personal técnico DAIM S.A.S." 
          className="w-full h-full object-cover object-right md:object-center"
          width="1920"
          height="800"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Deep blue gradient on the left to guarantee 100% text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-azul-marino-dark via-azul-marino-dark/95 md:via-azul-marino-dark/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-azul-marino-dark/90 via-transparent to-azul-marino-dark/40" />
      </div>

      {/* Hero Main Content - Con ajuste de 20px adicionales para bajar el texto */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-[30px] pb-6 sm:pb-12 w-full">
        <div className="max-w-2xl lg:max-w-3xl pt-5">
          
          {/* Eyebrow con guión amarillo de seguridad */}
          <div className="flex items-center space-x-2 text-amarillo-seguridad font-extrabold text-[11px] sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
            <span className="w-4 sm:w-5 h-[2px] bg-amarillo-seguridad inline-block" />
            <span>GENERACIÓN · INFRAESTRUCTURA ELÉCTRICA · EPC · O&M</span>
          </div>

          {/* Titular imponente adaptado a pantallas móviles */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.15] mb-3 sm:mb-5">
            ENERGÍA, INGENIERÍA<br />
            E INFRAESTRUCTURA<br />
            <span className="text-amarillo-seguridad">PARA GRANDES PROYECTOS</span>
          </h1>

          {/* Texto de presentación corporativa DAIM */}
          <p className="text-slate-200 text-xs sm:text-base lg:text-lg font-normal leading-relaxed mb-5 sm:mb-8 max-w-2xl text-shadow-sm">
            Integramos energía, ingeniería e infraestructura para desarrollar soluciones de generación, sistemas eléctricos, EPC y O&M, incorporando tecnología, equipos y servicios especializados para proyectos industriales y energéticos.
          </p>

          {/* Dos Botones con colores oficiales DAIM */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center bg-azul-daim hover:bg-azul-daim-hover text-white font-extrabold px-5 sm:px-8 py-2.5 sm:py-3.5 text-xs sm:text-sm rounded-sm shadow-industrial transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Servicios Especializados
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-azul-marino font-extrabold px-5 sm:px-8 py-2.5 sm:py-3.5 text-xs sm:text-sm rounded-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Contáctanos
            </a>
          </div>

        </div>
      </div>

      {/* 4 Tarjetas Inferiores DAIM - Superpuestas al 50% en desktop */}
      <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full translate-y-4 sm:translate-y-8 lg:translate-y-1/2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 shadow-2xl overflow-hidden rounded-sm border border-white/10">
          
          {/* Card 1: ENERGY & POWER */}
          <div className="bg-azul-daim text-white p-4 sm:p-5 lg:p-6 relative overflow-hidden flex flex-col justify-between min-h-[190px] sm:min-h-[230px] lg:min-h-[270px] group border-b sm:border-b-0 border-r border-white/15">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img 
                src="/assets/hero-card-power.webp" 
                alt="Generación y Soluciones de Potencia DAIM" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                loading="eager"
                decoding="async"
              />
            </div>
            
            <div className="relative z-10">
              <span className="text-[10px] font-extrabold tracking-widest text-amarillo-seguridad uppercase block mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                ENERGY & POWER
              </span>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Generación & Soluciones de Potencia
              </h3>
            </div>

            <div className="relative z-10 mt-3 sm:mt-4">
              <p className="text-[11px] sm:text-xs text-white font-medium leading-snug mb-3 drop-shadow-[0_1px_5px_rgba(0,0,0,0.95)]">
                Turbinas, generadores, BESS, generación modular y soluciones energéticas integradas.
              </p>
              <a
                href="#servicios"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-amarillo-seguridad hover:bg-amber-400 text-azul-marino font-black rounded-sm text-[10px] uppercase tracking-wider transition-all shadow-lg active:scale-95"
              >
                <span>VER SOLUCIONES</span>
              </a>
            </div>
          </div>

          {/* Card 2: ENGINEERING & EPC */}
          <div className="bg-azul-marino text-white p-4 sm:p-5 lg:p-6 relative overflow-hidden flex flex-col justify-between min-h-[190px] sm:min-h-[230px] lg:min-h-[270px] group border-b sm:border-b-0 border-r border-white/15">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img 
                src="/assets/hero-card-epc.webp" 
                alt="Ingeniería y Ejecución EPC DAIM" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="relative z-10">
              <span className="text-[10px] font-extrabold tracking-widest text-celeste-energia uppercase block mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                ENGINEERING & EPC
              </span>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Ingeniería & Ejecución EPC
              </h3>
            </div>

            <div className="relative z-10 mt-3 sm:mt-4">
              <p className="text-[11px] sm:text-xs text-white font-medium leading-snug mb-3 drop-shadow-[0_1px_5px_rgba(0,0,0,0.95)]">
                Ingeniería conceptual, básica y de detalle, procura, construcción y puesta en marcha.
              </p>
              <a
                href="#servicios"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-azul-marino font-black rounded-sm text-[10px] uppercase tracking-wider transition-all shadow-lg active:scale-95"
              >
                <span>CAPACIDAD EPC</span>
              </a>
            </div>
          </div>

          {/* Card 3: ELECTRICAL INFRASTRUCTURE */}
          <div className="bg-azul-marino-dark text-white p-4 sm:p-5 lg:p-6 relative overflow-hidden flex flex-col justify-between min-h-[190px] sm:min-h-[230px] lg:min-h-[270px] group border-b sm:border-b-0 border-r border-white/15">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img 
                src="/assets/hero-card-electrical.webp" 
                alt="Infraestructura Eléctrica DAIM" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="relative z-10">
              <span className="text-[10px] font-extrabold tracking-widest text-celeste-energia uppercase block mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                ELECTRICAL INFRASTRUCTURE
              </span>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Infraestructura Eléctrica
              </h3>
            </div>

            <div className="relative z-10 mt-3 sm:mt-4">
              <p className="text-[11px] sm:text-xs text-white font-medium leading-snug mb-3 drop-shadow-[0_1px_5px_rgba(0,0,0,0.95)]">
                Subestaciones, transmisión, distribución, media y baja tensión, protección y control.
              </p>
              <a
                href="#energia"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-azul-marino font-black rounded-sm text-[10px] uppercase tracking-wider transition-all shadow-lg active:scale-95"
              >
                <span>VER INFRAESTRUCTURA</span>
              </a>
            </div>
          </div>

          {/* Card 4: INDUSTRIAL SERVICES & O&M */}
          <div className="bg-azul-marino text-white p-4 sm:p-5 lg:p-6 relative overflow-hidden flex flex-col justify-between min-h-[190px] sm:min-h-[230px] lg:min-h-[270px] group">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img 
                src="/assets/hero-card-om.webp" 
                alt="Operación, Mantenimiento y Servicios Industriales DAIM" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="relative z-10">
              <span className="text-[10px] font-extrabold tracking-widest text-amarillo-seguridad uppercase block mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                INDUSTRIAL SERVICES & O&M
              </span>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Operación, Mantenimiento & Servicios Industriales
              </h3>
            </div>

            <div className="relative z-10 mt-3 sm:mt-4">
              <p className="text-[11px] sm:text-xs text-white font-medium leading-snug mb-3 drop-shadow-[0_1px_5px_rgba(0,0,0,0.95)]">
                Mantenimiento preventivo, predictivo y correctivo, soporte técnico de planta, modernizaciones y montajes.
              </p>
              <a
                href="#servicios"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-amarillo-seguridad hover:bg-amber-400 text-azul-marino font-black rounded-sm text-[10px] uppercase tracking-wider transition-all shadow-lg active:scale-95"
              >
                <span>VER SERVICIOS O&M</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
