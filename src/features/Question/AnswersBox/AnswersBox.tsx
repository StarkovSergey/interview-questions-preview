
import { Answer } from './Answer/Answer'
import style from './AnswersBox.module.css'
import { Task } from '../../../types/types'


type PropsType = {
  task: Task
  selectedAnswers: string[]
  setSelectedAnswers: React.Dispatch<React.SetStateAction<string[]>>
}

export const AnswersBox = ({
  task,
  selectedAnswers,
  setSelectedAnswers,
}: PropsType) => {
  return (
    <ul className={style['answers-box']}>
      {task.answers.map((answer, index) => {
        return (
          <Answer
            key={index}
            number={index}
            answer={answer}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
            type={task.type || 'checkbox'}
          />
        )
      })}
    </ul>
  )
}
