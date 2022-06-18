
import Input from '../../component/input/Input';
import classes from './test.module.scss';
import Form from "../form/Form";

const Test = () => {

    const onSubmit = (data) => console.log(data);

    let def = {
        email: ''
    }

    return (
        <div className={classes['form-general-container']}>
            <h1>useController</h1>
            <Form defaultValues={def} onSubmit={onSubmit}>
                <Input
                    type='text'
                    name='email'
                    required={true}
                    patternValue={/\S+@\S+\.\S+/}
                    message='Entered value does not match email format.'
                />
                {/*<Select name='sex' options={['Female', 'Male', 'Non']}/>*/}

                {/*<button>Submit</button>*/}
            </Form>
        </div>
    );
}

export default Test;