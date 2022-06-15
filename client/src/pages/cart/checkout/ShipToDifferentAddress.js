import classes from "./Checkout.module.scss";
import Input from "../../../component/input/Input";

const shipToDifferentAddressItems = [
    {name: 'name-diff', placeholder: 'Enter your name...'},
    {name: 'email-diff', placeholder: 'Enter your email...', patternValue: /\S+@\S+\.\S+/, message: 'Entered value does not match email format.'},
    {name: 'phone-diff', placeholder: 'Enter your phone...'},
    {name: 'address-diff', placeholder: 'Address'},
    {name: 'state-diff', placeholder: 'State'},
    {name: 'zipCode-diff', placeholder: 'Zip-Code'}
]

const ShipToDifferentAddress = ({errors, register, disable}) => {
    return (
        <div className={classes['ship-to-different-address']}>
            <h4 className={`text-uppercase`}>SHIP TO DIFFERENT ADDRESS</h4>
            {shipToDifferentAddressItems.map(item =>
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
                    ccsClass={item.disabled ? 'disabled' : ''}
                    patternValue={item.patternValue}
                    patternErrorMessage={item.message}
                    minLengthValue={item.minLengthValue}
                    minLengthMessage={item.minLengthMessage}
                />
            )}
        </div>
    );
}

export default ShipToDifferentAddress;