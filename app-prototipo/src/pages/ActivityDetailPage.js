import React from 'react';
import BottomNav from '../components/BottomNav';
import HealthSection from '../components/HealthSection';
import PinnedHealthData from '../components/PinnedHealthData';
import ImportantDataSection from '../components/ImportantDataSection';

function ActivityDetailPage() {
  return (
    <div className="activity-detail-container">
      {/* Página en blanco, puedes personalizarla a tu gusto */}
      <h2 style={{ padding: '1rem' }}>Detalles de mi Actividad</h2>

      {/* Sección de Salud con tema claro */}
      <HealthSection />
      
      {/* Nueva sección tipo "Datos fijados" */}
      <PinnedHealthData />
      
      {/* Sección de "Datos importantes" */}
      <ImportantDataSection />

      {/* Menú inferior fijo */}
      <BottomNav />
    </div>
  );
}

export default ActivityDetailPage;
