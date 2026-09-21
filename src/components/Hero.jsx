import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const heroCards = [
  {
    id: 'power',
    eyebrow: 'ENERGY & POWER',
    eyebrowColor: 'text-amarillo-seguridad',
    title: 'Generación & Soluciones de Potencia',
    desc: 'Turbinas, generadores, BESS, generación modular y soluciones energéticas integradas.',
    btnText: 'VER SOLUCIONES',
    btnClass: 'bg-amarillo-seguridad hover:bg-amber-400 text-azul-marino',
    btnHref: '#servicios',
    image: '/assets/hero-card-power.webp',
    alt: 'Generación y Soluciones de Potencia DAIM',
    bgClass: 'bg-azul-daim',
  },
  {
    id: 'epc',
    eyebrow: 'ENGINEERING & EPC',
    eyebrowColor: 'text-celeste-energia',
    title: 'Ingeniería & Ejecución EPC',
    desc: 'Ingeniería conceptual, básica y de detalle, procura, construcción y puesta en marcha.',
    btnText: 'CAPACIDAD EPC',
    btnClass: 'bg-white hover:bg-slate-100 text-azul-marino',
    btnHref: '#servicios',
    image: '/assets/hero-card-epc.webp',
    alt: 'Ingeniería y Ejecución EPC DAIM',
    bgClass: 'bg-azul-marino',
  },
  {
    id: 'electrical',
    eyebrow: 'ELECTRICAL INFRASTRUCTURE',
    eyebrowColor: 'text-celeste-energia',
    title: 'Infraestructura Eléctrica',
    desc: 'Subestaciones, transmisión, distribución, media y baja tensión, protección y control.',
    btnText: 'VER INFRAESTRUCTURA',
    btnClass: 'bg-white hover:bg-slate-100 text-azul-marino',
    btnHref: '#energia',
    image: '/assets/hero-card-electrical.webp',
    alt: 'Infraestructura Eléctrica DAIM',
    bgClass: 'bg-azul-marino-dark',
  },
  {
    id: 'om',
    eyebrow: 'INDUSTRIAL SERVICES & O&M',
    eyebrowColor: 'text-amarillo-seguridad',
    title: 'Operación, Mantenimiento & Servicios Industriales',
    desc: 'Mantenimiento preventivo, predictivo y correctivo, soporte técnico de planta, modernizaciones y montajes.',
    btnText: 'VER SERVICIOS O&M',
    btnClass: 'bg-amarillo-seguridad hover:bg-amber-400 text-azul-marino',
    btnHref: '#servicios',
    image: '/assets/hero-card-om.webp',
    alt: 'Operación, Mantenimiento y Servicios Industriales DAIM',
    bgClass: 'bg-azul-marino',
  },
];

export default function Hero() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 shadow-2xl rounded-sm border border-white/10">
          {heroCards.map((card, idx) => {
            const isActive = activeCard === idx;
            return (
              <div
                key={card.id}
                onClick={() => toggleCard(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(idx);
                  }
                }}
                className={`text-white p-4 sm:p-5 lg:p-6 relative overflow-hidden flex flex-col justify-end min-h-[200px] sm:min-h-[230px] lg:h-[280px] group border-b border-white/15 last:border-b-0 sm:border-b-0 sm:[&:nth-child(1)]:border-b sm:[&:nth-child(2)]:border-b sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 cursor-pointer select-none transition-all duration-500 ease-out hover:scale-[1.02] hover:z-20 hover:shadow-2xl ${
                  card.bgClass
                } ${
                  isActive ? 'ring-2 ring-inset ring-amarillo-seguridad z-10' : ''
                }`}
              >
                {/* Background Image with Zoom on Hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="eager"
                    decoding="async"
                  />
                  {/* Subtle dynamic overlay on active or hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                      isActive
                        ? 'from-black/95 via-black/80 to-black/40 opacity-95'
                        : 'from-black/90 via-black/50 to-transparent opacity-75 group-hover:opacity-85'
                    }`}
                  />
                </div>

                {/* Content Block: Everything at bottom, smoothly glides up when active */}
                <div className="relative z-10 w-full">
                  {/* Header: Short title (Eyebrow) above Big Title */}
                  <div className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <span
                      className={`text-[10px] font-extrabold tracking-widest ${card.eyebrowColor} uppercase block mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]`}
                    >
                      {card.eyebrow}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                      {card.title}
                    </h3>
                  </div>

                  {/* Expandable message ONLY beneath the title */}
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                      isActive
                        ? 'max-h-36 opacity-100 mt-2.5 mb-2.5 pointer-events-auto'
                        : 'max-h-0 opacity-0 mt-0 mb-0 pointer-events-none'
                    }`}
                  >
                    <p className="text-[11px] sm:text-xs text-slate-200 font-medium leading-snug drop-shadow-[0_1px_5px_rgba(0,0,0,0.95)]">
                      {card.desc}
                    </p>
                  </div>

                  {/* Action button: ALWAYS visible underneath the long title */}
                  <div className="mt-2.5 sm:mt-3">
                    <a
                      href={card.btnHref}
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-flex items-center space-x-1.5 px-3 py-1.5 ${card.btnClass} font-black rounded-sm text-[10px] uppercase tracking-wider transition-all shadow-lg active:scale-95`}
                    >
                      <span>{card.btnText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
