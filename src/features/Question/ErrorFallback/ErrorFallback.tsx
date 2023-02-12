type PropsType = {
  error: Error
  resetErrorBoundary: () => void
}

export const ErrorFallback = ({error, resetErrorBoundary}: PropsType) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}
