var React = require('react');
var reactInViewport = require('react-in-viewport');

var styles = {"waiting-animation":"_Kpx-E","-webkit-animation":"_1otk9","animation":"_1otk9","fadeIn":"_3uImN","slideLeft":"_2zM2M","slideRight":"_3PgoG"};

var Animate = function Animate(_ref) {
  var children = _ref.children,
      animationDuration = _ref.animationDuration,
      animationName = _ref.animationName,
      classToGive = _ref.classToGive,
      customAnimationClass = _ref.customAnimationClass;
  var ref = React.useRef();

  var _useInViewport = reactInViewport.useInViewport(ref),
      inViewport = _useInViewport.inViewport,
      enterCount = _useInViewport.enterCount;

  var _React$useState = React.useState('fadeIn'),
      animationType = _React$useState[0],
      setAnimationType = _React$useState[1];

  React.useEffect(function () {
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
  return React.createElement("div", {
    ref: ref,
    style: {
      animationDuration: animationDuration
    },
    className: inViewport && enterCount >= 1 ? styles.animation + " " + animationType + " " + (classToGive || '') : styles.waitingAnimation
  }, children);
};

exports.Animate = Animate;
//# sourceMappingURL=index.js.map
