import React, { useState } from 'react';

function PaymentsPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Payments</h1>
      <label htmlFor="card-number">Card Number:</label>
      <input type="number" id="card-number" onChange={e => setCardNumber(e.target.value)} />

      <label htmlFor="expiry-date">Expiry Date:</label>
      <input type="date" id="expiry-date" onChange={e => setExpiryDate(e.target.value)} />

      <label htmlFor="cvv">CVV:</label>
      <input type="password" id="cvv" onChange={e => setCvv(e.target.value)} />

      <button type="submit">Submit Payment</button>
    </form>
  );
}

export default PaymentsPage;




