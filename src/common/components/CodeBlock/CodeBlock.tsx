import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

import style from './CodeBlock.module.css'
type PropsType = {
  children: string
  language: string
}

export const CodeBlock = ({ language, children }: PropsType) => {
  return (
    <div className={style.box}>
      <SyntaxHighlighter language={language} style={oneLight} wrapLongLines={true}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
