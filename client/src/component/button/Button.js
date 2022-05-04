import classes from './Button.module.css';

const Button = ({type, ccsClass, name, handler, style}) => {
  // debugger
  return (
    <button
      type={type}
      className={classes[`${ccsClass}`]}
      style={style}
      onClick={handler}
    >{name}
    </button>
  );
}

export default Button;