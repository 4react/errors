import React from 'react'
import { storiesOf } from '@storybook/react'
import TryStory from '../../src/components/Try.story'
import createErrorsForStory from '../../src/core/createErrorsFor.story'

storiesOf('Components', module)
  .add('Try', TryStory)
  .add('createErrorsFor', createErrorsForStory)
