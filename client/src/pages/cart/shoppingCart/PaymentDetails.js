import classes from "./ShoppingCart.module.scss";
import PriceFormatted from "../../../component/priceFormat/PriceFormatted";

const PaymentDetails = ({totalPrice}) => {
    return (
        <div className={classes['payment-details']}>
            <h4 className={`text-uppercase`}>Payment details</h4>
            <table className='table'>
                <tbody>
                <tr>
                    <td className='text-left'>Cart Subtotal</td>
                    <td className='text-end'>
                        <PriceFormatted
                            price={totalPrice}
                            color='#999'
                        />
                    </td>
                </tr>
                <tr>
                    <td className='text-left'>Taxes</td>
                    <td className='text-end'>
                        <PriceFormatted
                            price={totalPrice * 0.07}
                            color='#999'
                        />
                    </td>
                </tr>
                <tr>
                    <td className='text-left'>Coupon Discount</td>
                    <td className='text-end'>0%</td>
                </tr>
                <tr>
                    <td className='text-left' style={{color: '#c87065'}}>Order Total</td>
                    <td className='text-end' >
                        <PriceFormatted
                            price={(totalPrice * 0.07) + totalPrice}
                            color={'#c87065'}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PaymentDetails;