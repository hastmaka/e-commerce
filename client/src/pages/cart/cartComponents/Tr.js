import classes from './Tr.module.scss';
import {useState} from "react";
import PriceFormatted from "../../../component/priceFormat/PriceFormatted";
/* icons */
import {RiDeleteBin3Line, RiHeart2Fill} from 'react-icons/ri';
import {MdAddShoppingCart} from 'react-icons/md';

const Tr = ({imageUrl, title, size, color, price, quantity, discount, actions, typeOfTable}) => {
    // debugger
    let [quantityInput, setQuantityInput ] = useState(quantity);

    const handleSub = () => {
        setQuantityInput(prevState => prevState - 1)
    }
    const handleAdd = () => {
        setQuantityInput(prevState => prevState + 1)
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
                        onClick={handleSub}
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
                    <span>1</span>
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
                        <RiDeleteBin3Line className={classes['delete-icon']}/>}
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