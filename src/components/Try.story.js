import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'
import Try from './Try'
import on from '../../.storybook/utils/on'

const MyFallback = ({ error }) => `Error fallback: ${error}`

const MyStoryContent = ({ throwError, errorMessage }) => {
  if (throwError) {
    throw new Error(errorMessage)
  }
  return "Normal content"
}

const TryStory = () => {
  const props = {
    fallback: boolean('fallback', true, 'props') ? MyFallback : undefined,
    onError: on('error')
  }

  const contentProps = {
    throwError: boolean('throw error', false, 'content'),
    errorMessage: text('error message', "Custom Message", 'content')
  }

  return (
    <Try {...props}>
      <MyStoryContent {...contentProps} />
    </Try>
  )
}

export default TryStory
