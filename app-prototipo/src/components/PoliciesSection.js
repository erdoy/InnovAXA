import React from 'react';
import '../App.css';

function PoliciesSection() {
  return (
    <section className="policies-section">
      <div className="policies-header">
        <h2>Mis Pólizas</h2>
        <button className="view-all-button">Ver todas (4)</button>
      </div>
      <div className="policies-list">
        <PolicyCard
          icon="fa-solid fa-car"
          circleColor="#53D769"
          title="Motor"
          policyCount="1 Póliza"
        />
        <PolicyCard
          icon="fa-solid fa-heart"
          circleColor="#FF3B30"
          title="Salud"
          policyCount="1 Póliza"
        />
        <PolicyCard
          icon="fa-solid fa-piggy-bank"
          circleColor="#FFCC00"
          title="Vida Ahorro"
          policyCount="1 Póliza"
        />
        <PolicyCard
          icon="fa-solid fa-shield-halved"
          circleColor="#AF52DE"
          title="Vida Riesgo"
          policyCount="1 Póliza"
        />
      </div>
    </section>
  );
}

/* Subcomponente para cada póliza */
function PolicyCard({ icon, circleColor, title, policyCount }) {
  return (
    <div className="policy-card">
      <div
        className="policy-icon"
        style={{ backgroundColor: circleColor }}
      >
        <i className={icon}></i>
      </div>
      <div className="policy-info">
        <span className="policy-title">{title}</span>
        <span className="policy-count">{policyCount}</span>
      </div>
    </div>
  );
}

export default PoliciesSection;
