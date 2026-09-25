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
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Energía y Generación', href: '#energia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href === '#inicio') {
      e?.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname + window.location.search);
      }
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full shadow-2xl">
      {/* Top utility bar con estilo corporativo DAIM */}
      <div className="bg-[#111822] text-slate-300 text-xs border-b border-white/10 hidden md:block py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Pills con borde fino */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/15 rounded-sm">
              <MapPin className="w-3.5 h-3.5 text-amarillo-seguridad" />
              <span className="text-slate-200 text-[11px]">Quito · Caracas · Madrid</span>
            </div>
            
            <a 
              href="mailto:info@daimenergy.com" 
              className="flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/15 rounded-sm hover:border-celeste-energia transition-colors"
              title="Correo Institucional"
            >
              <Mail className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-slate-200 text-[11px]">info@daimenergy.com</span>
            </a>

            <a 
              href="mailto:gerencia@daimenergy.com" 
              className="hidden lg:flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/15 rounded-sm hover:border-celeste-energia transition-colors"
              title="Correo Gerencia"
            >
              <Mail className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-slate-200 text-[11px]">gerencia@daimenergy.com</span>
            </a>

            <a 
              href="mailto:jesusmendez.dai@gmail.com" 
              className="hidden 2xl:flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/15 rounded-sm hover:border-celeste-energia transition-colors"
              title="Correo Alternativo"
            >
              <Mail className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-slate-200 text-[11px]">jesusmendez.dai@gmail.com</span>
            </a>

            <a 
              href="https://wa.me/593983838317" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/15 rounded-sm hover:border-amarillo-seguridad transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amarillo-seguridad" />
              <span className="text-slate-200 text-[11px] font-medium">+593 983 838 317</span>
            </a>
          </div>

          {/* Social Icons con sus respectivos colores oficiales */}
          <div className="flex items-center space-x-1.5">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook DAIM" 
              className="w-7 h-7 bg-white/5 border border-white/15 flex items-center justify-center text-[#1877F2] hover:bg-white hover:border-[#1877F2] transition-all rounded-sm"
            >
              <FacebookIcon className="w-3.5 h-3.5 fill-current" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram DAIM" 
              className="w-7 h-7 bg-white/5 border border-white/15 flex items-center justify-center text-[#E4405F] hover:bg-white hover:border-[#E4405F] transition-all rounded-sm"
            >
              <InstagramIcon className="w-3.5 h-3.5 fill-current" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn DAIM" 
              className="w-7 h-7 bg-white/5 border border-white/15 flex items-center justify-center text-[#0A66C2] hover:bg-white hover:border-[#0A66C2] transition-all rounded-sm"
            >
              <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
            </a>
            <a 
              href="https://wa.me/593983838317" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp DAIM" 
              className="w-7 h-7 bg-white/5 border border-white/15 flex items-center justify-center text-[#25D366] hover:bg-white hover:border-[#25D366] transition-all rounded-sm"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Sólido oscuro azul marino con contraste */}
      <nav className="w-full bg-azul-marino-dark py-3.5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo transparente */}
          <a 
            href="#inicio" 
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="DAIM S.A.S. Inicio"
          >
            <img 
              src="/assets/logo-daim-white.webp" 
              alt="DAIM S.A.S." 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
              loading="eager"
              decoding="async"
            />
            <div className="hidden sm:block leading-tight text-left pl-2 border-l border-white/20">
              <span className="block font-black text-white text-sm md:text-base tracking-wide group-hover:text-celeste-energia transition-colors">
                DAIM S.A.S.
              </span>
              <span className="block text-[8px] sm:text-[9px] md:text-[9.5px] text-celeste-energia uppercase tracking-wider font-bold">
                ENERGY · ENGINEERING · INFRASTRUCTURE · O&M
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-2.5 py-1.5 text-sm font-semibold text-slate-200 hover:text-celeste-energia transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button en color amarillo seguridad */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/593983838317"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-amarillo-seguridad hover:bg-amarillo-seguridad-hover text-azul-marino font-extrabold px-5 py-2.5 text-xs uppercase tracking-wider rounded-sm shadow-md transition-all transform active:scale-95"
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
              className="p-2 bg-amarillo-seguridad text-azul-marino rounded-sm"
              aria-label="WhatsApp directo"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-celeste-energia focus:outline-none focus:ring-2 focus:ring-azul-daim bg-azul-marino border border-white/10 rounded-sm"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-azul-marino-dark border-b border-white/15 px-4 pt-3 pb-6 animate-fadeIn shadow-2xl mt-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:text-celeste-energia border-l-2 border-transparent hover:border-celeste-energia transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col space-y-3">
              <div className="text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-amarillo-seguridad" />
                  <span>Quito · Caracas · Madrid</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href="mailto:info@daimenergy.com" className="hover:text-celeste-energia transition-colors">info@daimenergy.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href="mailto:gerencia@daimenergy.com" className="hover:text-celeste-energia transition-colors">gerencia@daimenergy.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href="mailto:jesusmendez.dai@gmail.com" className="hover:text-celeste-energia transition-colors">jesusmendez.dai@gmail.com</a>
                </div>
              </div>

              <a
                href="https://wa.me/593983838317"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full text-center flex justify-center items-center space-x-2 bg-amarillo-seguridad text-azul-marino font-extrabold px-4 py-3 text-xs uppercase tracking-wider rounded-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Hablar por WhatsApp (+593 983 838 317)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
