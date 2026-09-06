import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MenuModal } from './components/MenuModal';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CreditsPage } from './pages/CreditsPage';
import { CollaboratorsPage } from './pages/CollaboratorsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'inicio' | 'creditos' | 'colaboradores'>('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div id="sismosmex-app" className="min-h-screen bg-black text-zinc-100 flex flex-col selection:bg-zinc-800 selection:text-white">
      
      {/* Subtle monochrome ambient light with blur */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-white/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px]" />
      </div>

      {/* Translucent Navbar with Blur */}
      <Navbar 
        onOpenMenu={() => setIsMenuOpen(true)}
        onNavigateHome={() => setCurrentPage('inicio')}
      />

      {/* Clean Menu Modal: Only options! */}
      <MenuModal 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
      />

      {/* Main Content Area: switches between Inicio, Créditos, and Colaboradores */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-10 py-6 sm:py-10 md:py-14">
        {currentPage === 'inicio' && (
          <HomePage 
            onNavigateToCredits={() => setCurrentPage('creditos')}
            onNavigateToCollaborators={() => setCurrentPage('colaboradores')}
          />
        )}

        {currentPage === 'creditos' && (
          <CreditsPage 
            onBack={() => setCurrentPage('inicio')}
            onNavigateToCollaborators={() => setCurrentPage('colaboradores')}
          />
        )}

        {currentPage === 'colaboradores' && (
          <CollaboratorsPage 
            onBack={() => setCurrentPage('inicio')}
          />
        )}
      </main>

      {/* Shared Formal Footer */}
      <Footer 
        onNavigate={(page) => setCurrentPage(page)}
      />

    </div>
  );
}
