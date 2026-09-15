import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center space-x-2">
      {/* Tooltip badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center bg-azul-marino text-white text-xs font-semibold px-3 py-2 shadow-industrial border-l-4 border-amarillo-seguridad animate-bounce [animation-duration:3s]">
          <span className="mr-2">¿Cotizar proyecto? Escríbenos</span>
          <button 
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/593983838317?text=Hola%20DAIM%20S.A.S.,%20deseo%20solicitar%20asesor%C3%ADa%20y%20cotizaci%C3%B3n%20para%20un%20proyecto."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a DAIM S.A.S. por WhatsApp"
        className="relative group bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        {/* Pulsing halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        
        {/* Available indicator dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-amarillo-seguridad border-2 border-azul-marino rounded-full" />
        
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
