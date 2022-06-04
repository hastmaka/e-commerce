import classes from './Button.module.css';

const Button = ({type, ccsClass, name, handler, style}) => {
    // debugger
    return (
        <button
            type={type}
            className={`${classes[`${ccsClass}`]} ${classes['custom-btn']}`}
            style={style}
            onClick={handler}
        >{name}
        </button>
    );
}

export default Button;