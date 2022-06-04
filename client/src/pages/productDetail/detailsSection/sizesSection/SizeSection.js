import classes from './SizeSection.module.css';
import {Fragment} from "react";

const SizeSection = ({size, id, onClickHandle, selected_size_id}) => {
    // debugger
    return (
        <Fragment>
            <label
                htmlFor="s-size"
                id={id}
                className={`${id === selected_size_id ? classes.checked : ''} ${classes['size-radio-btn']}`}
                onClick={() => {
                    onClickHandle(size.colors, size)
                }}>{size.size_name}</label>
        </Fragment>
    )
}

export default SizeSection;