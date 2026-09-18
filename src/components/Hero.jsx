import React from 'react';

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative w-full bg-azul-marino-dark text-white min-h-[520px] sm:min-h-[620px] lg:h-[780px] flex flex-col justify-between"
    >
      {/* Background 1920x800 DAIM Plant & Technicians with subtle gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/assets/daim-hero-1920x800.jpg" 
          alt="Instalaciones industriales y personal técnico DAIM S.A.S." 
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Deep blue gradient on the left to guarantee 100% text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-azul-marino-dark via-azul-marino-dark/95 md:via-azul-marino-dark/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-azul-marino-dark/90 via-transparent to-azul-marino-dark/40" />
      </div>

      {/* Hero Main Content - A 30px del header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-[30px] pb-6 sm:pb-12 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Eyebrow con guión amarillo de seguridad */}
          <div className="flex items-center space-x-2 text-amarillo-seguridad font-extrabold text-[11px] sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
            <span className="w-4 sm:w-5 h-[2px] bg-amarillo-seguridad inline-block" />
            <span>Ingeniería · Procura · Construcción · Mantenimiento</span>
          </div>

          {/* Titular imponente adaptado a pantallas móviles */}
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-normal text-white tracking-tight leading-[1.15] mb-3 sm:mb-5">
            Diseño Avanzado de<br />
            Ingeniería y Mantenimiento
          </h1>

          {/* Texto de presentación corporativa DAIM */}
          <p className="text-slate-200 text-xs sm:text-base lg:text-lg font-normal leading-relaxed mb-5 sm:mb-8 max-w-xl text-shadow-sm">
            Soluciones integrales bajo la modalidad de <strong>llave en mano</strong> para los sectores eléctrico, petroquímico, alimenticio y de construcción. Entregas puntuales y excelencia técnica garantizada.
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

      {/* 3 Tarjetas Inferiores DAIM - Superpuestas al 50% en desktop y compactas en móviles */}
      <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full translate-y-4 sm:translate-y-8 lg:translate-y-1/2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl overflow-hidden rounded-sm border border-white/10">
          
          {/* Card 1: Azul DAIM - Seguridad y EPP */}
          <div className="bg-azul-daim text-white p-4 sm:p-6 md:p-8 relative overflow-hidden flex flex-col justify-between min-h-[170px] sm:min-h-[230px] md:min-h-[290px] group border-b md:border-b-0 md:border-r border-white/15">
            {/* Imagen de fondo completa sin sombreado */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img 
                src="/assets/card-hero-safety.jpg" 
                alt="Seguridad y equipo EPP DAIM S.A.S." 
                className="w-full h-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="relative z-10 max-w-[240px]">
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest text-white uppercase block mb-0.5 sm:mb-1 drop-shadow-md">
                COMPROMISO DAIM
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-amarillo-seguridad leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Seguridad
              </h3>
            </div>

            <div className="relative z-10 mt-4 sm:mt-8 max-w-[240px]">
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                100% EPP
              </div>
              <p className="text-[11px] sm:text-sm text-amarillo-seguridad font-extrabold mt-0.5 sm:mt-1 leading-snug drop-shadow-md">
                Cero Accidentes & Normas en Obra
              </p>
            </div>
          </div>

          {/* Card 2: Azul Marino DAIM - Ingeniero Técnico Llave en Mano */}
          <div className="bg-azul-marino text-white p-4 sm:p-6 md:p-8 relative overflow-hidden flex flex-col justify-between min-h-[170px] sm:min-h-[230px] md:min-h-[290px] group border-b md:border-b-0 md:border-r border-white/15">
            {/* Imagen de fondo completa con persona desplazada 20px a la derecha */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img 
                src="/assets/card-hero-epc.jpg" 
                alt="Ingeniero técnico en obra DAIM S.A.S." 
                className="w-full h-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="relative z-10 max-w-[195px] sm:max-w-[205px]">
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest text-white uppercase block mb-0.5 sm:mb-1 drop-shadow-md">
                MODALIDAD EPC
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-amarillo-seguridad leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Expertos Llave en Mano
              </h3>
            </div>

            <div className="relative z-10 mt-4 sm:mt-8">
              <a
                href="#nosotros"
                className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white hover:bg-slate-100 text-black font-black rounded-sm text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 border border-white"
              >
                <span className="text-xs sm:text-sm leading-none font-black text-black">+</span>
                <span className="text-black font-black">Nuestro Equipo</span>
              </a>
            </div>
          </div>

          {/* Card 3: Azul Marino Profundo - Planta & Procesos */}
          <div className="bg-azul-marino-dark text-white p-4 sm:p-6 md:p-8 relative overflow-hidden flex flex-col justify-between min-h-[170px] sm:min-h-[230px] md:min-h-[290px] group">
            {/* Imagen de fondo completa sin sombreado */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img 
                src="/assets/card-hero-plant.jpg" 
                alt="Complejo industrial y plantas petroquímicas DAIM S.A.S." 
                className="w-full h-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="relative z-10 max-w-[240px]">
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest text-white uppercase block mb-0.5 sm:mb-1 drop-shadow-md">
                CONFIABILIDAD DAIM
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-amarillo-seguridad leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Plantas & Procesos
              </h3>
            </div>

            <div className="relative z-10 mt-4 sm:mt-8">
              <a
                href="#energia"
                className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white hover:bg-slate-100 text-black font-black rounded-sm text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 border border-white"
              >
                <span className="text-xs sm:text-sm leading-none font-black text-black">+</span>
                <span className="text-black font-black">Capacidad Técnica</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
