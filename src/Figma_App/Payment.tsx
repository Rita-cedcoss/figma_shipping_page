import React from "react";

const Payment = () => {
  return (
    <section className="billing__form">
      <h3 style={{ paddingLeft: "25px" }}>Payment Method</h3>
      <div className="billing__shipping">
        <input type="radio" />{" "}
        <label style={{ paddingLeft: "5px" }}>Paypal</label>
        <span style={{ paddingLeft: "5px", paddingTop: "18px" }}>
          You will be redirected to the Paypal website after submitting Your
        </span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174861.png"
          height="20px"
          width="30px"
          alt=""
        ></img>
      </div>
      <div className="billing__shippingpay">
        <div className="billing__shipping1 ">
          <div>
            <label>
              {" "}
              <input type="radio" /> Pay Width Credit
            </label>
          </div>
          <div>
            <img
              className="billing__img"
              height="40px"
              width="50px"
              alt=""
              src="data:image/png;base64,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"
            ></img>
            <img
              className="billing__img"
              height="40px"
              width="50px"
              alt=""
              src="https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png"
            />
            <img
              className="billing__img"
              height="40px"
              width="50px"
              alt=""
              src="https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg"
            />
          </div>
        </div>
        <div className="billing__box billing__box--pay">
          <div className="label1">
            <span className="billing__label billing__label--card">
              Card Number
            </span>
            <input className="billing__input billing__input--pay" />
          </div>
          <div className="label1">
            <span className="billing__label1 billing__label1--date">
              Expiration Date
            </span>
            <input className="billing__input billing__input--pay" />
          </div>
        </div>
        <div className="billing__box billing__box--pay">
          <div className="label1">
            <span className="billing__label billing__label--card">
              Card Security Code
            </span>
            <input className="billing__input billing__input--pay" />
          </div>
          <div className="label1">
            <span className="billing__label billing__label--card">
              What is this?
            </span>
            <input className="billing__input billing__input--pay billing__none" />
          </div>
        </div>
      </div>
      <div className="billing__lockbt">
        <span className="billing__lock">
          <i className="fa fa-lock"></i>
        </span>
        <span>
          We protect our payment information using encryption to provide
          bank-level-security
        </span>
      </div>
    </section>
  );
};

export default Payment;
