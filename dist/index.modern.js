import { useRef, useState, useEffect, createElement } from 'react';
import { useInViewport } from 'react-in-viewport';

var styles = {"waiting-animation":"_styles-module__waiting-animation__Kpx-E","-webkit-animation":"_styles-module__animation__1otk9","animation":"_styles-module__animation__1otk9","fadeIn":"_styles-module__fadeIn__3uImN","slideLeft":"_styles-module__slideLeft__2zM2M","slideRight":"_styles-module__slideRight__3PgoG"};

const Animate = ({
  children,
  animationDuration,
  animationName,
  classToGive,
  customAnimationClass
}) => {
  const ref = useRef();
  const {
    inViewport,
    enterCount
  } = useInViewport(ref);
  const [animationType, setAnimationType] = useState('fadeIn');
  useEffect(() => {
    switch (animationName) {
      case 'fadeIn':
        {
          setAnimationType(styles.fadeIn);
          break;
        }

      case 'slideLeft':
        {
          setAnimationType(styles.slideLeft);
          break;
        }

      case 'slideRight':
        {
          setAnimationType(styles.slideRight);
          break;
        }

      default:
        {
          setAnimationType(customAnimationClass);
        }
    }
  }, []);
  return createElement("div", {
    ref: ref,
    style: {
      animationDuration
    },
    className: inViewport && enterCount >= 1 ? `${styles.animation} ${animationType} ${classToGive || ''}` : styles.waitingAnimation
  }, children);
};

export { Animate };
//# sourceMappingURL=index.modern.js.map
