import React from "react";

const BillingForm = () => {
  return (
    <section className="billing__form">
      <h3 style={{ paddingLeft: "25px" }}>Billing Address</h3>
      <div className="billing__box">
        <div className="label1">
          <span className="billing__label">First Name</span>
          <input type="text" className="billing__input" value="Alex" />
        </div>
        <div className="label1">
          <span className="billing__label1">Last Name</span>
          <input type="text" className="billing__input" value="Driver" />
        </div>
      </div>
      <div className="billing__box">
        <span className="billing__email">Email Address</span>
        <input
          type="email"
          className="billing__input2"
          value="abc123@gmail.com"
        />
      </div>
      <div className="billing__box">
        <span className="billing__email">Street Address</span>
        <input type="text" className="billing__input2" />
      </div>
      <div className="billing__box">
        <input className="billing__input2" type="text" />
      </div>
      <div className="billing__box">
        <div className="label1">
          <span className="billing__label">State/Province</span>
          <input className="billing__input" value="UP" />
        </div>
        <div className="label1">
          <span className="billing__label1">City</span>
          <input className="billing__input" value="Lucknow" />
        </div>
      </div>
      <div className="billing__box">
        <div className="label1">
          <span className="billing__label">Zip/Postal Code</span>
          <input className="billing__input" value="226022" />
        </div>

        <div className="label1">
          <span className="billing__label1">Phone</span>
          <input className="billing__input" value="9998887755" />
        </div>
      </div>
      <div className="billing__checkbox">
        <input type="checkbox" />
        <label style={{ paddingLeft: "10px" }}>
          My billing and shipping address are the same
        </label>
        <br />
        <input type="checkbox" />
        <label style={{ paddingLeft: "10px" }}>
          Create an Account for Later use
        </label>
      </div>
    </section>
  );
};

export default BillingForm;
