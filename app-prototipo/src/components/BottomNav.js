import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavItem icon="fa-solid fa-house" label="Inicio" link="/" />
      <NavItem icon="fa-solid fa-tools" label="Servicios" />
      <NavItem icon="fa-solid fa-user" label="Mi Cuenta" />
      <NavItem icon="fa-solid fa-ellipsis" label="Más" />
    </nav>
  );
}

/* Subcomponente para cada ítem del menú */
function NavItem({ icon, label, link }) {
  const content = (
    <div className="nav-item">
      <div className="nav-icon">
        <i className={icon}></i>
      </div>
      <div className="nav-label">{label}</div>
    </div>
  );

  // Si se pasa la prop "link", envolvemos en Link
  if (link) {
    return (
      <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
        {content}
      </Link>
    );
  }

  return content;
}

export default BottomNav;
