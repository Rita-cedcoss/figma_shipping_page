import React from "react";

const Shipping = () => {
  return (
    <section className="billing__form">
      <h3 style={{ paddingLeft: "25px" }}>Shipping Method</h3>
      <div className="billing__shipping billing__shipping--track ">
        <input type="radio" /> <label>$2.99</label>
        <span>USPS 1st Class With Tracking (5-13days) COVID 19 Delay</span>
        <img src="image 36.png"></img>
      </div>
      <div className="billing__shipping">
        <input type="radio" /> <label>$2.99</label>
        <span>USPS 1st Class With Tracking (5-13days) COVID 19 Delay</span>
        <img src="image 36.png"></img>
      </div>
    </section>
  );
};

export default Shipping;
