import classes from './Burger.module.css';

const Burger = ({open, setOpen}) => {

    return (
        <div className={classes['burger-general-container']} onClick={() => setOpen(!open)}>
            <div className={
                [classes.burger, classes['bg-color-active'],
                    open ?
                        classes['burger-one-active'] :
                        classes['burger-one']
                ].join(' ')}
            />
            <div className={
                [classes.burger, classes['bg-color-active'],
                    open ?
                        classes['burger-two-active'] :
                        classes['burger-two']
                ].join(' ')}
            />
            <div className={
                [classes.burger, classes['bg-color-active'],
                    open ?
                        classes['burger-third-active'] :
                        classes['burger-third']
                ].join(' ')}
            />
        </div>
    )
}

export default Burger;



