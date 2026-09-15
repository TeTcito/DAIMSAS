import React from 'react';

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative w-full bg-[#0B1E33] text-white pt-8 sm:pt-12 lg:pt-14 min-h-[640px] lg:h-[800px] flex flex-col justify-between"
    >
      {/* Background 1920x800 DAIM Plant & Technicians with subtle gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/assets/daim-hero-1920x800.jpg" 
          alt="Instalaciones industriales y personal técnico DAIM S.A.S." 
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Deep blue gradient on the left to guarantee 100% text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33] via-[#0B1E33]/90 md:via-[#0B1E33]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E33]/90 via-transparent to-[#0B1E33]/40" />
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:pb-12 my-auto w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Eyebrow con guión naranja */}
          <div className="flex items-center space-x-2 text-[#F26522] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-4">
            <span className="w-5 h-[2px] bg-[#F26522] inline-block" />
            <span>Ingeniería · Procura · Construcción · Mantenimiento</span>
          </div>

          {/* Titular imponente con peso y escala tipográfica exacta */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Diseño Avanzado de<br />
            Ingeniería y Mantenimiento
          </h1>

          {/* Texto de presentación corporativa DAIM */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-lg font-normal leading-relaxed mb-8 max-w-xl text-shadow-sm">
            Soluciones integrales bajo la modalidad de <strong>llave en mano</strong> para los sectores eléctrico, petroquímico, alimenticio y de construcción. Aseguramos entregas puntuales, cumplimiento presupuestario y adherencia a los más exigentes estándares de la industria.
          </p>

          {/* Dos Botones gemelos */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center bg-[#F26522] hover:bg-[#E05310] text-white font-bold px-8 py-3.5 text-sm rounded-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Servicios
            </a>

            <a
              href="https://wa.me/593983838317"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-[#0B1E33] font-bold px-8 py-3.5 text-sm rounded-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Contáctanos
            </a>
          </div>

        </div>
      </div>

      {/* 3 Tarjetas Inferiores DAIM - Superpuestas exactamente al 50% sobre la primera sección */}
      <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full translate-y-8 sm:translate-y-12 lg:translate-y-1/2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl overflow-hidden rounded-sm">
          
          {/* Card 1: Azul - Seguridad y Normas DAIM con Torres de Transmisión */}
          <div className="bg-[#0284C7] text-white p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[280px] group">
            {/* Torres de transmisión reales del brochure DAIM en el fondo */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-3/5 opacity-40 bg-cover bg-center pointer-events-none transition-transform group-hover:scale-105 duration-500 mix-blend-screen" 
              style={{ backgroundImage: `url('/assets/card-daim-transmission.jpg')` }}
            />
            
            <div className="relative z-10">
              <span className="text-[11px] font-bold tracking-widest text-sky-200 uppercase block mb-1">
                COMPROMISO DAIM
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Seguridad
              </h3>
            </div>

            <div className="relative z-10 mt-10">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                100% EPP
              </div>
              <p className="text-xs sm:text-sm text-sky-100 font-semibold mt-1">
                Cero Accidentes & Normas en Obra
              </p>
            </div>
          </div>

          {/* Card 2: Naranja - Ingeniero DAIM con Casco y Lentes */}
          <div className="bg-[#F26522] text-white p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[280px] group">
            {/* Ingeniero técnico DAIM señalando hacia el contenido */}
            <div className="absolute right-0 bottom-0 w-44 sm:w-52 h-auto pointer-events-none transition-transform group-hover:scale-105 duration-500">
              <img 
                src="/assets/daim-engineer-cutout.png" 
                alt="Ingeniero técnico en obra DAIM S.A.S." 
                className="w-full h-auto max-h-[240px] object-contain object-bottom drop-shadow-md"
              />
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-bold tracking-widest text-orange-200 uppercase block mb-1">
                MODALIDAD EPC
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Expertos Llave en Mano
              </h3>
            </div>

            <div className="relative z-10 mt-10">
              <a
                href="#nosotros"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-[#F26522] border border-white/40 rounded-sm text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span className="text-sm leading-none font-extrabold">+</span>
                <span>Nuestro Equipo</span>
              </a>
            </div>
          </div>

          {/* Card 3: Negro - Planta Petroquímica e Infraestructura DAIM */}
          <div className="bg-[#0C0C0C] text-white p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[280px] group">
            {/* Complejo petroquímico e industrial DAIM del brochure oficial */}
            <div className="absolute right-0 bottom-0 w-48 sm:w-56 h-auto pointer-events-none opacity-85 transition-transform group-hover:scale-105 duration-500">
              <img 
                src="/assets/daim-plant-cutout.png" 
                alt="Complejo industrial y plantas petroquímicas DAIM S.A.S." 
                className="w-full h-auto max-h-[235px] object-contain object-bottom drop-shadow-lg"
              />
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
                CONFIABILIDAD DAIM
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Plantas & Procesos
              </h3>
            </div>

            <div className="relative z-10 mt-10">
              <a
                href="#proyectos"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-white border border-white/30 rounded-sm text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span className="text-sm leading-none font-extrabold">+</span>
                <span>Ver Proyectos</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
