const createErrorsFor = (libraryName: string) => (
  (context: string, message?: string) => {
    let errorMessage = `${libraryName} | ${context}`
    if (message) {
      errorMessage += ` | ${message}`
    }
    throw new Error(errorMessage)
  }
)

export default createErrorsFor
