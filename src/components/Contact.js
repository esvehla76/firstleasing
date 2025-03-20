import React, { useState } from 'react';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tady by byla logika pro odeslání formuláře (např. přes API)
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <h2>Kontaktujte nás</h2>
      <div className="contact-info">
        <p><strong>Adresa:</strong> First Leasing a.s., Pražská 123, 110 00 Praha</p>
        <p><strong>Telefon:</strong> +420 123 456 789</p>
        <p><strong>E-mail:</strong> info@firstleasing.cz</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Jméno:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Zpráva:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit">Odeslat</button>
      </form>
      {submitted && <p>Děkujeme za vaši zprávu! Brzy vás budeme kontaktovat.</p>}
    </section>
  );
}

export default Contact;