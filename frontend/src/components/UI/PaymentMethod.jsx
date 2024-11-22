import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label htmlFor="bancdirect" className="d-flex align-items-center gap-2">
          <input type="radio" name="bancdirect" value="1" /> Virement bancaire direct
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="pcheque" className="d-flex align-items-center gap-2">
          <input type="radio" name="pcheque" value="0" /> Paiement par chèque
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <p type="text" /> Master Card <i>(Soon...)</i>
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <p type="text" /> Paypal <i>(Soon...)</i>
        </label>

        <img src={paypal} alt="" />
      </div>
      {/* <div className="payment text-end mt-5">
        <button>Réservez maintenant</button>
      </div> */}
    </>
  );
};

export default PaymentMethod;
