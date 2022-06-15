import classes from './Button.module.scss';

const Button = ({type, ccsClass, name, handler, justifyContent}) => {
    // debugger
    return (
        <div
            className={classes['btn-container']}
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent:
                    justifyContent === 'center' ? 'center' :
                    justifyContent === 'right' ? 'flex-end' :
                    justifyContent === 'left' ? 'flex-start' : ''

            }}>
            <button
                type={type}
                className={`${classes[`${ccsClass}`]} ${classes['custom-btn']}`}
                onClick={handler}
            >{name}
            </button>
        </div>
    );
}

export default Button;

/*

type='submit' - type of button typically submit
cssClass='normal success danger coupon' - for styling the button
name='send' - innerHtml of the element
handler - function to handle the btn click
justifyContent='left center right' - to position the btn inside de div

*/