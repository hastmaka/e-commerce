import classes from './ColorSection.module.css';
import {Fragment} from "react";

const ColorSection = ({color, selected_color_id}) => {
  let select = color.color_color_id === selected_color_id ? 'select' : ''
  return (
    <Fragment>
      <input
        type={"checkbox"}
        className={`${classes['color-radio-btn']} ${select}`}
        style={{background: `${color.color_color_id}`}}
      />
    </Fragment>
  )
}

export default ColorSection;