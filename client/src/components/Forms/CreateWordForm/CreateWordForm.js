import React from 'react'
import s from './CreateWordForm.module.scss'
import FormInput from '@components/UI/FormElements/FormInput/FormInput'
import Toggle from '@components/UI/Toggle/Toggle'
import Button from '@components/UI/Button/Button'

const CreateWordForm = () => {
  return (
    <div className={s.word_form}>
      <div className={s.text}>Part of speech</div>

      <div className={s.parts_speech_carousel}>
        <button className={s.arrow_btn}>
          <span className="material-icons">arrow_left</span>
        </button>
        <div className={s.text_bold}>Verb</div>
        <button className={s.arrow_btn}>
          <span className="material-icons">arrow_right</span>
        </button>
      </div>

      <div className={s.input_section}>
        <FormInput label="word" icon={'hebrew'} />
        <FormInput label="infinitive" icon={'hebrew'} />
        <FormInput label="translation" icon={'translate'} />
      </div>

      <div className={s.toggle_section}>
        <Toggle label={'Public'} />
        <Toggle label={'Full Form'} />
      </div>

      <div className={s.button_section}>
        <Button/>
      </div>

     
    </div>
  )
}

export default CreateWordForm
