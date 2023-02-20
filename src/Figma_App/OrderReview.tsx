import React, { useRef, useState } from "react";
const OrderReview = () => {
  const [flag, setFlag] = useState({ show: "none", count: false });
  const boxRef = useRef<any>([]);
  // for collapse 
  const collapsable = (ind: any) => {
    if (!flag.count) {
      boxRef.current[ind].classList.remove("none");
      flag.count = true;
      boxRef.current[ind].classList.add("block");
    } else {
      boxRef.current[ind].classList.remove("block");
      flag.count = false;
      boxRef.current[ind].classList.add("none");
    }
    setFlag({ ...flag });
  };
  return (
    <>
    {/* orderReview */}
      <div className="orderReview">
        <div className="orderReview--card" onClick={() => collapsable(0)}>
          <div>
            <h2>Order Review</h2>
            <p>3 items in Cards</p>
          </div>
          <i className="fa fa-caret-down"></i>
        </div>
        <div
          className={`${flag.show} card--text`}
          id="card"
          ref={(ref) => (boxRef.current[0] = ref)}
        >
          <p>
            With the online text generator you can process your personal Lorem
            Ipsum enriching it with html elements that define its structure,
            with the possibility to insert external links, but not only.
          </p>
        </div>
      </div>
      {/* discount block */}
      <div className="orderReview orderReview--margin">
        <div className="orderReview--card" onClick={() => collapsable(1)}>
          <div>
            <h2>Discount Codes</h2>
          </div>
          <i className="fa fa-caret-down"></i>
        </div>
        <div
          className={`${flag.show} card--text`}
          id="discount"
          ref={(ref) => (boxRef.current[1] = ref)}
        >
          <p>
            With the online text generator you can process your personal Lorem
            Ipsum enriching it with html elements that define its structure,
            with the possibility to insert external links, but not only.
          </p>
        </div>
      </div>
      {/* billing */}
      <div className="orederReview__Summary">
        <div className="orderReview__bottom" onClick={() => collapsable(2)}>
          <div>
            <h2>Bill Summary</h2>
          </div>
          <i className="fa fa-caret-down"></i>
        </div>
        <div className="block" ref={(ref) => (boxRef.current[2] = ref)} id="bill">
          <div className="orderReview__summarybox">
            <div className="orderReview__bottom">
              <p>Subtotal</p> <p>$3720,27</p>
            </div>
            <div className="orderReview__bottom">
              <p>Discount</p> <p>$749</p>
            </div>
            <div className="orderReview__bottom">
              <p>Warranty (Platinum)</p> <p>$0.00</p>
            </div>
            <div className="orderReview__bottom">
              <p>Tax</p> <p>$228.72</p>
            </div>
          </div>
          <div className="orderReview__bottom">
            <p>GrandTotal</p> <p>$3,349.00</p>
          </div>
          <div className="orderReview__Comment">
            <span className="comment">Order Comment</span>
            <textarea
              placeholder=""
              className="orderReview__textarea"
            ></textarea>
          </div>
          <div>
            <input type="checkbox" className="checkbox" />
            <label>Please Check to acknowldge our Privacy & term policy</label>
          </div>
          <div className="orderReview__bottom">
            <button className="orderReview__btn"> Pay $3,349.00</button>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="Norton Icon.png" height="30px" width="100px" alt=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderReview;
