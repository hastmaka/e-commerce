import classes from './Tr.module.scss';
import {useState} from "react";
import PriceFormatted from "../../../component/priceFormat/PriceFormatted";
/* icons */
import {RiDeleteBin3Line, RiHeart2Fill} from 'react-icons/ri';
import {MdAddShoppingCart} from 'react-icons/md';
import {useDispatch} from "react-redux";
import {fetchData} from "../../../helper/Api";
import {cartSliceActions} from "../cart-slice";

const Tr = ({imageUrl, title, size, color, price, quantity, discount, actions, typeOfTable, orderId}) => {
    const dispatch = useDispatch();
    // debugger
    let [quantityInput, setQuantityInput ] = useState(quantity);

    const handleSub = (orderId) => {
        setQuantityInput(prevState => prevState - 1)
        dispatch(cartSliceActions.subItem(orderId));
    }
    const handleAdd = () => {
        setQuantityInput(prevState => prevState + 1)
        dispatch(cartSliceActions.addItem(orderId));
    }
    const handleDelete = (orderId) => {
        if(window.confirm('Are you want to delete this item from the cart') === true) {
            // debugger
            dispatch(cartSliceActions.deleteItemFromCart(orderId));
            // fetch(`http://localhost:5002/api/order/${orderId}`, {method: 'DELETE'}).then(res => {
            //     // debugger
            //     if(res.ok) {
            //         // debugger
            //     } else {
            //         debugger
            //     }
            // });

        }

    }

    const handleQuantityChange = () => {

    }
    // debugger
    return (
        <tr>
            {/*product*/}
            {(imageUrl && imageUrl && size && color) && <td>
                <div className={classes['product-description-container']}>
                    <div className={classes['cart-product-img']}>
                        <img src={require(`../../../images/${imageUrl}`)} alt=""/>
                    </div>
                    <div className={classes['cart-product-description']}>
                        <p>Name: <span>{title}</span></p>
                        <p>Size: <span style={{textTransform: 'uppercase'}}>{size}</span></p>
                        <p>Color: <span>{color}</span></p>
                    </div>
                </div>
            </td>}
            {/*price*/}
            {(typeOfTable === 'shoppingCart' || typeOfTable === 'wishList') && <td style={{textAlign: 'center'}}>
                <PriceFormatted
                    price={price}
                />
            </td>}
            {/*quantity*/}
            {typeOfTable === 'shoppingCart' && <td>
                <div className={classes['add-sub-container']}>
                    <div
                        className={classes.sub}
                        onClick={() => handleSub(orderId)}
                    >-
                    </div>
                    <input
                        className={classes['add-sub-input']}
                        type="text"
                        value={quantityInput}
                        onChange={handleQuantityChange}
                    />
                    <div
                        className={classes.add}
                        onClick={handleAdd}
                    >+
                    </div>
                </div>
            </td>}
            {/* stock status*/}
            {typeOfTable === 'wishList' && <td>
                <div style={{textAlign: 'center'}}>
                    {quantity > 1 ?
                        <span className='text-uppercase' style={{color: '#449658', fontWeight: 'bold'}}>in stock</span>
                        :
                        <span className='text-uppercase' style={{color: '#b93737', fontWeight: 'bold'}}>out of stock</span>
                    }

                </div>
            </td>}
            {/*total*/}
            {typeOfTable === 'shoppingCart' && <td style={{textAlign: 'center'}}>
                <PriceFormatted
                    price={price * quantity}
                />
            </td>}
            {/* add to cart */}
            {typeOfTable === 'wishList' && <td>
                <div style={{textAlign: 'center'}}>
                    <MdAddShoppingCart className={classes['add-to-cart-icon']}/>
                </div>
            </td>}
            {/* checkout*/}
            {(typeOfTable === 'checkout' && title) && <td>
                <div style={{paddingLeft: '30px', color: '#999'}}>
                    <span style={{textTransform: 'capitalize', marginRight: '3px'}}>{title}</span>
                    <span style={{marginRight: '1px'}}>x</span>
                    <span>({quantity})</span>
                </div>
            </td>}
            {(typeOfTable === 'checkout' && price) && <td>
                <div className='text-end' style={{paddingRight: '25px'}}>
                    <PriceFormatted
                        color='#999'
                        price={price * quantity}
                    />
                </div>
            </td>}
            {/*actions*/}
            {actions && <td style={{textAlign: 'center'}}>
                <div className={classes['cart-product-options']}>
                    {actions[0] === 'delete' &&
                        <RiDeleteBin3Line
                            onClick={() => handleDelete(orderId)}
                            className={classes['delete-icon']}
                        />
                    }
                    {actions[1] === 'wishList' &&
                        <>
                            <div className={classes.separator}/>
                            <RiHeart2Fill className={classes['wish-list-icon']}/>
                        </>
                    }
                </div>
            </td>}
        </tr>
    );
}

export default Tr;