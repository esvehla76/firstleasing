import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>First Leasing</h1>
          <small>a.s.</small>
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Domů</Link></li>
          <li><Link to="/o-nas">O nás</Link></li>
          <li><Link to="/sluzby">Služby</Link></li>
          <li><Link to="/kalkulacka">Kalkulačka</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;