import classes from './Tr.module.scss';
import {useState} from "react";
import PriceFormatted from "../../../component/priceFormat/PriceFormatted";
/* icons */
import {RiDeleteBin3Line, RiHeart2Fill} from 'react-icons/ri';

const Tr = ({color, imageUrl, price, quantity, discount, size, title}) => {
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
            <td>
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
            </td>
            {/*price*/}
            <td style={{textAlign: 'center'}}>
                <PriceFormatted
                    price={price}
                />
            </td>
            {/*quantity*/}
            <td>
                <div className={classes['add-sub-container']}>
                    <div
                        className={classes.sub}
                        onClick={handleSub}
                    >-</div>
                    <input
                        className={classes['add-sub-input']}
                        type="text"
                        value={quantityInput}
                        onChange={handleQuantityChange}
                    />
                    <div
                        className={classes.add}
                        onClick={handleAdd}
                    >+</div>
                </div>
            </td>
            {/*total*/}
            <td style={{textAlign: 'center'}}>
                <PriceFormatted
                    price={price * quantity}
                />
            </td>
            {/*actions*/}
            <td style={{textAlign: 'center'}}>
                <div className={classes['cart-product-options']}>
                    <RiDeleteBin3Line/>
                    <div className={classes.separator}/>
                    <RiHeart2Fill/>
                </div>
            </td>
        </tr>
    );
}

export default Tr;