import {useForm} from "react-hook-form";

const Test = () => {
    const {reset, watch, register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        debugger
    }
    const selectAll = watch('selectAll');
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <label htmlFor="">
                    <input {...register('selectAll')} type='checkbox'/>
                    selectAll
                </label>
                <label htmlFor="">
                    <input
                        type='checkbox'
                        value='all'
                        checked={selectAll}
                        {...register('one', {
                            required: {
                                value: true,
                                message: 'This field is required'
                            }
                        })}
                    />
                    {errors.one && <span>This field is required</span>}
                </label>
                <input {...register('two')} type='text' disabled={true}/>
                <button type='submit'>click</button>
            </form>
        </div>
    );
}

export default Test;