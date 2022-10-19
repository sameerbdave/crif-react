import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";


const UserInfoPersonal = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }; // your form submit function which will invoke after successful validation

    console.log(watch("example")); // you can watch individual input by pass the name of the input

    return (
        <div className="card-box ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        {...register("firstName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        })}
                    />
                    {errors?.firstName?.type === "required" && <p>This field is required</p>}
                    {errors?.firstName?.type === "maxLength" && (
                        <p>First name cannot exceed 20 characters</p>
                    )}
                    {errors?.firstName?.type === "pattern" && (
                        <p>Alphabetical characters only</p>
                    )}
                </div>



                <label>Laste Name</label>
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                {errors?.lastName?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                )}
                <label>Age</label>a
                <input {...register("age", { min: 18, max: 99 })} />
                {errors.age && (
                    <p>You Must be older then 18 and younger then 99 years old</p>
                )}
                <input type="submit" />
            </form>
        </div>

    );
}

export default UserInfoPersonal;

