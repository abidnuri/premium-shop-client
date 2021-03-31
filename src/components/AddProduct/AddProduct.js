import React from 'react';
import { useForm } from "react-hook-form";

const Events = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="example" defaultValue="test" ref={register} />
            <input name="exampleRequired" ref={register({ required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
};

export default Events;