import React,{useState} from 'react';
import { useForm } from "react-hook-form";

import * as Yup from 'yup';

import InputComponent from "./InputComponent";

    

    const FormComponent = () => {
        const [zip,setZip] = useState(false);
        const [showSubmit,setShowSubmit] = useState(false);

        const { register, errors,handleSubmit } = useForm({
        mode: 'onBlur',
        validationSchema : Yup.object({
            firstName: Yup.string().required('First Name required').matches(/^[A-Za-z][A-Za-z0-9 -]*$/,"Invalid User Name").min(7,"User name should have minimum of 7 characters").max(255,"User name shouldn't exceed 255 characters"),
            lastName: Yup.string().required('Last Name required').matches(/^[A-Za-z][A-Za-z0-9 -]*$/,"Invalid User Name").min(7,"User name should have minimum of 7 characters").max(255,"User name shouldn't exceed 255 characters"),
            email:Yup.string().required("Email is required").matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,"Invalid Email address"),
            password: Yup.string().required("Password is required").min(8,"Password must be atleast 8 characters long").matches(/^(?=.{8,})(?=.*[0-9])(?=.*[@#$%^&+=]).*$/,"Invalid password format"),
            phone: Yup.string().max(10,"Invalid phone number"),
            zipCode:Yup.string().required('Zip Code is required')
        })
    });

    const onSubmit = (data) => {
        const responseObj = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            phone: data.phone,
            country:{
                name:data.country,
                zipcode:data.zipCode
            }
        }
        console.log(responseObj);
      };
 
    return (
        <div className="uk-container-small uk-position-center">
            <div className="uk-card uk-card-default uk-card-body uk-margin-small" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="uk-grid">
                    {/* First Name */}
                    <div className="uk-width-1-2@m uk-margin-small-bottom">
                       <InputComponent 
                            type="text"
                            name="firstName"
                            className="uk-input"
                            id="firstName"
                            label="First Name"
                            register={register}
                            isRequired={true} 
                            error={errors.firstName}
                        />
                    </div>

                    {/* Last Name */}
                    <div className="uk-width-1-2@m uk-margin-small-bottom">
                       <InputComponent 
                            type="text"
                            name="lastName"
                            className="uk-input"
                            id="lastName"
                            label="Last Name"
                            register={register}
                            isRequired={true} 
                            error={errors.lastName}
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="uk-margin-small-bottom">
                    <InputComponent 
                            type="text"
                            name="email"
                            className="uk-input"
                            id="email"
                            label="Email"
                            register={register}
                            isRequired={true} 
                            error={errors.email}
                        />
                </div>

                {/* Password */}
                 <div className="uk-margin-small-bottom">
                    <InputComponent 
                            type="text"
                            name="password"
                            className="uk-input"
                            id="password"
                            label="Password"
                            register={register}
                            isRequired={true} 
                            error={errors.password}
                        />
                 </div>

                {/* Phone */}
                <div className="uk-margin-small-bottom">
                    <InputComponent 
                            type="number"
                            name="phone"
                            className="uk-input"
                            id="phone"
                            label="Phone"
                            register={register}
                            isRequired={true} 
                            error={errors.phone}
                        />
                 </div>

                {/*Country */}
                <p className="uk-margin-remove">Country</p>
                <select className="uk-select uk-margin-small-bottom" ref={register} name="ageGroup" onChange={(e)=> setZip((e.target.value === "us" || e.target.value === "canada")) ? true : false}>
                    <option value="india">India</option>
                    <option value="us">US</option>
                    <option value="france">France</option>
                    <option value="uk">UK</option>
                    <option value="germany">Germany</option>
                    <option value="canada">Canada</option>
                </select>

                {zip && <div className="uk-margin-small-bottom">
                    <InputComponent 
                            type="text"
                            name="zipCode"
                            className="uk-input"
                            id="zipCode"
                            label="Zip/Postal Code"
                            register={register}
                            isRequired={true} 
                            error={errors.zipCode}
                    />
                </div>}
                

                {/* Terms and services */}
                <div className="uk-margin-small-bottom">
                <InputComponent 
                    type="checkbox"
                    name="conditions"
                    className="uk-checkbox"
                    id="conditions"
                    label="I agree to the Terms of Services "
                    register={register}
                    onChange={(e)=>setShowSubmit(e.target.checked)}
                    />
                </div>
             <button type="submit" className="uk-button uk-button-primary" disabled={!showSubmit}>Sign In</button>
            </form>
            </div>
        </div>
    )
}

export default FormComponent;