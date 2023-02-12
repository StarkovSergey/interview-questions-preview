import React from 'react'

import ReactMarkdown from 'react-markdown'

import style from './TaskDescription.module.css'

type PropsType = {
  descriptionMarkup: string
}

export const TaskDescription = ({ descriptionMarkup }: PropsType) => {
  return (
    <div className={style.box}>
      <h2 className={style.title}>Заметка</h2>
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => <a target="_blank" rel="noopener noreferrer" {...props} />,
        }}
      >
        {descriptionMarkup}
      </ReactMarkdown>
    </div>
  )
}
