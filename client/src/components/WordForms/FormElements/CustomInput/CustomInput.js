import React from 'react';
import "./CustomInput.scss"

const CustomInput = (props) => {
    const {isValidate} = props
    // console.log('isValidate', isValidate)
    let attachedClasses = 'CustomFormInput';
    if(!isValidate){
        attachedClasses = 'CustomFormInput Error';
    }
    return (
        <div className={'InputBox'}>
            <label htmlFor={props.name} hidden={false}>{props.inputLabel}</label>
            <input className={attachedClasses}
                   id={props.name}
                   value={props.value}
                   placeholder={props.placeholder}
                   onChange={props.onChange}
            />
        </div>
    );
};

export default CustomInput;