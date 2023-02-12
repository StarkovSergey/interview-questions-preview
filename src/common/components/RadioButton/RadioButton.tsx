import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import style from './RadioButton.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type PropsType = DefaultInputPropsType & {}

export const RadioButton = ({ ...restProps }: PropsType) => {
  return <input type="radio" className={style.radio} {...restProps} />
}
