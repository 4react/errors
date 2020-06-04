import React, { ComponentType, ErrorInfo } from 'react'

export interface FallbackProps {
  error: any
}

export interface TryProps {
  fallback?: ComponentType<FallbackProps>
  onError?: (error: Error, errorInfo: ErrorInfo) => any
}

export interface TryState {
  hasError: boolean
  error?: Error
}

class Try extends React.Component<TryProps, TryState> {
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error: error
    }
  }

  constructor(props: TryProps) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props
    if (onError) {
      onError(error, errorInfo)
    }
  }

  render() {
    const { fallback: Fallback, children } = this.props
    const { hasError, error } = this.state

    if (hasError && Fallback) {
      return <Fallback error={error} />
    }

    return children
  }
}

export default Try
