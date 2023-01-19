import React, { useState } from 'react';
import './cart.css';

function PaymentsPage() {
  // Use state to keep track of the payment details
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the payment details to your server or payment gateway
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Payments</h1>
      <div className="form-group">
        <label htmlFor="card-number">Card Number:</label>
        <input className="form-control" type="text" id="card-number" onChange={e => setCardNumber(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="expiry-date">Expiry Date:</label>
        <input className="form-control" type="text" id="expiry-date" onChange={e => setExpiryDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="cvv">CVV:</label>
        <input className="form-control" type="text" id="cvv" onChange={e => setCvv(e.target.value)} />
      </div>
      
      <button className="btn btn-primary" type="submit">Submit Payment</button>
    </form>
  );
}

export default PaymentsPage;