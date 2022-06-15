import classes from "./Checkout.module.scss";
import Input from "../../../component/input/Input";

const billingDetailsItems = [
    {name: 'name', placeholder: 'Enter your name...'},
    {name: 'email', placeholder: 'Enter your email...', patternValue: /\S+@\S+\.\S+/, message: 'Entered value does not match email format.'},
    {name: 'phone', placeholder: 'Enter your phone...'},
    {name: 'address', placeholder: 'Address'},
    {name: 'state', placeholder: 'State'},
    {name: 'zipCode', placeholder: 'Zip-Code'}
]

const BillingDetails = ({errors, register, disable}) => {
    // debugger
    return (
        <div className={classes['billing-detail']}>
            <h4 className={`text-uppercase`}>billing details</h4>
            {billingDetailsItems.map(item =>
                <Input
                    key={item.name}
                    errors={errors}
                    register={register}
                    required={true}
                    disable={disable}
                    value={item.value}
                    style={{width: '100%'}}
                    placeholder={item.placeholder}
                    label={item.name}
                    type={item.type}
                    patternValue={item.patternValue}
                    patternErrorMessage={item.message}
                    minLengthValue={item.minLengthValue}
                    minLengthMessage={item.minLengthMessage}
                />
            )}
        </div>
    );
}

export default BillingDetails;