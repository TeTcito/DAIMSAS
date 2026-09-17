import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-azul-marino-dark text-white relative overflow-hidden border-t border-white/10">
      {/* Main Footer Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
          
          {/* Logo & Corporate Identity */}
          <div className="md:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white px-2 py-1 inline-block">
                <img 
                  src="/assets/logo-daim.png" 
                  alt="DAIM S.A.S." 
                  className="h-8 sm:h-9 w-auto object-contain" 
                />
              </div>
              <div>
                <span className="font-black text-base sm:text-lg text-white block leading-tight">
                  DAIM S.A.S.
                </span>
                <span className="text-[9px] sm:text-[10px] text-celeste-energia uppercase tracking-wider font-semibold block">
                  Diseño Avanzado de Ingeniería y Mantenimiento
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Empresa líder en soluciones integrales bajo la modalidad llave en mano. Comprometidos con la excelencia técnica, seguridad industrial y el desarrollo sostenible en Ecuador.
            </p>

            {/* Redes Sociales con Enlaces Seguros */}
            <div className="pt-1 sm:pt-2">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Canales de Comunicación:
              </span>
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                {/* TODO: reemplazar '#' con URL real de Facebook cuando el cliente confirme sus perfiles */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook DAIM S.A.S."
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white/5 border border-white/15 flex items-center justify-center text-[#1877F2] hover:bg-white hover:border-[#1877F2] transition-all rounded-sm group"
                >
                  <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current group-hover:scale-110 transition-transform" />
                </a>
                {/* TODO: reemplazar '#' con URL real de Instagram cuando el cliente confirme sus perfiles */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram DAIM S.A.S."
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white/5 border border-white/15 flex items-center justify-center text-[#E4405F] hover:bg-white hover:border-[#E4405F] transition-all rounded-sm group"
                >
                  <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current group-hover:scale-110 transition-transform" />
                </a>
                {/* TODO: reemplazar '#' con URL real de LinkedIn cuando el cliente confirme sus perfiles */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn DAIM S.A.S."
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white/5 border border-white/15 flex items-center justify-center text-[#0A66C2] hover:bg-white hover:border-[#0A66C2] transition-all rounded-sm group"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://wa.me/593983838317"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp DAIM S.A.S."
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white/5 border border-white/15 flex items-center justify-center text-[#25D366] hover:bg-white hover:border-[#25D366] transition-all rounded-sm group"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-celeste-energia">
              Navegación
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-300">
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
                <a href="#contacto" className="hover:text-celeste-energia transition-colors">Contáctanos</a>
              </li>
            </ul>
          </div>

          {/* Sectores Industriales */}
          <div className="md:col-span-4 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-celeste-energia">
              Sectores Estratégicos
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-celeste-energia inline-block flex-shrink-0" />
                <span>Sector Eléctrico & Subestaciones 69/13.8 kV</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-celeste-energia inline-block flex-shrink-0" />
                <span>Sector Petroquímico & Tuberías de Proceso</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-celeste-energia inline-block flex-shrink-0" />
                <span>Sector Alimenticio, Camaroneras & Frío</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-celeste-energia inline-block flex-shrink-0" />
                <span>Construcción Civil, Obras Industriales & Viales</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-amarillo-seguridad inline-block flex-shrink-0" />
                <span>Energía Solar Fotovoltaica & Alumbrado Vial</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-8 pt-6 sm:mt-12 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-slate-400 text-center sm:text-left">
          <p>
            © {currentYear} DAIM S.A.S. (Diseño Avanzado de Ingeniería y Mantenimiento). Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span>Guayaquil - Esmeraldas, Ecuador</span>
            <span>·</span>
            <span>Seguridad & Calidad Certificada</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
