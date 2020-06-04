import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'
import createErrorsFor from './createErrorsFor'
import Try from '../components/Try'

const throws = createErrorsFor('@4react/errors')

const MyFallback = ({ error }) => error.toString()

const MyStoryContent = ({ throwError, context, message }) => {
  if (throwError) {
    throws(context, message)
  }
  return 'Normal content'
}

const createErrorsForStory = () => {
  const contentProps = {
    throwError: boolean('throw error', false, 'content'),
    context: text('context', 'Storybook', 'params'),
    message: text('message', 'Custom error message', 'params')
  }

  return (
    <Try fallback={MyFallback}>
      <MyStoryContent {...contentProps} />
    </Try>
  )
}

export default createErrorsForStory
