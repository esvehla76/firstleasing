import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <h1>First Leasing a.s. – Váš partner pro leasing nemovitostí a automobilů</h1>
      <p>Financujte svůj domov nebo auto jednoduše a rychle. Nabízíme výhodné podmínky a individuální přístup.</p>
      <div className="hero-buttons">
        <Link to="/sluzby" className="btn btn-primary">Zjistit více</Link>
        <Link to="/kontakt" className="btn btn-secondary">Kontaktujte nás</Link>
      </div>
    </section>
  );
}

export default Hero;