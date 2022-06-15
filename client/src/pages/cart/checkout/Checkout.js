import classes from './Checkout.module.scss';
import {useForm} from "react-hook-form";
import {useState} from "react";
import Input from "../../../component/input/Input";
import Button from '../../../component/button/Button';
import BillingDetails from "./BillingDetails";
import ShipToDifferentAddress from "./ShipToDifferentAddress";
import YourOrder from "./YourOrder";
import PaymentMethod from "./PaymentMethod";

const Checkout = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [disable, setDisable] = useState(false)

    const checkHandler = (e) => {setDisable(!!e.target.checked)}

    const onSubmit = (data) => {
        debugger
    }

    return (
        <div className={classes['checkout-container']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes['form-fix-up']}>
                    <BillingDetails errors={errors} register={register} disable={disable}/>
                    <ShipToDifferentAddress errors={errors} register={register} disable={disable}/>
                </div>
                <div className={classes['check-container']}>
                    <Input
                        key={'check'}
                        errors={errors}
                        register={register}
                        required={false}
                        checkHandler={checkHandler}
                        style={{
                            width: '20px',
                            height: '20px',
                            accentColor: 'var(--swatch_10)',
                            marginRight: '10px'
                        }}
                        placeholder={'test'}
                        label={'check'}
                        innerHtml={'Use same address for shipping'}
                        type={'checkbox'}
                    />
                </div>
                <div className={classes['form-fix-down']}>
                    <YourOrder/>
                    <PaymentMethod/>
                </div>
                <>
                    <Button
                        type='submit'
                        ccsClass='normal'
                        name='Place Order'
                        justifyContent='right'
                    />
                </>
            </form>
        </div>
    )
}

export default Checkout;