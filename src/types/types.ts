export type Task = {
  id: string
  questionText: string
  answers: AnswerType[]
  type?: QuestionType
  code?: {
    lang: string
    text: string
  }
  author?: string
  descriptionMarkup?: string
}

export type AnswerType = {
  id: string
  text: string
  isCorrect: boolean
}

export type QuestionType = 'radio' | 'checkbox'
