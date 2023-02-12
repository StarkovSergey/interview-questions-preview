type PropsType = {
  error: Error
  resetErrorBoundary: () => void
}

export const ErrorFallback = ({error}: PropsType) => {
  return (
    <div role="alert">
      <p>В JSON есть ошибка. Ознакомься с текстом ошибки и внеси правки</p>
      <pre>{error.message}</pre>
    </div>
  )
}
