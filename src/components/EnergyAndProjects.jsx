import React, { useState } from 'react';
import { 
  Sun, 
  Zap, 
  Layers, 
  Factory, 
  Building, 
  Snowflake, 
  Fuel, 
  Lightbulb, 
  Home, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function EnergyAndProjects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const energyHighlights = [
    {
      title: 'Subestaciones 69 / 13.8 kV',
      desc: 'Diseño, construcción, montaje electromecánico y mantenimiento preventivo y correctivo para subestaciones de media y alta tensión.',
      badge: 'Potencia Industrial',
      icon: Zap,
    },
    {
      title: 'Energía Solar Fotovoltaica',
      desc: 'Sistemas solares on-grid y off-grid a la medida para industrias, cubiertas de naves y granjas solares, reduciendo costos operativos.',
      badge: 'Renovables & Ahorro',
      icon: Sun,
    },
    {
      title: 'Iluminación Vial y Perimetral Solar',
      desc: 'Soluciones de iluminación autosuficiente de alta luminosidad para corredores viales, complejos industriales y predios aislados.',
      badge: 'Eficiencia Autónoma',
      icon: Lightbulb,
    },
    {
      title: 'Sistemas de Transmisión y Redes',
      desc: 'Tendido, conexionado y mantenimiento de líneas aéreas y subterráneas bajo estrictas normativas del sector eléctrico ecuatoriano.',
      badge: 'Redes de Transmisión',
      icon: Layers,
    },
  ];

  const projectCategories = [
    { id: 'all', label: 'Todos los Sectores' },
    { id: 'industrial', label: 'Industrial & Energía' },
    { id: 'comercial', label: 'Comercial & Científico' },
    { id: 'agro', label: 'Agroindustria & Frío' },
    { id: 'urbanistico', label: 'Urbanístico & Civil' },
  ];

  const projects = [
    {
      category: 'industrial',
      title: 'Subestaciones Eléctricas 69 / 13.8 kV',
      subtitle: 'Infraestructura Energética e Industrial',
      icon: Zap,
      points: [
        'Diseño y construcción civil y electromecánica',
        'Montaje de transformadores de potencia y celdas',
        'Pruebas de aislamiento y comisionamiento',
      ],
    },
    {
      category: 'industrial',
      title: 'Sector Petrolero & Petroquímico',
      subtitle: 'Instalaciones Especializadas de Alto Riesgo',
      icon: Fuel,
      points: [
        'Sistemas eléctricos antideflagrantes (explosion-proof)',
        'Automatización e instrumentación de procesos',
        'Tuberías y líneas de fluido industrial',
      ],
    },
    {
      category: 'agro',
      title: 'Camaroneras & Plantas Empacadoras',
      subtitle: 'Sector Acuícola y Productivo',
      icon: Factory,
      points: [
        'Electrificación de piscinas de cultivo',
        'Estaciones de bombeo de alto caudal',
        'Iluminación perimetral y seguridad técnica',
      ],
    },
    {
      category: 'industrial',
      title: 'Acerías y Complejos Metalmecánicos',
      subtitle: 'Sistemas Industriales Pesados',
      icon: Layers,
      points: [
        'Iluminación industrial de gran altura y perimetral',
        'Montaje de tolvas, transportadores y motoreductores',
        'Mantenimiento de estructuras metálicas portantes',
      ],
    },
    {
      category: 'agro',
      title: 'Patios y Cámaras Frigoríficas',
      subtitle: 'Climatización & Refrigeración',
      icon: Snowflake,
      points: [
        'Patios de contenedores refrigerados para exportación',
        'Sistemas HVAC para galpones de alimentos',
        'Control térmico y monitoreo continuo',
      ],
    },
    {
      category: 'comercial',
      title: 'Centros Científicos & Laboratorios',
      subtitle: 'Construcción Especializada',
      icon: Building,
      points: [
        'Espacios de investigación con estándares higiénicos',
        'Sistemas de respaldo eléctrico ininterrumpido (UPS)',
        'Iluminación decorativa y funcional para retail',
      ],
    },
    {
      category: 'agro',
      title: 'Proyectos Agroindustriales',
      subtitle: 'Galpones de Crianza y Producción',
      icon: Factory,
      points: [
        'Galpones para cría de aves, conejos, bovinos y porcinos',
        'Talleres rurales para actividades productivas',
        'Infraestructura básica y ventilación controlada',
      ],
    },
    {
      category: 'urbanistico',
      title: 'Proyectos Habitacionales & Urbanísticos',
      subtitle: 'Obras Civiles e Infraestructura',
      icon: Home,
      points: [
        'Urbanizaciones completas (desde redes hasta acabados)',
        'Viviendas unifamiliares, departamentos y oficinas',
        'Centros vacacionales y hoteles energéticamente eficientes',
      ],
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div id="energia">
      {/* ============================================================ */}
      {/* SECCIÓN 1: ENERGÍA Y GENERACIÓN                              */}
      {/* ============================================================ */}
      <section className="py-20 bg-slate-100 text-azul-marino relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="border-l-4 border-celeste-energia pl-4 sm:pl-6 mb-12">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-azul-daim block mb-1">
              Capacidad Estratégica
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-azul-marino tracking-tight">
              Energía y Generación
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Soluciones integrales de generación solar fotovoltaica, transformación eléctrica y redes de distribución con máxima eficiencia energética.
            </p>
          </div>

          {/* Grid de Capacidades Energéticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {energyHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 border-t-4 border-azul-daim shadow-sm hover:shadow-md transition-shadow relative group"
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

          {/* Banner Fotográfico de Proyectos Reales (3-strip del Brochure) */}
          <div className="bg-azul-marino p-6 sm:p-8 text-white relative shadow-industrial-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-celeste-energia block mb-1">
                  Proyectos en Campo · Galería de Evidencias
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  Infraestructura Eléctrica, Solar y Tuberías de Proceso
                </h4>
              </div>
              <a
                href="https://wa.me/593983838317"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-amarillo-seguridad text-azul-marino font-bold px-4 py-2 text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors w-fit"
              >
                <span>Consultar Proyecto Energético</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group relative overflow-hidden border border-white/10 bg-black/40">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/project-solar-workers.jpg" 
                    alt="Instalación de paneles solares fotovoltaicos por equipo DAIM" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-azul-marino-card">
                  <span className="text-[10px] text-celeste-energia font-bold uppercase block">Solar & Renovables</span>
                  <p className="text-xs font-bold text-white">Montaje e Integración de Módulos Solares</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-white/10 bg-black/40">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/project-substation.jpg" 
                    alt="Subestación de potencia y transformadores eléctricos DAIM" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-azul-marino-card">
                  <span className="text-[10px] text-celeste-energia font-bold uppercase block">Potencia Eléctrica</span>
                  <p className="text-xs font-bold text-white">Subestaciones 69 / 13.8 kV y Transformadores</p>
                </div>
              </div>

              <div className="group relative overflow-hidden border border-white/10 bg-black/40">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/assets/project-piping.jpg" 
                    alt="Tuberías de proceso y válvulas industriales montadas por DAIM" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-azul-marino-card">
                  <span className="text-[10px] text-celeste-energia font-bold uppercase block">Mecánica & Fluidos</span>
                  <p className="text-xs font-bold text-white">Tuberías de Proceso y Válvulas Industriales</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECCIÓN 2: PROYECTOS Y EXPERIENCIA                           */}
      {/* ============================================================ */}
      <section id="proyectos" className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-azul-daim block mb-1">
                Portafolio Integral
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-azul-marino tracking-tight">
                Experiencia en el Desarrollo de Proyectos
              </h2>
            </div>
            <p className="text-slate-600 text-sm max-w-lg mt-4 md:mt-0 font-normal">
              Contamos con una sólida trayectoria en la planificación, diseño, construcción y mantenimiento de obras de alta complejidad en Ecuador.
            </p>
          </div>

          {/* Filtros de Categoría */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-azul-marino text-white border-azul-marino shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-azul-daim hover:text-azul-daim'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((p, idx) => {
              const Icon = p.icon;
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
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                        {p.subtitle.split(' ')[0]}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-azul-marino mb-1 group-hover:text-azul-daim transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs text-slate-500 mb-4 font-semibold">
                      {p.subtitle}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {p.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs text-slate-600 flex items-start space-x-2">
                          <ChevronRight className="w-3.5 h-3.5 text-azul-daim flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-azul-daim font-bold">
                    <span>Solución Llave en Mano</span>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner de Experiencia Resumida */}
          <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-azul-marino to-azul-marino-dark text-white flex flex-col lg:flex-row items-center justify-between gap-6 border-l-4 border-amarillo-seguridad">
            <div className="space-y-2 text-center lg:text-left">
              <h4 className="text-xl font-black text-white">
                ¿Su proyecto requiere personal calificado o especificaciones especiales?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
                Nuestra experiencia abarca sectores diversos, garantizando soluciones a medida para las necesidades de cada cliente, con un estricto cumplimiento de cronogramas.
              </p>
            </div>
            <a
              href="https://wa.me/593983838317"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center space-x-2 bg-amarillo-seguridad text-azul-marino font-bold px-6 py-3.5 text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-md"
            >
              <span>Presentar Requerimiento Técnico</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
