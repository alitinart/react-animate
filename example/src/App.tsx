/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'

import { Animate } from '@alitinart/animate-react'
import '@alitinart/animate-react/dist/index.css'

const App = () => {
  return (
    <Animate animationDuration='2s' animationName='slideRight'>
      <h1>Hello World 😁</h1>
    </Animate>
  )
}

export default App
