import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HealthSection.css';

function HealthSection() {
  // Dispara la animación después de montar el componente
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Valores de ejemplo
  const moveValue = 116;
  const moveGoal = 310;
  const exerciseValue = 12;
  const exerciseGoal = 30;
  const standValue = 4;
  const standGoal = 12;
  const steps = 2155;
  const distance = 1.65;

  return (
    <section className="health-section">
      <h2 className="health-title">Anillos de actividad</h2>

      {/* Envolvemos la tarjeta con Link para navegar a /activity */}
      <Link to="/activity" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="activity-card">
          <div className="ring-container">
            <MultiRing
              animate={animate}
              data={[
                {
                  label: 'Movimiento',
                  value: moveValue,
                  goal: moveGoal,
                  color: '#FF3B30', // Rojo
                },
                {
                  label: 'Ejercicio',
                  value: exerciseValue,
                  goal: exerciseGoal,
                  color: '#32D74B', // Verde
                },
                {
                  label: 'De pie',
                  value: standValue,
                  goal: standGoal,
                  color: '#64D2FF', // Azul
                },
              ]}
            />
          </div>

          <div className="activity-stats">
            <StatItem
              label="Movimiento"
              color="#FF3B30"
              value={`${moveValue}/${moveGoal} KCAL`}
            />
            <StatItem
              label="Ejercicio"
              color="#32D74B"
              value={`${exerciseValue}/${exerciseGoal} MIN`}
            />
            <StatItem
              label="De pie"
              color="#64D2FF"
              value={`${standValue}/${standGoal} H`}
            />
          </div>
        </div>
      </Link>

      {/* Tarjetas pequeñas (Pasos y Distancia) */}
      <div className="health-small-cards">
        <div className="health-card--small">
          <p className="small-card-title">Pasos</p>
          <BarChart value={steps} max={10000} animate={animate} />
        </div>
        <div className="health-card--small">
          <p className="small-card-title">Distancia</p>
          <BarChart value={distance} max={5} animate={animate} unit="KM" />
        </div>
      </div>
    </section>
  );
}

/**
 * MultiRing
 * Dibuja 3 arcos (Movimiento, Ejercicio, De pie) en un solo SVG,
 * cada uno con distinto radio.
 */
function MultiRing({ data, animate }) {
  // Radios actualizados para mayor separación
  const radii = [50, 38, 26];
  const svgSize = 120;

  return (
    <svg width={svgSize} height={svgSize} className="multi-ring-svg">
      {data.map((item, index) => {
        const radius = radii[index];
        const circumference = 2 * Math.PI * radius;
        const percentage = Math.min((item.value / item.goal) * 100, 100);
        const offset = circumference - (percentage / 100) * circumference;

        return (
          <g key={item.label}>
            <circle
              cx={svgSize / 2}
              cy={svgSize / 2}
              r={radius}
              stroke="#3A3A3C"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx={svgSize / 2}
              cy={svgSize / 2}
              r={radius}
              stroke={item.color}
              strokeWidth="10"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              className={animate ? 'multi-ring-fg animate' : 'multi-ring-fg'}
              style={{ '--offset': offset }}
            />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * StatItem
 * Muestra un label con color y el valor (p. ej. "Movimiento" en rojo, "116/310 KCAL")
 */
function StatItem({ label, color, value }) {
  return (
    <div className="stat-item">
      <span className="stat-label" style={{ color }}>
        {label}
      </span>
      <span className="stat-value">{value}</span>
    </div>
  );
}

/**
 * BarChart
 * Barra horizontal que se llena desde 0% hasta (value/max)*100% con animación
 */
function BarChart({ value, max, animate, unit }) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="bar-chart">
      <div
        className={`bar-fill ${animate ? 'animate' : ''}`}
        style={{ '--width': `${percentage}%` }}
      />
      <div className="bar-label">
        {value.toLocaleString()} {unit || ''}
      </div>
    </div>
  );
}

export default HealthSection;
