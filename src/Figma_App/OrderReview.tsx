import React from 'react'

const OrderReview = () => {
  return (
   <>
   <div className='orderReview'>
    <div>
    <h2>Order Review</h2>
    <p>3 items in Cards</p>
    </div>
    <i className="fa fa-caret-down" ></i>  
   </div>
   {/* discount codes */}
   <div className='orderReview orderReview--margin'>
    <div>
    <h2>Discount Codes</h2>
    </div>
    <i className="fa fa-caret-down" ></i>  
   </div>
   {/* billing */}
   <div className='orederReview__Summary'>
      <div className="orderReview__bottom">
      <div>
    <h2>Bill Summary</h2>
    </div>
    <i className="fa fa-caret-down" ></i>  
      </div>
      <div className='orderReview__summarybox'>
      <div className='orderReview__bottom'>
        <p>Subtotal</p> <p>$3720,27</p>
      </div>
      <div className='orderReview__bottom'>
        <p>Discount</p> <p>$749</p>
      </div>
      <div className='orderReview__bottom'>
        <p>Warranty (Platinum)</p> <p>$0.00</p>
      </div>
      <div className='orderReview__bottom'>
        <p>Tax</p> <p>$228.72</p>
      </div>
      </div>
      <div className='orderReview__bottom'>
        <p>GrandTotal</p> <p>$3,349.00</p>
       
      </div>
      <div className='orderReview__Comment'>
       <span className='comment'>Order Comment</span>
       <textarea placeholder='dsgfdfg' className='orderReview__textarea'>dfgrth</textarea>
       
      </div>
      <div className='orderReview__bottom'>
        <input type="checkbox"/><label>Please Check to acknowldge our Privacy & term policy</label>
       
      </div>
      <div className='orderReview__bottom'>
       <button className='orderReview__btn'> Pay $3,349.00</button>
      </div>
      
       

   </div>
    
   

   </>
  )
}

export default OrderReview