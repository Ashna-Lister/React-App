import React from 'react';
import { useForm } from "react-hook-form";

const InputComponent = ({register,error,label,isRequired,id,...inputProps}) => {

    return (
        <React.Fragment>
            {inputProps.className !=="uk-checkbox" && <p className="uk-margin-remove">{label} {isRequired && "*"} </p>}
            
            <input 
                ref={register} 
                id={id}
                {...inputProps}
            />
            {inputProps.className ==="uk-checkbox" && <label> {label} </label>}
            {error && (
                <i className="uk-text-small	uk-text-danger">
                  {error.message}
               </i>
            )}

        </React.Fragment>
    )
}

export default InputComponent;