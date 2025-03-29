import React from 'react';
import './ImportantDataSection.css';

function ImportantDataSection() {
  return (
    <section className="important-data-section">
      <h2 className="important-data-title">Datos importantes</h2>

      <div className="important-card">
        {/* Encabezado de la tarjeta (icono + “Pasos”) */}
        <div className="important-card-header">
          <div className="card-icon flame">
            <i className="fa-solid fa-fire"></i>
          </div>
          <span className="card-title">Pasos</span>
        </div>

        {/* Texto descriptivo */}
        <p className="important-description">
          Hasta ahora, llevas menos pasos de lo habitual.
        </p>

        {/* Métricas: Hoy vs Promedio */}
        <div className="important-stats-row">
          <div className="stat-block">
            <span className="stat-label">Hoy</span>
            <span className="stat-value orange">2316</span>
            <span className="stat-unit">pasos</span>
          </div>
          <div className="stat-block">
            <span className="stat-label">Promedio</span>
            <span className="stat-value grey">3142</span>
            <span className="stat-unit">pasos</span>
          </div>
        </div>

        {/* Gráfico lineal (SVG) */}
        <div className="chart-container">
          <svg className="line-chart" viewBox="0 0 300 100">
            {/* Línea gris (promedio) */}
            <path
              d="M 0 80 C 50 40, 100 30, 150 45 
                 S 250 70, 300 20"
              stroke="#888" 
              strokeWidth="3"
              fill="none"
            />
            {/* Línea naranja (hoy) */}
            <path
              d="M 0 90 C 50 60, 100 50, 150 55
                 S 250 65, 300 30"
              stroke="#ff9500"
              strokeWidth="3"
              fill="none"
            />
            {/* Eje x (horas) - Opcional, aquí un placeholder */}
            <line x1="0" y1="95" x2="300" y2="95" stroke="#555" strokeWidth="1" />
          </svg>
          <div className="chart-labels">
            <span>12 a. m.</span>
            <span>1 p. m.</span>
            <span>12 a. m.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImportantDataSection;
