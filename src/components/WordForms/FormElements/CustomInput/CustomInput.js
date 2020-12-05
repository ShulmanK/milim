import React from 'react';
import "./CustomInput.scss"

const CustomInput = (props) => {
    return (
        <div className={'InputBox'}>
            <label htmlFor={props.name} hidden={false}>{props.inputLabel}</label>
            <input className={'CustomFormInput'}
                   type="text"
                   id={props.name}
                   value={props.value}
                   placeholder={props.placeholder}
                   onChange={props.onChange}
            />
        </div>
    );
};

export default CustomInput;