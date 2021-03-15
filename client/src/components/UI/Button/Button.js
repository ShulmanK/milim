import React from 'react'
import s from './Button.module.scss'

const Button = () => {
	return (
		<div>
			<button className={s.Button}>+ Create a word</button>
		</div>
	);
};

export default Button;