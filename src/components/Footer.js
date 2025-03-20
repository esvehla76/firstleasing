import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>First Leasing a.s.</h3>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/">Domů</Link></li>
            <li><Link to="/o-nas">O nás</Link></li>
            <li><Link to="/sluzby">Služby</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>E-mail: info@firstleasing.cz</p>
          <p>Telefon: +420 123 456 789</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 First Leasing a.s. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
}

export default Footer;