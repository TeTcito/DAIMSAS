import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-azul-marino-dark text-white relative overflow-hidden">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-azul-marino via-azul-marino-card to-azul-marino border-b border-white/10 py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amarillo-seguridad block mb-2">
              Contacto Directo & Cotizaciones
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed mb-8">
              Estamos listos para ayudarte a hacerlo realidad. Nuestro equipo técnico evaluará tu requerimiento de ingeniería, construcción o mantenimiento sin demoras.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/593983838317?text=Hola%20DAIM%20S.A.S.,%20tengo%20un%20proyecto%20en%20mente%20y%20deseo%20asesor%C3%ADa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-amarillo-seguridad hover:bg-amarillo-seguridad-hover text-azul-marino font-extrabold px-8 py-4 text-sm sm:text-base uppercase tracking-wider shadow-industrial transition-all transform hover:-translate-y-0.5 border-b-4 border-amber-600"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Escríbenos por WhatsApp</span>
              </a>

              <a
                href="mailto:jesusmendez.dai@gmail.com?subject=Consulta%20de%20Proyecto%20-%20DAIM%20S.A.S."
                className="inline-flex items-center justify-center space-x-2.5 bg-azul-marino/80 hover:bg-azul-daim text-white font-semibold px-8 py-4 text-sm sm:text-base border border-slate-300/30 hover:border-celeste-energia transition-all"
              >
                <Mail className="w-5 h-5 text-celeste-energia" />
                <span>Enviar un Correo</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Channels & Details */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: WhatsApp Directo */}
          <div className="bg-azul-marino/60 border border-white/10 p-6 sm:p-8 relative hover:border-amarillo-seguridad transition-all group">
            <div className="w-12 h-12 bg-amarillo-seguridad/10 border border-amarillo-seguridad/30 flex items-center justify-center text-amarillo-seguridad mb-5 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Línea Directa / WhatsApp
            </span>
            <h3 className="text-xl font-black text-white mb-2">
              +593 983 838 317
            </h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Atención inmediata de proyectos, consultas técnicas y requerimientos de planta.
            </p>
            <a
              href="https://wa.me/593983838317"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-extrabold text-amarillo-seguridad hover:text-white uppercase tracking-wider"
            >
              <span>Abrir chat de WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Correo Electrónico */}
          <div className="bg-azul-marino/60 border border-white/10 p-6 sm:p-8 relative hover:border-celeste-energia transition-all group">
            <div className="w-12 h-12 bg-celeste-energia/10 border border-celeste-energia/30 flex items-center justify-center text-celeste-energia mb-5 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Correo Institucional
            </span>
            <h3 className="text-lg font-black text-white mb-2 break-all">
              jesusmendez.dai@gmail.com
            </h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Envío formal de pliegos, términos de referencia (TDR) y especificaciones técnicas.
            </p>
            <a
              href="mailto:jesusmendez.dai@gmail.com"
              className="inline-flex items-center space-x-2 text-xs font-extrabold text-celeste-energia hover:text-white uppercase tracking-wider"
            >
              <span>Redactar correo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Ubicación y Operaciones */}
          <div className="bg-azul-marino/60 border border-white/10 p-6 sm:p-8 relative hover:border-azul-daim transition-all group">
            <div className="w-12 h-12 bg-azul-daim/20 border border-azul-daim/40 flex items-center justify-center text-celeste-energia mb-5 group-hover:scale-105 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Sede y Cobertura
            </span>
            <h3 className="text-xl font-black text-white mb-2">
              Guayaquil - Esmeraldas
            </h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Operaciones y despliegue técnico con cobertura en todo el territorio de Ecuador.
            </p>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-celeste-energia" />
              <span>Despliegue operativo nacional</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Corporate Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white px-2 py-1 inline-block">
                <img 
                  src="/assets/logo-daim.png" 
                  alt="DAIM S.A.S." 
                  className="h-9 w-auto object-contain" 
                />
              </div>
              <div>
                <span className="font-black text-lg text-white block leading-tight">
                  DAIM S.A.S.
                </span>
                <span className="text-[10px] text-celeste-energia uppercase tracking-wider font-semibold block">
                  Diseño Avanzado de Ingeniería y Mantenimiento
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Empresa líder en soluciones integrales bajo la modalidad llave en mano. Comprometidos con la excelencia técnica, seguridad industrial y el desarrollo sostenible en Ecuador.
            </p>

            {/* Redes Sociales con Enlaces Seguros */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Canales de Comunicación:
              </span>
              <div className="flex items-center space-x-3">
                {/* TODO: reemplazar '#' con URL real de Facebook cuando el cliente confirme sus perfiles */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook DAIM S.A.S."
                  className="w-8 h-8 bg-azul-marino border border-white/15 flex items-center justify-center text-slate-300 hover:text-celeste-energia hover:border-celeste-energia transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                {/* TODO: reemplazar '#' con URL real de Instagram cuando el cliente confirme sus perfiles */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram DAIM S.A.S."
                  className="w-8 h-8 bg-azul-marino border border-white/15 flex items-center justify-center text-slate-300 hover:text-celeste-energia hover:border-celeste-energia transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                {/* TODO: reemplazar '#' con URL real de LinkedIn cuando el cliente confirme sus perfiles */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn DAIM S.A.S."
                  className="w-8 h-8 bg-azul-marino border border-white/15 flex items-center justify-center text-slate-300 hover:text-celeste-energia hover:border-celeste-energia transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/593983838317"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp DAIM S.A.S."
                  className="w-8 h-8 bg-azul-marino border border-white/15 flex items-center justify-center text-slate-300 hover:text-amarillo-seguridad hover:border-amarillo-seguridad transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-celeste-energia">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-celeste-energia transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-celeste-energia transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-celeste-energia transition-colors">Servicios Especializados</a>
              </li>
              <li>
                <a href="#energia" className="hover:text-celeste-energia transition-colors">Energía y Generación</a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-celeste-energia transition-colors">Proyectos y Experiencia</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-celeste-energia transition-colors">Contacto Directo</a>
              </li>
            </ul>
          </div>

          {/* Sectores Industriales */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-celeste-energia">
              Sectores Estratégicos
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-celeste-energia inline-block" />
                <span>Sector Eléctrico & Subestaciones 69/13.8 kV</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-celeste-energia inline-block" />
                <span>Sector Petroquímico & Tuberías de Proceso</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-celeste-energia inline-block" />
                <span>Sector Alimenticio, Camaroneras & Frío</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-celeste-energia inline-block" />
                <span>Construcción Civil, Obras Industriales & Viales</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-amarillo-seguridad inline-block" />
                <span>Energía Solar Fotovoltaica & Alumbrado Vial</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {currentYear} DAIM S.A.S. (Diseño Avanzado de Ingeniería y Mantenimiento). Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <span>Guayaquil - Esmeraldas, Ecuador</span>
            <span>·</span>
            <span>Seguridad & Calidad Certificada</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
