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
                <h2>Check your Credit Score in 1 min <span></span></h2>
                <div className="form-group">
                    <label>Full Name * (Legal name)</label>
                    <input className="form-control" placeholder="Enter your name here"
                        {...register("firstName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[a-zA-Z][a-zA-Z\s']*$/i

                        })}
                    />
                    {errors?.firstName?.type === "required" && <p className="error">This field is required</p>}
                    {errors?.firstName?.type === "maxLength" && (
                        <p className="error">First name cannot exceed 20 characters</p>
                    )}
                    {errors?.firstName?.type === "pattern" && (
                        <p className="error">Alphabetical characters only</p>
                    )}
                </div>
                <div className="form-group">
                    <label>PAN Number*</label>
                    <input className="form-control" placeholder="Enter your PAN here"
                        {...register("panNum", {
                            required: true,
                            maxLength: 10,
                            minLength: 10,
                            pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i
                        })} />
                    {errors?.panNum?.type === "required" && <p className="error">This field is required</p>}
                    {errors?.panNum?.type === "maxLength" && (
                        <p className="error">Please provide valid Pan number</p>
                    )}
                    {errors?.panNum?.type === "minLength" && (
                        <p className="error">Please provide valid Pan number</p>
                    )}
                    {errors?.panNum?.type === "pattern" && (
                        <p className="error">Alphabetical characters and Number only</p>
                    )}
                </div>
                <div className="form-group">
                    <label>Mobile Number*</label>
                    <input className="form-control" placeholder="+91"
                        {...register("mobile", {
                            required: true,
                            maxLength: 10,
                            minLength: 10,
                            pattern: /^[789]\d{9}$$/i
                        })} />
                    {errors?.mobile?.type === "required" && <p className="error">This field is required</p>}
                    {errors?.mobile?.type === "maxLength" && (
                        <p className="error">Please provide valid mobile number</p>
                    )}
                    {errors?.mobile?.type === "minLength" && (
                        <p className="error">Please provide valid mobile number</p>
                    )}
                    {errors?.mobile?.type === "pattern" && (
                        <p className="error">(Registered with your primary bank account)</p>
                    )}
                </div>
                <div className="form-group">
                    <label>E-Mail ID*</label>
                    <input className="form-control" placeholder="Enter your email id here"
                        {...register("email", {
                            required: true,
                            type: 'email',
                            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
                        })} />
                    {errors?.email?.type === "required" && <p className="error">This field is required</p>}
                    {errors?.email?.type === "maxLength" && (
                        <p className="error">Please provide valid email</p>
                    )}
                    {errors?.email?.type === "pattern" && (
                        <p className="error">(Your email will be used as your Login ID)</p>
                    )}
                    <p className="input-hint-text">(Your email will be used as your Login ID)</p>
                </div>


                <div className="form-group">
                    <div className="checkbox">
                        <label className="terms">
                            <input type="checkbox" name="tnc"
                                {...register("tnc", {
                                    required: true,
                                })} />
                            <span className="checkmark"></span> I agree to <a href="#">Terms & Conditions</a>
                            {errors?.tnc?.type === "required" && <p className="error">This field is required</p>}
                        </label>
                    </div>
                </div>

                <div className="form-group mt-4 text-center">
                    <button className="btn" type="submit">GET MY CREDIT SCORE </button>
                </div>

            </form>
        </div>

    );
}

export default UserInfoPersonal;

