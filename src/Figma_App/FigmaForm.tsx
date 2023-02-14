import React from 'react'
import BillingForm from './BillingForm'
import OrderReview from './OrderReview'
import Payment from './Payment'
import Shipping from './Shipping'

const FigmaForm = () => {
  return (
    <div className='container'>
        {/* header */}
        <header className='navbar'>
        <img height="30px" width="130px" src='Logo.png' alt='Logo'/>
            <div>
                <span >Already have an account? </span>
                <span className='navbar__btn'> Sign In</span>
            </div>
        </header>
        {/*Invoice  */}
        <section className="billing">
           <section className=''> 
           <BillingForm/>
           <Shipping/>
            <Payment/>
           </section>  
           <section className='billing__summary'>
           <OrderReview/>
           </section>
        </section>
            
        </div>
  )
}

export default FigmaForm