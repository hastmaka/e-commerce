import classes from './ShippingAndPayment.module.css';
import Button from "../../component/button/Button";

const ShippingAndPayment = () => {
  return (
    <div className={classes['checkout-shipping-payment']}>

      <div className={classes.shipping}>
        <div className={classes.title}>
          <div>Shipping address</div>
          <div><a href='#'>Change</a></div>
        </div>
        <div>16950 N BAY RD 1014 BUILDING 2
          NORTH MIAMI BEACH, FL 33160-4240
          United States
        </div>
        <div>7869526589</div>
        <div><a href='#'>Add Delivery Instruction</a></div>
      </div>

      <div className={classes['payment-method']}>
        <div className={classes.title}>
          <div>Payment method</div>
          <div><a href='#'>Change</a></div>
        </div>
        <div>VISA ending in 5487</div>
      </div>

      <div className={classes['payment-method']}>
        <div className={classes.title}>Add a gift card, promotion code, or voucher</div>
        <div>
          <input type="text"/>
          <Button
            type='coupon'
            name='Apply'
          />
        </div>
      </div>
    </div>
  )
}

export default ShippingAndPayment;