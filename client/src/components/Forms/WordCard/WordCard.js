import React from 'react'
import EditIcon from '@components/UI/Icons/EditIcon'
import s from './WordCard.module.scss'

const WordCard = () => {
  return (
    <div className={s.word_form}>
      <div className={s.edit}>
        <EditIcon />
      </div>
      <div className={s.speech_part}>Verb</div>
      <div className={s.card_box}>
        <div>לאהוב</div>
        <div>любить</div>
      </div>
      <div className={s.frequency}>Learned 17 times</div>
      <div className={s.author}>Added By Alex Goldman at 10.02.2021</div>
    </div>
  )
}

export default WordCard
