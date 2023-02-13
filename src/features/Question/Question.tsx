import { Task } from '../../types/types'
import { AnswersBox } from './AnswersBox/AnswersBox'
import { useState } from 'react'
import { QuestionText } from './QuestionText/QuestionText'
import { TaskDescription } from './TaskDescription/TaskDescription'

type PropsType = {
  task: Task
}

export const Question = (props: PropsType) => {
  const task = {
    ...props.task,
    answers: props.task.answers.map((answer, index) => ({
      ...answer,
      id: String(index)
    }))
  }
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])


  return (
    <form className="container">
      <QuestionText task={task} />
      <AnswersBox selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} task={task} />
      {task.descriptionMarkup && (
        <TaskDescription descriptionMarkup={task.descriptionMarkup} />
      )}
    </form>
  )
}
