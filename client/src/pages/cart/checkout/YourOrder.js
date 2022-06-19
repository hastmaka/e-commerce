import classes from "./Checkout.module.scss";
import {useSelector} from "react-redux";
import Tr from "../cartComponents/Tr";
import YourOrderExtraTr from "./YourOrderExtraTr";

const YourOrder = () => {
    const totalPrice = useSelector(store => store.cart.totalPrice);
    const productQuantity = useSelector(store => store.cart.productQuantity);
    debugger
    let yourOrderExtraTr = [
        {title: 'Tax', price: (totalPrice*0.07), color: '#999'},
        {title: 'Cart Subtotal', price: (totalPrice * 0.07) + totalPrice, color: '#999'},
        {title: 'Shipping and Handling', price: 15, color: '#999'},
        {title: 'Order Total', price: (totalPrice * 0.07) + totalPrice + 15, color: '#c87065'}
    ]
    return (
        <div className={classes['your-order']}>
            <h4 className={`text-uppercase`}>Your order</h4>
            <table className={`${classes['custom-table']} table-stripped`}>
                <thead>
                <tr>
                    <th>Product</th>
                    <th className='text-end'>Total</th>
                </tr>
                </thead>
                <tbody>
                    {productQuantity.map(item =>
                        <Tr
                            key={item.id}
                            typeOfTable='checkout'
                            price={item.price}
                            quantity={item.quantity}
                            title={item.title}
                        />
                    )}
                    {yourOrderExtraTr.map(item =>
                        <YourOrderExtraTr
                            key={item.title}
                            title={item.title}
                            price={item.price}
                            color={item.color}
                        />
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default YourOrder;