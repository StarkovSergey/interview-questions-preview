import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import style from './Checkbox.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type PropsType = DefaultInputPropsType & {}

export const Checkbox = ({ ...restProps }: PropsType) => {
  return <input type="checkbox" className={style.checkbox} {...restProps} />
}
