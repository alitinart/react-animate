import * as React from 'react'
import styles from './styles.module.css'
import { useInViewport } from 'react-in-viewport'

interface Props {
  children: any
  animationDuration: string
  animationName: 'fadeIn' | 'slideRight' | 'slideLeft'
  classToGive?: string
  customAnimationClass?: string
}

export const Animate = ({
  children,
  animationDuration,
  animationName,
  classToGive,
  customAnimationClass
}: Props) => {
  const ref = React.useRef<any>()

  const { inViewport, enterCount } = useInViewport(ref)
  const [animationType, setAnimationType] = React.useState<string | undefined>(
    'fadeIn'
  )

  React.useEffect(() => {
    switch (animationName) {
      case 'fadeIn': {
        setAnimationType(styles.fadeIn)
        break
      }
      case 'slideLeft': {
        setAnimationType(styles.slideLeft)
        break
      }
      case 'slideRight': {
        setAnimationType(styles.slideRight)
        break
      }
      default: {
        setAnimationType(customAnimationClass)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        animationDuration
      }}
      className={
        inViewport && enterCount >= 1
          ? `${styles.animation} ${animationType} ${classToGive}`
          : styles.waitingAnimation
      }
    >
      {children}
    </div>
  )
}
