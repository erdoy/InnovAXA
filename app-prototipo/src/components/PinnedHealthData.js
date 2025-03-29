import React, { useState, useEffect } from 'react';
import './PinnedHealthData.css';

/* 
  Función auxiliar para generar un número aleatorio 
  en el rango [min, max].
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 
  Genera un array de “líneas” (para el gráfico de Frecuencia Cardíaca),
  cada una con una altura y posición aleatoria dentro del contenedor.
*/
function generateHeartRateLines(count = 5) {
  return Array.from({ length: count }, () => {
    return {
      height: getRandomInt(10, 40), // altura de la línea, 10px a 40px
      top: getRandomInt(0, 20),     // posición vertical (más/menos)
      left: getRandomInt(0, 80),    // posición horizontal dentro del contenedor
    };
  });
}

function PinnedHealthData() {
  // Estado para la Frecuencia Cardíaca
  const [heartRate, setHeartRate] = useState(getRandomInt(60, 120));
  // Estado para las líneas verticales (gráfico “aleatorio” de FC)
  const [heartRateLines, setHeartRateLines] = useState(generateHeartRateLines());

  // Estado para los Pasos (fijo en este ejemplo, pero podrías hacerlo aleatorio también)
  const [steps] = useState(2316);

  // Actualiza la frecuencia cardíaca y las líneas cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(getRandomInt(60, 120));
      setHeartRateLines(generateHeartRateLines());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Tiempos de ejemplo (puedes calcularlos dinámicamente)
  const heartRateTime = '1:00 p. m.';
  const stepsTime = '12:43 p. m.';

  return (
    <section className="pinned-health-data">
      {/* Encabezado: "Datos fijados" + botón "Editar" */}
      <div className="pinned-header">
        <h2 className="pinned-title">Datos fijados</h2>
        <button className="pinned-edit-button">Editar</button>
      </div>

      {/* Card: Frecuencia Cardíaca */}
      <div className="pinned-card">
        <div className="pinned-card-header">
          <div className="card-icon heart">
            <i className="fa-solid fa-heart"></i>
          </div>
          <span className="card-title">Frecuencia cardiaca</span>
          <span className="card-time">{heartRateTime}</span>
        </div>
        <div className="pinned-card-content">
          <div className="card-value">
            Más reciente<br />
            {heartRate} LPM
          </div>
          {/* Pequeño gráfico de líneas verticales aleatorias */}
          <div className="heart-rate-chart">
            {heartRateLines.map((line, index) => (
              <div
                key={index}
                className="hr-line"
                style={{
                  height: `${line.height}px`,
                  top: `${line.top}px`,
                  left: `${line.left}%`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Card: Pasos */}
      <div className="pinned-card">
        <div className="pinned-card-header">
          <div className="card-icon steps">
            <i className="fa-solid fa-shoe-prints"></i>
          </div>
          <span className="card-title">Pasos</span>
          <span className="card-time">{stepsTime}</span>
        </div>
        <div className="pinned-card-content">
          <div className="card-value">
            {steps.toLocaleString()} pasos
          </div>
          {/* Gráfico de barras (estático) */}
          <div className="steps-chart">
            <div className="step-bar" style={{ height: '20%' }}></div>
            <div className="step-bar" style={{ height: '60%' }}></div>
            <div className="step-bar" style={{ height: '40%' }}></div>
            <div className="step-bar" style={{ height: '80%' }}></div>
          </div>
        </div>
      </div>

      {/* Botón/Enlace al final */}
      <div className="pinned-footer-button">
        <button>Mostrar todos los datos de salud</button>
      </div>
    </section>
  );
}

export default PinnedHealthData;
