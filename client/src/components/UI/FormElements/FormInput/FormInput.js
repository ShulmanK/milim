import React from 'react'
import './FormInput.scss'
import TranslateIcon from '@components/UI/Icons/TranslateIcon'
import HebrewIcon from '@components/UI/Icons/HebrewIcon'

const FormInput = (props) => {
  const {isValidate} = props
  // console.log('isValidate', isValidate)
  let attachedClasses = 'FormInput'
  if (!isValidate) {
    attachedClasses = 'FormInput InputError'
  }
  return (
    <div className={'InputBox'}>
      <div className={'InputLabel'} htmlFor={props.name} hidden={false}>
        {props.label}
      </div>
      <div className="InputContainer">
        <div className={'IconLabel'}>
            {props.icon === 'hebrew' ? <HebrewIcon/> :  <TranslateIcon/>}
        </div>
        <input
          className={attachedClasses}
          id={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  )
}

export default FormInput
