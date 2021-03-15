import React, {Fragment} from 'react'
import './Toggle.scss'

const Toggle = (props) => {
  return (
    <div className={'toggle_container'}>
      <span className={'toggle_label'}>{props.label}</span>
      <div className={'toggle'}>
        <label className={'switch'}>
          <input type="checkbox" />
          <span className={['slider', 'round'].join(' ')}></span>
        </label>
      </div>
    </div>
  )
}

export default Toggle
