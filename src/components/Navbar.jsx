import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Energía y Generación', href: '#energia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full shadow-2xl">
      {/* Top utility bar con estilo idéntico al diseño Struct */}
      <div className="bg-[#181818] text-slate-300 text-xs border-b border-white/10 hidden md:block py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Pills con borde fino */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/15 rounded-sm">
              <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
              <span className="text-slate-200 text-[11px]">Guayaquil - Esmeraldas, Ecuador</span>
            </div>
            
            <a 
              href="mailto:jesusmendez.dai@gmail.com" 
              className="flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/15 rounded-sm hover:border-[#F26522] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-slate-200 text-[11px]">jesusmendez.dai@gmail.com</span>
            </a>

            <a 
              href="https://wa.me/593983838317" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/15 rounded-sm hover:border-[#F26522] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F26522]" />
              <span className="text-slate-200 text-[11px] font-medium">+593 983 838 317</span>
            </a>
          </div>

          {/* Social Icons en cajitas cuadradas con borde */}
          <div className="flex items-center space-x-1.5">
            {/* TODO: Reemplazar '#' con URL oficial de Facebook cuando el cliente lo confirme */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook DAIM" 
              className="w-7 h-7 bg-white/5 border border-white/15 flex items-center justify-center text-white hover:text-[#F26522] hover:border-[#F26522] transition-colors rounded-sm"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            {/* TODO: Reemplazar '#' con URL oficial de Instagram cuando el cliente lo confirme */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram DAIM" 
              className="w-7 h-7 bg-white/5 border border-white/15 flex items-center justify-center text-white hover:text-[#F26522] hover:border-[#F26522] transition-colors rounded-sm"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            {/* TODO: Reemplazar '#' con URL oficial de LinkedIn cuando el cliente lo confirme */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn DAIM" 
              className="w-7 h-7 bg-white/5 border border-white/15 flex items-center justify-center text-white hover:text-[#F26522] hover:border-[#F26522] transition-colors rounded-sm"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://wa.me/593983838317" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp DAIM" 
              className="w-7 h-7 bg-white/5 border border-white/15 flex items-center justify-center text-white hover:text-[#F26522] hover:border-[#F26522] transition-colors rounded-sm"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Sólido oscuro con contraste permanente */}
      <nav className="w-full bg-[#0C0C0C] py-3.5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo con fondo transparente y texto en blanco para máximo contraste */}
          <a 
            href="#inicio" 
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="DAIM S.A.S. Inicio"
          >
            {/* Logo transparente sin caja blanca */}
            <img 
              src="/assets/logo-daim-white.png" 
              alt="DAIM S.A.S." 
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <div className="hidden sm:block leading-tight text-left pl-1 border-l border-white/20">
              <span className="block font-black text-white text-sm md:text-base tracking-wide group-hover:text-[#F26522] transition-colors">
                DAIM S.A.S.
              </span>
              <span className="block text-[9px] md:text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                Ingeniería & Mantenimiento
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 text-sm font-semibold text-slate-200 hover:text-[#F26522] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button en color naranja / amarillo seguridad con flecha */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/593983838317"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#F26522] hover:bg-[#E05310] text-white font-bold px-5 py-2.5 text-xs uppercase tracking-wider rounded-sm shadow-md transition-all transform active:scale-95"
            >
              <span>Cotizar Proyecto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="https://wa.me/593983838317"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#F26522] text-white rounded-sm"
              aria-label="WhatsApp directo"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#F26522] focus:outline-none focus:ring-2 focus:ring-[#F26522] bg-[#181818] border border-white/10 rounded-sm"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0C0C0C] border-b border-white/15 px-4 pt-3 pb-6 animate-fadeIn shadow-2xl mt-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:text-[#F26522] border-l-2 border-transparent hover:border-[#F26522] transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col space-y-3">
              <div className="text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>Guayaquil - Esmeraldas, Ecuador</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>jesusmendez.dai@gmail.com</span>
                </div>
              </div>

              <a
                href="https://wa.me/593983838317"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full text-center flex justify-center items-center space-x-2 bg-[#F26522] text-white font-bold px-4 py-3 text-xs uppercase tracking-wider rounded-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Hablar por WhatsApp (+593 983 838 317)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
