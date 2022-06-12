import classes from './PriceFormat.module.scss';

const PriceFormatted = ({price, currencyTop, currencyFS, priceFS, decimalFS, decimalTop, oldPrice, color}) => {
    return (
        <div className={`${classes['price-formatted-container']} d-block`}>
            <span
                className={classes['currency-symbol']}
                style={{
                    top: `${currencyTop ? currencyTop : -0.3}rem`,
                    fontSize: `${currencyFS ? currencyFS : 12}px`,
                    opacity: oldPrice ? 0.5 : '',
                    color: color ? color : ''
            }}>$</span>

            {price > 0 ?
                <span
                    className={classes.price}
                    style={{
                        fontSize: `${priceFS ? priceFS : 16}px`,
                        textDecoration: oldPrice ? 'line-through' : '',
                        opacity: oldPrice ? 0.5 : '',
                        color: color ? color : ''
                }}>
              {price.toFixed(2).split('.')[0]}
            </span> : ''}

            {price > 0 ?
                <span
                    className={classes.decimal}
                    style={{
                        fontSize: `${decimalFS ? decimalFS : 10}px`,
                        top: `${decimalTop ? decimalTop : -0.3}rem`,
                        textDecoration: oldPrice ? 'line-through' : '',
                        opacity: oldPrice ? 0.5 : '',
                        color: color ? color : ''
                }}>
              {price.toFixed(2).split('.')[1]}
            </span> : ''}
        </div>
    );
}

export default PriceFormatted;