/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'

import { Animate } from '@alitinart/react-animate'
import '@alitinart/react-animate/dist/index.css'
import './index.css'

const App = () => {
  return (
    <Animate animationDuration='1s' customAnimationClass='customAnimation'>
      <h1>Hello World 😁</h1>
    </Animate>
  )
}

export default App
