import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MissionExperience from './components/MissionExperience';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gris-pizarra font-montserrat flex flex-col selection:bg-celeste-energia selection:text-azul-marino relative">
      {/* Skip to Content for Accessibility */}
      <a 
        href="#nosotros" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-[60] bg-amarillo-seguridad text-azul-marino px-4 py-2 text-xs font-black uppercase tracking-wider shadow-lg outline-none ring-2 ring-azul-marino"
      >
        Saltar al contenido principal
      </a>

      {/* Sticky & Transparent Navigation */}
      <Navbar />

      {/* Main One-Page Content */}
      <main className="flex-grow">
        {/* 1. Hero / Banner Principal */}
        <Hero />

        {/* 2. Sobre DAIM (Nosotros, Cita, Sectores, Fotos) */}
        <About />

        {/* 3. Servicios Especializados (Electricidad, Mecánica, Civil, Servicios Generales) */}
        <Services />

        {/* 4. Misión, Visión, Energía y Generación, y Experiencia en Proyectos */}
        <MissionExperience />
      </main>

      {/* 5. Contacto Directo, Canales & Footer */}
      <Contact />

      {/* Botón Flotante Permanente de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
