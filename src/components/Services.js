import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <section className="services">
      <h2>Naše služby</h2>
      <div className="services-grid">
        <div className="service">
          <h3>Leasing nemovitostí</h3>
          <p>Financujte svůj domov, kancelář nebo komerční prostory. Nabízíme finanční i operativní leasing s flexibilními podmínkami.</p>
          <Link to="/sluzby" className="btn btn-primary">Zjistit více</Link>
        </div>
        <div className="service">
          <h3>Leasing automobilů</h3>
          <p>Pořiďte si auto snů bez vysokých počátečních nákladů. Leasing osobních i užitkových vozidel pro firmy i jednotlivce.</p>
          <Link to="/sluzby" className="btn btn-primary">Zjistit více</Link>
        </div>
      </div>
    </section>
  );
}

export default Services;