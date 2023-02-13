import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs'
import { EditorView } from "@codemirror/view";


type PropsType = {
  value: string
  onChange: (value: string) => void
}

export const CodeEditor = ({ value, onChange }: PropsType) => {

  return (
    <CodeMirror
      value={value}
      extensions={[langs.json(), EditorView.lineWrapping]}
      onChange={onChange}
    />
  )
}
