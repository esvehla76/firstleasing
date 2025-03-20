import React, { useState } from 'react';

function Calculator() {
  const [price, setPrice] = useState('');
  const [years, setYears] = useState('');
  const [interest, setInterest] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = () => {
    const principal = parseFloat(price);
    const annualInterest = parseFloat(interest) / 100;
    const months = parseFloat(years) * 12;
    const monthlyInterest = annualInterest / 12;
    const payment = (principal * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <section className="calculator">
      <h2>Spočítejte si svůj leasing</h2>
      <div className="form">
        <label>
          Cena nemovitosti/vozu (Kč):
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Doba splácení (roky):
          <input type="number" value={years} onChange={(e) => setYears(e.target.value)} />
        </label>
        <label>
          Úroková sazba (%):
          <input type="number" value={interest} onChange={(e) => setInterest(e.target.value)} />
        </label>
        <button onClick={calculatePayment}>Vypočítat</button>
      </div>
      {monthlyPayment && (
        <p>Vaše měsíční splátka: {monthlyPayment} Kč</p>
      )}
    </section>
  );
}

export default Calculator;