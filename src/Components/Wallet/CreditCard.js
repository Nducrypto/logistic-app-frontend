import React from "react";
import "./creditCard.css";

const CreditCard = () => {
  return (
    <div className="credit-card">
      <div className="card-front">
        <div className="card-chip"></div>
        <div className="card-number">**** **** **** 1234</div>
        <div className="card-logo">M & B</div>
        <div className="card-flex-container">
          <div className="card-holder">
            <div className="label">Card Holder</div>
            <div className="value">John Doe</div>
          </div>
          <div className="card-expiry">
            <div className="label">Expiry</div>
            <div className="value">12/24</div>
          </div>
        </div>
      </div>
      <div className="card-back">
        <div className="card-magnetic-stripe"></div>
        <div className="card-cvv">123</div>
      </div>
    </div>
  );
};

export default CreditCard;
