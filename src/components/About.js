import React from 'react';

function About() {
  return (
    <section className="about">
      <h2>Kdo jsme?</h2>
      <p>First Leasing a.s. je česká leasingová společnost s dlouholetou tradicí. Specializujeme se na leasing nemovitostí a automobilů, a naším cílem je poskytovat klientům rychlé a výhodné řešení financování. Díky individuálnímu přístupu a transparentním podmínkám jsme vaším spolehlivým partnerem.</p>
      <div className="about-benefits">
        <div className="benefit">
          <h3>Rychlé vyřízení</h3>
          <p>Váš požadavek zpracujeme do 48 hodin.</p>
        </div>
        <div className="benefit">
          <h3>Výhodné podmínky</h3>
          <p>Nabízíme konkurenceschopné úrokové sazby.</p>
        </div>
        <div className="benefit">
          <h3>Osobní přístup</h3>
          <p>Každému klientovi se věnujeme individuálně.</p>
        </div>
      </div>
    </section>
  );
}

export default About;