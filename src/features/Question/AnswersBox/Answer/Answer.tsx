import ReactMarkdown from 'react-markdown'

import style from './Answer.module.css'

import { AnswerType, QuestionType } from 'types/types'
import { Checkbox, RadioButton } from '../../../../common/components'

type PropsType = {
  answer: AnswerType
  number: number
  selectedAnswers: string[]
  setSelectedAnswers: React.Dispatch<React.SetStateAction<string[]>>
  type: QuestionType
}

export const Answer = ({
  answer,
  setSelectedAnswers,
  selectedAnswers,
  type,
}: PropsType) => {
  const toggleAnswer = () => {

    if (selectedAnswers.includes(answer.id)) {
      if (type === 'radio') return

      setSelectedAnswers(selectedAnswers.filter(currAnswer => currAnswer !== answer.id))
    } else {
      if (type === 'radio') {
        setSelectedAnswers([answer.id])
      } else {
        setSelectedAnswers([...selectedAnswers, answer.id])
      }
    }
  }

  return (
    <li className={style.box}>
      <label className={style.label}>
        {type === 'checkbox' ? (
          <Checkbox
            onChange={toggleAnswer}
            checked={selectedAnswers.includes(answer.id)}
          />
        ) : (
          <RadioButton
            name="question"
            onChange={toggleAnswer}
            checked={selectedAnswers.includes(answer.id)}
          />
        )}
        {/*<FormattedText text={answer.text} />*/}
        <ReactMarkdown className={style.markdown}>{answer.text}</ReactMarkdown>
      </label>
    </li>
  )
}
