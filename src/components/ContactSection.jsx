import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Smartphone,
  AtSign,
  Send,
  ArrowRight
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const whatsappMsg = `Hola DAIM S.A.S., mi nombre es ${formData.name || 'un cliente'}. Correo: ${formData.email}. Teléfono: ${formData.phone}. Requerimiento: ${formData.message}`;
    const waUrl = `https://wa.me/593983838317?text=${encodeURIComponent(whatsappMsg)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setFormSubmitted(false);
      setFormData({ email: '', phone: '', name: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contacto" className="py-12 sm:py-20 lg:py-28 bg-[#F4F8FC] relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección con Estilo Corporativo DAIM */}
        <div className="border-l-4 border-azul-daim pl-3 sm:pl-6 mb-6 sm:mb-12">
          <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-azul-daim block mb-1">
            Atención Inmediata & Cotizaciones
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-azul-marino tracking-tight">
            Contáctanos
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-1.5 sm:mt-2 max-w-2xl leading-relaxed text-justify">
            Cuéntanos sobre los requerimientos técnicos de tu empresa. Nuestro equipo de ingeniería evaluará tu proyecto sin demoras.
          </p>
        </div>

        {/* FILA 1: FORMULARIO DE CONTACTO + TARJETA DE REDES SOCIALES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          
          {/* LADO IZQUIERDO: FORMULARIO CON PALETA CORPORATIVA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
              
              {/* Row 1: Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Correo Electrónico"
                    className="w-full bg-[#E5EFF8] text-azul-marino placeholder-[#6B84A3] rounded-full px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm outline-none border border-[#CBDDF0] focus:border-azul-daim focus:bg-white focus:ring-2 focus:ring-azul-daim/30 shadow-sm transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="Teléfono / WhatsApp"
                    className="w-full bg-[#E5EFF8] text-azul-marino placeholder-[#6B84A3] rounded-full px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm outline-none border border-[#CBDDF0] focus:border-azul-daim focus:bg-white focus:ring-2 focus:ring-azul-daim/30 shadow-sm transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Nombre Completo o Empresa"
                  className="w-full bg-[#E5EFF8] text-azul-marino placeholder-[#6B84A3] rounded-full px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm outline-none border border-[#CBDDF0] focus:border-azul-daim focus:bg-white focus:ring-2 focus:ring-azul-daim/30 shadow-sm transition-all"
                />
              </div>

              {/* Row 3: Message */}
              <div>
                <textarea
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Cuéntanos sobre tu proyecto o requerimiento de ingeniería, energía o mantenimiento..."
                  className="w-full bg-[#E5EFF8] text-azul-marino placeholder-[#6B84A3] rounded-2xl sm:rounded-3xl px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm outline-none border border-[#CBDDF0] focus:border-azul-daim focus:bg-white focus:ring-2 focus:ring-azul-daim/30 shadow-sm transition-all resize-none min-h-[100px] sm:min-h-[140px]"
                />
              </div>

              {/* Row 4: Submit Button con Colores de DAIM */}
              <div className="pt-1 sm:pt-2">
                <button
                  type="submit"
                  disabled={formSubmitted}
                  className="w-full sm:w-auto bg-azul-daim hover:bg-azul-daim-hover text-white font-bold px-6 py-3 sm:px-9 sm:py-4 rounded-full text-xs sm:text-sm shadow-industrial hover:shadow-lg transition-all inline-flex items-center justify-center space-x-2 active:scale-95 disabled:opacity-75 cursor-pointer"
                >
                  {formSubmitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-celeste-energia animate-pulse" />
                      <span>Procesando requerimiento...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send className="w-3.5 h-3.5 ml-1" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* LADO DERECHO: TARJETA DE REDES SOCIALES EN AZUL MARINO DAIM */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-azul-marino via-azul-marino-card to-azul-marino-dark p-5 sm:p-9 text-white flex flex-col justify-between h-full shadow-industrial-lg border border-azul-daim/30 min-h-[280px] sm:min-h-[360px]">
              {/* Fotografía de fondo translúcida con overlay */}
              <img 
                src="/assets/contact-industrial.webp" 
                alt="Instalaciones industriales y equipo técnico DAIM" 
                className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none"
                loading="lazy"
                decoding="async"
              />
              
              <div className="relative z-10 mb-4 sm:mb-5">
                <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/10 rounded-full text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase text-celeste-energia mb-2 sm:mb-2.5 border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-amarillo-seguridad inline-block animate-ping" />
                  <span>Canales Digitales</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight mb-1 sm:mb-2">
                  Redes Sociales
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal line-clamp-2 sm:line-clamp-none text-justify">
                  Conéctate con DAIM S.A.S. en nuestras plataformas oficiales. Síguenos para conocer el desarrollo de nuestras obras, soluciones de ingeniería y novedades técnicas.
                </p>
              </div>

              {/* Botones de Redes Sociales estilizados como píldoras blancas */}
              <div className="relative z-10 space-y-2 sm:space-y-2.5">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/593983838317?text=Hola%20DAIM%20S.A.S.,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white hover:bg-slate-50 text-azul-marino rounded-full border border-slate-100 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-center space-x-2.5 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] transition-colors group-hover:scale-105">
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold tracking-wide text-azul-marino">WhatsApp Oficial</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold group-hover:text-azul-daim transition-colors">+593 983 838 317</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white hover:bg-slate-50 text-azul-marino rounded-full border border-slate-100 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-center space-x-2.5 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0A66C2]/15 flex items-center justify-center text-[#0A66C2] transition-colors group-hover:scale-105">
                      <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold tracking-wide text-azul-marino">LinkedIn</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold group-hover:text-azul-daim transition-colors">DAIM S.A.S.</span>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white hover:bg-slate-50 text-azul-marino rounded-full border border-slate-100 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-center space-x-2.5 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E4405F]/15 flex items-center justify-center text-[#E4405F] transition-colors group-hover:scale-105">
                      <InstagramIcon className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold tracking-wide text-azul-marino">Instagram</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold group-hover:text-azul-daim transition-colors">@daim.sas</span>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white hover:bg-slate-50 text-azul-marino rounded-full border border-slate-100 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-center space-x-2.5 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1877F2]/15 flex items-center justify-center text-[#1877F2] transition-colors group-hover:scale-105">
                      <FacebookIcon className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold tracking-wide text-azul-marino">Facebook</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold group-hover:text-azul-daim transition-colors">DAIM Ingeniería</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* FILA 2: TRES TARJETAS DE INFORMACIÓN CON ARMONÍA CROMÁTICA DAIM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-8">
          
          {/* Card 1: Teléfono */}
          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-gradient-to-br from-azul-marino to-azul-marino-card text-white shadow-industrial border-l-4 border-amarillo-seguridad flex flex-col justify-between group hover:border-celeste-energia transition-all">
            <div>
              <div className="flex items-center space-x-3 mb-2 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-amarillo-seguridad/40 flex items-center justify-center flex-shrink-0 text-amarillo-seguridad group-hover:scale-105 transition-transform">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="text-sm sm:text-lg lg:text-xl font-black tracking-tight text-white truncate whitespace-nowrap">
                  +593 983 838 317
                </h4>
              </div>
              <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed pl-1 line-clamp-2 sm:line-clamp-none text-justify">
                Atención técnica directa, cotizaciones inmediatas y coordinación operativa para proyectos industriales y emergencias de planta.
              </p>
            </div>

            <div className="mt-3 pt-2.5 sm:mt-5 sm:pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white">
              <span className="font-semibold text-slate-300 text-[10px] sm:text-xs">Línea Directa / WhatsApp:</span>
              <a 
                href="https://wa.me/593983838317" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-extrabold text-amarillo-seguridad hover:text-white uppercase tracking-wider text-[10px] sm:text-[11px] transition-colors inline-flex items-center space-x-1"
              >
                <span>Iniciar Chat</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Correo */}
          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-[#EDF6FD] border-2 border-[#CBE2F7] text-azul-marino shadow-sm hover:border-azul-daim transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center space-x-3 mb-2 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-azul-daim/10 border border-azul-daim/30 flex items-center justify-center flex-shrink-0 text-azul-daim group-hover:scale-105 transition-transform">
                  <AtSign className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="overflow-hidden space-y-0.5">
                  <a 
                    href="mailto:jesusmendez.dai@gmail.com" 
                    className="block text-xs sm:text-base font-black tracking-tight text-azul-marino hover:text-azul-daim transition-colors truncate" 
                    title="jesusmendez.dai@gmail.com"
                  >
                    jesusmendez.dai@gmail.com
                  </a>
                  <a 
                    href="mailto:gerencia@daimenergy.com" 
                    className="block text-xs sm:text-base font-black tracking-tight text-azul-marino hover:text-azul-daim transition-colors truncate" 
                    title="gerencia@daimenergy.com"
                  >
                    gerencia@daimenergy.com
                  </a>
                </div>
              </div>
              <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed pl-1 line-clamp-2 sm:line-clamp-none text-justify">
                Recepción formal de pliegos de contratación, términos de referencia (TDR), requerimientos de procura y especificaciones de proyectos.
              </p>
            </div>

            <div className="mt-3 pt-2.5 sm:mt-5 sm:pt-3 border-t border-azul-daim/15 flex items-center justify-between text-xs text-azul-marino">
              <span className="font-semibold text-slate-500 text-[10px] sm:text-xs">Correos Institucionales:</span>
              <a 
                href="mailto:jesusmendez.dai@gmail.com" 
                className="font-extrabold text-azul-daim hover:text-azul-marino uppercase tracking-wider text-[10px] sm:text-[11px] transition-colors inline-flex items-center space-x-1"
              >
                <span>Redactar</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Ubicación & Presencia */}
          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white border-2 border-slate-200 shadow-sm hover:border-celeste-energia transition-all flex flex-col justify-between text-azul-marino group">
            <div>
              <div className="flex items-center space-x-3 mb-2 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-50 border-2 border-azul-marino flex items-center justify-center flex-shrink-0 text-azul-marino group-hover:scale-105 transition-transform">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs sm:text-base font-black tracking-tight text-azul-marino truncate" title="Quito · Caracas · Madrid">
                    Quito · Caracas · Madrid
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-semibold truncate" title="Sede: La Morita, Tumbaco, Quito">
                    Sede: La Morita, Tumbaco, Quito
                  </p>
                </div>
              </div>
              <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed pl-1 line-clamp-2 sm:line-clamp-none text-justify">
                Sede principal en La Morita, Tumbaco (Quito, Ecuador) con presencia y alcance operativo en Caracas (Venezuela) y Madrid (España).
              </p>
            </div>

            <div className="mt-3 pt-2.5 sm:mt-5 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-500 text-[10px] sm:text-xs">Presencia:</span>
              <span className="font-extrabold text-azul-daim uppercase tracking-wider text-[10px] sm:text-[11px]">
                Nacional e Internacional
              </span>
            </div>
          </div>

        </div>

        {/* FILA 3: MAPA DE GOOGLE EMBEBIDO CON BORDES REDONDEADOS Y ESTILO DAIM */}
        <div className="mt-6 sm:mt-8">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-slate-200 shadow-industrial h-56 sm:h-80 lg:h-96 w-full bg-slate-100">
            {/* Iframe interactivo de Google Maps enfocado en La Morita, Tumbaco, Quito */}
            <iframe
              title="Ubicación DAIM S.A.S. en Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=La%20Morita,%20Tumbaco,%20Quito,%20Ecuador&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full filter contrast-[1.02]"
            />

            {/* Tarjeta flotante simulada estilo Google Maps con los datos reales de DAIM S.A.S. */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-industrial-lg border border-slate-200/90 max-w-[250px] sm:max-w-xs z-10">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h5 className="font-black text-xs sm:text-sm text-azul-marino leading-snug">
                    DAIM S.A.S.
                  </h5>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">
                    Sede: La Morita, Tumbaco, Quito
                  </p>
                  <div className="flex items-center space-x-1 mt-1 text-[11px] text-amber-500 font-bold">
                    <span>5.0</span>
                    <span>★★★★★</span>
                    <span className="text-azul-daim font-bold text-[10px] ml-1">Ingeniería & Energía</span>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=La+Morita,+Tumbaco,+Quito,+Ecuador" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-[10px] sm:text-[11px] text-azul-daim font-bold hover:underline mt-1"
                  >
                    Ver mapa ampliado
                  </a>
                </div>

                {/* Botón de Cómo Llegar / Ruta */}
                <a
                  href="https://maps.google.com/maps/dir//La+Morita,+Tumbaco,+Quito,+Ecuador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center text-azul-daim hover:text-azul-daim-hover flex-shrink-0 group p-1"
                >
                  <div className="w-8 h-8 rounded-full bg-azul-daim/10 group-hover:bg-azul-daim group-hover:text-white flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M21.71 11.29l-9-9a1 1 0 00-1.42 0l-9 9a1 1 0 000 1.42l9 9a1 1 0 001.42 0l9-9a1 1 0 001.42 0l9-9a1 1 0 000-1.42zm-10.71 7.3L4.41 12 11 5.41V10h4v5h-4v3.59z"/>
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold text-azul-daim mt-0.5">Ruta</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
