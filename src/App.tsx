import './App.css'
import { CodeEditor } from './features/CodeEditor/CodeEditor'
import { useState } from 'react'
import { Question } from './features/Question/Question'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './features/Question/ErrorFallback/ErrorFallback'

function App() {
  const [value, setValue] = useState(initialValue)

  const editorHandler = (value: string) => {
    setValue(value)
  }

  return (
    <>
      <CodeEditor value={value} onChange={editorHandler} />
      <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[value]} onReset={() => {
      }}>
        <Question value={value} />
      </ErrorBoundary>
    </>
  )
}

const initialValue = '{\n' + '  "questionText": "Как можно сделать глубокую копию этого объекта?",\n' + '  "type": "checkbox",\n' + '  "code": {\n' + '    "lang": "js",\n' + '    "text": "const user = {\\n  name: \'Sonya\',\\n  age: 28,\\n  friends: [\'Vasilisa\', \'Kate\', \'Brendan\'],\\n}\\n\\nlet userDeepCopy"\n' + '  },\n' + '  "answers": [\n' + '    {\n' + '      "text": "Вручную, используя spread-оператор следующим образом: `{...user, friends: [...user.friends]}`",\n' + '      "isCorrect": true\n' + '    },\n' + '    {\n' + '      "text": "Использовать метод Object.assign: `Object.assign(userDeepCopy, user)`",\n' + '      "isCorrect": false\n' + '    },\n' + '    {\n' + '      "text": "Использовать методы встроенного JSON-объекта: `JSON.parse(JSON.stringify(user))`",\n' + '      "isCorrect": true\n' + '    },\n' + '    {\n' + '      "text": "С помощью WebAPI-метода `structuredClone`",\n' + '      "isCorrect": true\n' + '    }\n' + '  ],\n' + '  "author": "YourGitHubName",\n' + '  "descriptionMarkup": "Следует помнить, что `Object.assign` и spread-оператор делают неглубокую копию (shallow copy).\\n\\n`structuredClone` - новое браузерное API для глубокого копирования. Почитать о нём можно на [MDN](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)"\n' + '}'

export default App
