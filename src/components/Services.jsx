import React from 'react';
import { 
  Zap, 
  Sliders, 
  Lightbulb, 
  Layers, 
  Wrench, 
  Truck, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

export default function Services() {
  const servicesList = [
    {
      id: 'electricidad',
      title: 'Instalaciones Eléctricas',
      subtitle: 'Media & Alta Tensión',
      desc: 'Montaje, conexión y puesta en marcha de redes de media y alta tensión, transformadores de potencia, acometidas industriales y bancos de condensadores.',
      image: '/assets/service-card-electrical.jpg',
      icon: Zap,
      badge: 'Media & Alta Tensión'
    },
    {
      id: 'automatizacion',
      title: 'Tableros & Automatización',
      subtitle: 'Control Industrial & PLC',
      desc: 'Diseño, ensamble estructurado, cableado y modernización de tableros de control y automatización con integración de PLC, HMI y variadores de frecuencia.',
      image: '/assets/service-card-wiring.jpg',
      icon: Sliders,
      badge: 'Automatización & Control'
    },
    {
      id: 'energia-solar',
      title: 'Energía Solar & Iluminación',
      subtitle: 'Sistemas Fotovoltaicos & LED',
      desc: 'Soluciones fotovoltaicas industriales llave en mano, sistemas solares adaptados para autoconsumo continuo y luminarias viales autónomas.',
      image: '/assets/service-card-lighting.jpg',
      icon: Lightbulb,
      badge: 'Energía Renovable'
    },
    {
      id: 'metalmecanica',
      title: 'Metalmecánica & Piping',
      subtitle: 'Tuberías de Proceso & Acero',
      desc: 'Fabricación y montaje de tuberías de proceso bajo códigos ASME/ASTM, tolvas, esclusas, transportadores mecánicos y estructuras de acero.',
      image: '/assets/service-card-panel.jpg',
      icon: Layers,
      badge: 'Normativas ASME / ASTM'
    },
    {
      id: 'mantenimiento',
      title: 'Mantenimiento Industrial',
      subtitle: 'Predictivo, Preventivo & Correctivo',
      desc: 'Gestión integral de mantenimiento industrial con técnicas predictivas avanzadas de vibraciones, alineación láser y overhaul de maquinaria crítica.',
      image: '/assets/service-card-maintenance.jpg',
      icon: Wrench,
      badge: 'Monitoreo Predictivo'
    },
    {
      id: 'civil-emergencias',
      title: 'Obras Civiles & Paradas',
      subtitle: 'Infraestructura & Soporte 24/7',
      desc: 'Obras civiles pesadas, fundidos de hormigón armado, pisos industriales de alta resistencia, guardavías y cuadrillas de respuesta rápida en paradas de planta.',
      image: '/assets/service-card-emergency.jpg',
      icon: Truck,
      badge: 'Respuesta Rápida 24/7'
    },
  ];

  return (
    <section 
      id="servicios" 
      className="pt-16 sm:pt-28 md:pt-44 lg:pt-52 pb-12 sm:pb-20 lg:pb-28 text-white relative overflow-hidden scroll-mt-16 md:scroll-mt-20 bg-azul-marino-dark"
    >
      {/* Background Image: Complejo industrial y subestación al atardecer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/assets/services-industrial-bg.jpg" 
          alt="Infraestructura industrial y eléctrica DAIM S.A.S." 
          className="w-full h-full object-cover object-center"
        />
        {/* Degradado azul marino corporativo para máxima elegancia y legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-azul-marino-dark/95 via-azul-marino/90 to-azul-marino-dark/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-azul-daim/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amarillo-seguridad/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-6">
        
        {/* Encabezado de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 pb-4 sm:pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 text-amarillo-seguridad font-extrabold text-[11px] sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
              <span className="w-4 sm:w-5 h-[2px] bg-amarillo-seguridad inline-block" />
              <span>Capacidades Técnicas y Montajes EPC</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Nuestros Servicios Especializados
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-base max-w-xl mt-2 sm:mt-4 md:mt-0 font-normal leading-relaxed">
            Soluciones integrales de ingeniería eléctrica, mecánica, civil y renovables llave en mano.
          </p>
        </div>

        {/* Grilla de 6 Tarjetas con Imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {servicesList.map((srv) => {
            const Icon = srv.icon;
            const whatsappUrl = `https://wa.me/593983838317?text=${encodeURIComponent(`Hola DAIM S.A.S., me interesa cotizar y consultar detalles sobre el servicio de ${srv.title}.`)}`;

            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col justify-between group border border-slate-100"
              >
                {/* Contenedor Superior: Fotografía del Servicio */}
                <div className="relative h-36 sm:h-48 md:h-60 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Sutil viñeta inferior para contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Icono Circular Flotante - 100% visible sin recorte */}
                <div className="relative -mt-6 ml-4 sm:-mt-7 sm:ml-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl border-2 border-slate-100 flex items-center justify-center z-10 group-hover:bg-azul-daim group-hover:border-azul-daim transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-azul-daim group-hover:text-white transition-colors" />
                </div>

                {/* Contenedor Inferior: Textos y Cuadro de Cotización */}
                <div className="p-4 sm:p-6 pt-2 sm:pt-3 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Título del Servicio */}
                    <h3 className="text-lg sm:text-xl font-black text-azul-marino tracking-tight mb-1 sm:mb-2 group-hover:text-azul-daim transition-colors">
                      {srv.title}
                    </h3>

                    {/* Descripción concisa adaptada en móviles con line-clamp */}
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {srv.desc}
                    </p>
                  </div>

                  {/* Cuadro de Cotización */}
                  <div className="mt-3 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 flex flex-col gap-2 sm:gap-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-[11px] font-extrabold text-azul-daim bg-azul-daim/10 px-2 sm:px-2.5 py-0.5 rounded uppercase tracking-wider">
                        {srv.badge}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-slate-400">
                        Atención directa
                      </span>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-azul-daim hover:bg-azul-daim-hover text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform active:scale-95 group/btn"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-white" />
                      <span>Solicitar Cotización</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Declaración de Calidad y Compromiso Operativo */}
        <div className="mt-8 sm:mt-14 p-4 sm:p-8 bg-azul-marino/90 border-l-4 border-amarillo-seguridad rounded-xl sm:rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 shadow-2xl border border-white/10">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="p-2 sm:p-3 bg-amarillo-seguridad/20 border border-amarillo-seguridad/40 rounded-sm text-amarillo-seguridad flex-shrink-0">
              <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-white uppercase tracking-wider mb-0.5 sm:mb-1">
                Garantía de Continuidad Operativa
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Metodologías de trabajo seguro para minimizar paradas imprevistas y maximizar la vida útil de sus activos.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/593983838317"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center space-x-2 bg-amarillo-seguridad hover:bg-amarillo-seguridad-hover text-azul-marino font-black px-4 sm:px-6 py-2.5 sm:py-3 text-xs uppercase tracking-wider rounded-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Hablar con un Ingeniero</span>
          </a>
        </div>

      </div>
    </section>
  );
}
