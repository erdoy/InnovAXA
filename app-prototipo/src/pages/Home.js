import React from 'react';
import BannerSection from '../components/BannerSection';
import HealthSection from '../components/HealthSection';
import PoliciesSection from '../components/PoliciesSection';
import FavoritesSection from '../components/FavoritesSection';
import BottomNav from '../components/BottomNav';

function Home() {
  return (
    <div className="home-container">
      {/* Sección Banner siempre arriba */}
      <BannerSection />

      {/* Sección: Mis Pólizas */}
      <PoliciesSection />

      {/* Sección: Mis Favoritos */}
      <FavoritesSection />

      {/* Sección de Salud con tema claro */}
      <HealthSection />

      {/* Menú inferior */}
      <BottomNav />
    </div>
  );
}

export default Home;
