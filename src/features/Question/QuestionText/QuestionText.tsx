import React from 'react'

import ReactMarkdown from 'react-markdown'

import style from './QuestionText.module.css'

import { Task } from '../../../types/types'
import { CodeBlock } from '../../../common/components'

type PropsType = {
  task: Task
}

export const QuestionText = ({ task }: PropsType) => {
  return (
    <>
      <ReactMarkdown className={style.markdown}>{task.questionText}</ReactMarkdown>
      {task.code && (
        <CodeBlock language={task.code.lang}>{task.code.text}</CodeBlock>
      )}
      {task.author && (
        <p className={style.author}>
          Вопрос предложен{' '}
          <a
            className={style.link}
            href={`https://github.com/${task.author}`}
            target="_blank"
            rel="noreferrer"
          >
            {task.author}
          </a>
        </p>
      )}
    </>
  )
}
