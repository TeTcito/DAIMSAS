import React, { useState } from 'react';
import { 
  Target, 
  Eye, 
  Sun, 
  Zap, 
  Lightbulb, 
  Layers, 
  CheckCircle, 
  ArrowRight, 
  Building, 
  Factory, 
  Fuel, 
  Snowflake, 
  GraduationCap, 
  Trophy, 
  Home,
  ChevronRight
} from 'lucide-react';

export default function MissionExperience() {
  const [activeProjectTab, setActiveProjectTab] = useState('all');

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

  const experienceCategories = [
    { id: 'all', label: 'Todos los Sectores' },
    { id: 'energia-industrial', label: 'Energía & Industrial' },
    { id: 'comercial-cientifico', label: 'Comercial & Científico' },
    { id: 'agro-frio', label: 'Agroindustria & Frío' },
    { id: 'civil-comunitario', label: 'Civil, Urbanístico & Comunitario' },
  ];

  const experienceList = [
    {
      category: 'energia-industrial',
      title: 'Infraestructura Energética e Industrial',
      icon: Zap,
      badge: 'Potencia & Petróleo',
      items: [
        'Diseño, construcción y mantenimiento de subestaciones 69 / 13.8 kV',
        'Proyectos en sector petrolero: instalaciones eléctricas hasta automatización',
        'Camaroneras: piscinas de cultivo, estaciones de bombeo y empacadoras',
        'Acerías y sistemas de iluminación industrial y perimetral',
        'Patios de contenedores refrigerados para transporte y almacenaje',
      ],
    },
    {
      category: 'comercial-cientifico',
      title: 'Construcciones Comerciales y Científicas',
      icon: Building,
      badge: 'Laboratorios & Retail',
      items: [
        'Iluminación vial, perimetral y decorativa en centros urbanos',
        'Centros de estudios científicos, laboratorios e investigación',
        'Centros de almacenamiento y edificios con aislamiento térmico',
      ],
    },
    {
      category: 'agro-frio',
      title: 'Sistemas de Climatización y Refrigeración',
      icon: Snowflake,
      badge: 'HVAC & Frío',
      items: [
        'Instalación y mantenimiento de aire acondicionado industrial y comercial',
        'Soluciones avanzadas para galpones de almacenamiento de alimentos',
        'Monitoreo térmico y conservación de cadena de frío',
      ],
    },
    {
      category: 'agro-frio',
      title: 'Proyectos Agroindustriales',
      icon: Factory,
      badge: 'Producción Agropecuaria',
      items: [
        'Corrales y galpones para cría de pollos, conejos, bovinos y porcinos',
        'Talleres rurales para actividades productivas en comunidades agrícolas',
        'Ventilación forzada y control de ambiente interno',
      ],
    },
    {
      category: 'civil-comunitario',
      title: 'Proyectos Habitacionales y Urbanísticos',
      icon: Home,
      badge: 'Urbanismo & Vivienda',
      items: [
        'Urbanizaciones completas: desde redes de servicios hasta acabados',
        'Viviendas unifamiliares, multifamiliares, departamentos y oficinas',
        'Centros vacacionales y hoteles con enfoque en eficiencia energética',
      ],
    },
    {
      category: 'civil-comunitario',
      title: 'Infraestructura Educativa y Comunitaria',
      icon: GraduationCap,
      badge: 'Comunidad & Cultura',
      items: [
        'Construcción y mantenimiento de escuelas, bibliotecas y centros culturales',
        'Edificaciones religiosas diseñadas para actividades comunitarias',
        'Garantía estructural y espacios seguros para la sociedad',
      ],
    },
    {
      category: 'civil-comunitario',
      title: 'Espacios Deportivos y de Recreación',
      icon: Trophy,
      badge: 'Recreación & Deporte',
      items: [
        'Canchas deportivas, estadios y centros recreativos',
        'Infraestructura para aeropuertos y terminales de transporte',
        'Iluminación de alta potencia para eventos deportivos',
      ],
    },
  ];

  const filteredExperience = activeProjectTab === 'all'
    ? experienceList
    : experienceList.filter(item => item.category === activeProjectTab);

  return (
    <div id="experiencia">
      {/* 1. ENERGÍA Y GENERACIÓN */}
      <section id="energia" className="py-20 bg-slate-50 border-t border-slate-200 relative scroll-mt-20 md:scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-l-4 border-celeste-energia pl-4 sm:pl-6 mb-12">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-azul-daim block mb-1">
              Capacidad Energética Estratégica
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-azul-marino tracking-tight">
              Energía y Generación
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Diseño, construcción y mantenimiento de subestaciones, líneas de distribución y sistemas solares fotovoltaicos para el desarrollo productivo.
            </p>
          </div>

          {/* 4 Cards de Energía */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {energyItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 border-t-4 border-azul-daim shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-azul-marino text-celeste-energia group-hover:bg-azul-daim group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-azul-marino mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Galería Fotográfica de Evidencia en Campo (3-strip del Brochure) */}
          <div className="bg-azul-marino p-6 sm:p-8 text-white relative shadow-industrial-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-celeste-energia block mb-1">
                  Evidencia en Campo · Brochure Oficial
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Infraestructura Eléctrica, Solar y Tuberías de Proceso
                </h3>
              </div>
              <a
                href="https://wa.me/593983838317?text=Hola%20DAIM%20S.A.S.,%20quisiera%20cotizar%20un%20proyecto%20de%20energ%C3%ADa%20y%20generaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-amarillo-seguridad text-azul-marino font-bold px-4 py-2.5 text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors w-fit"
              >
                <span>Consultar Proyecto Energético</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group relative overflow-hidden border border-white/10 bg-black/30">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/project-solar-workers.jpg" 
                    alt="Técnicos DAIM instalando paneles solares fotovoltaicos" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-azul-marino-card border-t border-white/10">
                  <span className="text-[10px] text-celeste-energia font-bold uppercase block">Solar & Ahorro</span>
                  <p className="text-xs font-bold text-white">Instalación y Montaje de Sistemas Solares</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-white/10 bg-black/30">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/project-substation.jpg" 
                    alt="Subestación eléctrica y transformadores de potencia DAIM" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-azul-marino-card border-t border-white/10">
                  <span className="text-[10px] text-celeste-energia font-bold uppercase block">Potencia Eléctrica</span>
                  <p className="text-xs font-bold text-white">Subestaciones 69 / 13.8 kV y Transformadores</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-white/10 bg-black/30">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/project-piping.jpg" 
                    alt="Tuberías de proceso y válvulas industriales DAIM" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-azul-marino-card border-t border-white/10">
                  <span className="text-[10px] text-celeste-energia font-bold uppercase block">Mecánica de Procesos</span>
                  <p className="text-xs font-bold text-white">Tuberías Industriales y Válvulas de Presión</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MISIÓN, VISIÓN Y OBJETIVOS ESTRATÉGICOS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-l-4 border-azul-daim pl-4 sm:pl-6 mb-12">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-azul-daim block mb-1">
              Filosofía Institucional
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-azul-marino tracking-tight">
              Misión y Visión
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            {/* Misión */}
            <div className="bg-slate-50 border-2 border-slate-200 p-8 relative">
              <div className="flex items-center space-x-3 text-azul-daim font-black text-xs uppercase tracking-widest mb-3">
                <div className="p-2 bg-azul-marino text-white">
                  <Target className="w-5 h-5 text-celeste-energia" />
                </div>
                <span>Misión</span>
              </div>
              <h3 className="text-2xl font-black text-azul-marino mb-4">
                Crear Valor para la Sociedad
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                "Crear valor para la sociedad proporcionando soluciones integrales en ingeniería, construcción y mantenimiento, trabajando en equipo con eficiencia y eficacia, orientados al logro y reconociendo la excelencia de nuestros empleados."
              </p>
            </div>

            {/* Visión */}
            <div className="bg-slate-50 border-2 border-slate-200 p-8 relative">
              <div className="flex items-center space-x-3 text-azul-daim font-black text-xs uppercase tracking-widest mb-3">
                <div className="p-2 bg-azul-marino text-white">
                  <Eye className="w-5 h-5 text-celeste-energia" />
                </div>
                <span>Visión</span>
              </div>
              <h3 className="text-2xl font-black text-azul-marino mb-4">
                Liderazgo y Desarrollo Sostenible
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                "Ser la empresa líder en satisfacción del cliente, suministrando soluciones innovadoras y comprometidas en ingeniería, construcción y mantenimiento. Nos distinguimos por nuestra capacidad de adaptación y mejora continua, garantizando resultados que superen las expectativas y contribuyan al desarrollo sostenible de las comunidades en las que operamos."
              </p>
            </div>
          </div>

          {/* 3 Objetivos Clave */}
          <div className="bg-azul-marino p-8 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-celeste-energia block mb-6">
              Nuestros 3 Pilares de Ejecución
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-2 border-celeste-energia pl-4">
                <span className="text-amarillo-seguridad font-black text-xs uppercase tracking-wider block mb-1">
                  01 · Asesoría Oportuna
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Asesoramiento durante la etapa conceptual, alineando requerimientos comerciales con el diseño técnico para optimizar costos de construcción y maximizar utilidades.
                </p>
              </div>

              <div className="border-l-2 border-celeste-energia pl-4">
                <span className="text-celeste-energia font-black text-xs uppercase tracking-wider block mb-1">
                  02 · Calidad y Seguridad
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Integración de estándares de calidad con los requerimientos de prevención de riesgos en obra, garantizando un resultado seguro entregado en plazos realistas.
                </p>
              </div>

              <div className="border-l-2 border-celeste-energia pl-4">
                <span className="text-white font-black text-xs uppercase tracking-wider block mb-1">
                  03 · Actualización Continua
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Conocimiento de vanguardia en el ámbito de la ingeniería y construcción, incorporando mejoras tecnológicas que aseguren soluciones de alta eficiencia.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROYECTOS Y EXPERIENCIA */}
      <section id="proyectos" className="py-20 lg:py-28 bg-white relative scroll-mt-20 md:scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-azul-daim block mb-1">
                Portafolio Integral & Sectores de Actuación
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-azul-marino tracking-tight">
                Experiencia en el Desarrollo de Proyectos
              </h2>
            </div>
            <p className="text-slate-600 text-sm max-w-lg mt-4 md:mt-0">
              Contamos con una sólida experiencia en la planificación, diseño, construcción y mantenimiento de obras especializadas en Ecuador.
            </p>
          </div>

          {/* Filtros de Categoría */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {experienceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveProjectTab(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeProjectTab === cat.id
                    ? 'bg-azul-marino text-white border-azul-marino shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-azul-daim hover:text-azul-daim'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid de Experiencia */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperience.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between hover:border-azul-daim transition-all hover:bg-white hover:shadow-md group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-azul-marino text-white flex items-center justify-center group-hover:bg-azul-daim transition-colors">
                        <Icon className="w-5 h-5 text-celeste-energia group-hover:text-white" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 bg-slate-200 text-slate-700">
                        {exp.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-azul-marino mb-3 group-hover:text-azul-daim transition-colors">
                      {exp.title}
                    </h3>

                    <ul className="space-y-2 mb-6">
                      {exp.items.map((it, iIdx) => (
                        <li key={iIdx} className="text-xs text-slate-600 flex items-start space-x-2">
                          <ChevronRight className="w-3.5 h-3.5 text-azul-daim flex-shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-azul-daim font-bold">
                    <span>Modalidad Llave en Mano</span>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner de Cierre de Portafolio */}
          <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-azul-marino via-azul-marino-card to-azul-marino text-white flex flex-col lg:flex-row items-center justify-between gap-6 border-l-4 border-amarillo-seguridad shadow-industrial">
            <div>
              <h3 className="text-xl font-black text-white mb-2">
                ¿Tu empresa necesita una solución técnica personalizada?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
                Acompañamos a nuestros clientes en todas las etapas del proyecto, desde la concepción hasta la operación y el mantenimiento, garantizando seguridad, cumplimiento de plazos y presupuestos.
              </p>
            </div>
            <a
              href="https://wa.me/593983838317?text=Hola%20DAIM%20S.A.S.,%20tengo%20un%20proyecto%20especial%20y%20deseo%20asesor%C3%ADa."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center space-x-2 bg-amarillo-seguridad text-azul-marino font-bold px-6 py-3.5 text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-md"
            >
              <span>Presentar Requerimiento</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
