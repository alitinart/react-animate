# @alitinart/animate-react

> Animate your react components with ease

[![NPM](https://img.shields.io/npm/v/@alitinart/animate-react.svg)](https://www.npmjs.com/package/@alitinart/animate-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @alitinart/animate-react
```

## Usage

```tsx
import React, { Component } from 'react'

import Animate from '@alitinart/animate-react'
import '@alitinart/animate-react/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Animate
        animationDuration='2s'
        animationName='slideRight'
        classToGive='animation-started'
        customAnimationClass='myCustomAnimation'
      >
        <h1>Hello World 😁</h1>
      </Animate>
    )
  }
}
```

## Props

| Prop Name            | Description                                                            | Usage                                             |
| -------------------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| animationDuration    | Amount of time needed to run that animation                            | animationDuration='2s or 2ms'                     |
| animationName        | Select one of the pre made animations of this library                  | animationName='slideRight or slideLeft or fadeIn' |
| classToGive          | Select a class that is given to your element once it enters the screen | classToGive='animation-started'                   |
| customAnimationClass | Select your own animation by class                                     | customAnimationClass='myCustomAnimation'          |

## License

MIT © [alitinart](https://github.com/alitinart)
