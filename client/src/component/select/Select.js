import classes from './Select.module.scss';

const Select = ({width, defaultValue, options}) => {
    return (
        <div className={classes['select-container']}>
            <select
                style={{width: `${width}.%`}}
            >
                <option defaultValue={defaultValue}>Country</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
            </select>
        </div>
    );
}

export default Select;