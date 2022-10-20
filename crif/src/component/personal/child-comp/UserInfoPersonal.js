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

    // console.log(watch("example")); // you can watch individual input by pass the name of the input

    return (
        <div className="card-box ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Full Name * (Legal name)</label>
                    <input className="form-control" placeholder="Enter your name here"
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
                <div className="form-group">
                    <label>PAN Number*</label>
                    <input className="form-control" placeholder="Enter your PAN here" 
                        {...register("panNum", { 
                            required: true,
                            maxLength:10,
                            minLength:10,
                            pattern: /^([0-9A-Z]+)$/i
                        })} />
                    {errors?.panNum?.type === "required" && <p>This field is required</p>}
                    {errors?.panNum?.type === "maxLength" && (
                        <p>Please provide valid Pan number</p>
                    )}
                    {errors?.panNum?.type === "pattern" && (
                        <p>Alphabetical characters and Number only</p>
                    )}
                </div>
                <div className="form-group">
                    <label>Mobile Number*</label>
                    <input className="form-control" placeholder="+91"
                    {...register("mobile", { 
                        required: true,
                        maxLength:10,
                        minLength:10,
                        pattern: /^(?!0+$)\\d{10}$/i
                    })} />
                    {errors?.mobile?.type === "required" && <p>This field is required</p>}
                    {errors?.mobile?.type === "maxLength" && (
                        <p>Please provide valid mobile number</p>
                    )}
                    {errors?.mobile?.type === "pattern" && (
                        <p>(Registered with your primary bank account)</p>
                    )}
                </div>


                <div className="form-group mt-4 text-center">
                    <button className="btn" type="submit">GET MY CREDIT SCORE </button>
                </div>

            </form>
        </div>

    );
}

export default UserInfoPersonal;

