import React from 'react';
import PropTypes from 'prop-types';
import useAnimateOnChange from './useAnimateOnChange';
import useStartAnimateOnUpdate from './useStartAnimateOnUpdate';
import AnimateProxy from './AnimateProxy';

const { useRef } = React;

export default Animate;

// @example ./extra.examples.md

/**
 * Basic component to create animations
 * @example ./Animate.md
 */
function Animate(props) {
  const {
    children,
    onComplete,
    onStart,
    shouldAnimate,
    startWithAnimation,
    maxAnimations,
    ...otherProps
  } = props;
  const countAnimationRef = useRef(0);
  const [hash, childrenContent] = useAnimateOnChange(children);
  const [shouldAnimateOnUpdate] = useStartAnimateOnUpdate(childrenContent);
  const onCompleteAnimation = e => {
    countAnimationRef.current += 1;
    if (onComplete) {
      onComplete(e);
    }
  };
  const allowToAnimate =
    shouldAnimate &&
    countAnimationRef.current < maxAnimations &&
    (startWithAnimation || shouldAnimateOnUpdate);

  if (!allowToAnimate) {
    return childrenContent;
  }

  return (
    <AnimateProxy
      {...otherProps}
      key={hash}
      onAnimationEnd={onCompleteAnimation}
      onAnimationStart={onStart}
      shouldAnimate={allowToAnimate}
    >
      {childrenContent}
    </AnimateProxy>
  );
}

Animate.propTypes = {
  /**
   * The animation name
   */
  animationName: PropTypes.string,
  /**
   * The content to be animated
   */
  children: PropTypes.node.isRequired,
  /**
   * The styles applied to the target. It may overrides
   * the container when this matches the target.
   */
  default: PropTypes.string,
  /**
   * The styles applied to the container
   */
  defaultContainer: PropTypes.string,
  /**
   * The delay to start the animation
   */
  delay: PropTypes.number,
  /**
   * The delay unit of the animation
   */
  delayUnit: PropTypes.string,
  /**
   * The direction of the animation
   */
  direction: PropTypes.oneOf(['normal', 'reverse', 'alternate', 'lternate-reverse']),
  /**
   * The duration of the animation
   */
  duration: PropTypes.number,
  /**
   * The duration unit of the animation
   */
  durationUnit: PropTypes.oneOf(['s', 'mx']),
  /**
   * The fill mode of the animation
   */
  fillMode: PropTypes.oneOf(['none', 'forwards', 'backwards', 'both']),
  /**
   * The number of iteration for the animation
   */
  iterationCount: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['infinite'])]),
  /**
   * The keyframes list with { state, content }
   */
  keyframes: PropTypes.arrayOf(
    PropTypes.shape({ state: PropTypes.string, content: PropTypes.string })
  ),
  /**
   * Total of animations allow before being invalidated
   */
  maxAnimations: PropTypes.number,
  /**
   * Event triggered when animation is completed
   * @param {AnimationEvent} event - The native `AnimationEvent`
   */
  onComplete: PropTypes.func,
  /**
   * Event triggered when animation is started
   * @param {AnimationEvent} event - The native `AnimationEvent`
   */
  onStart: PropTypes.func,
  /**
   * Indicates whether the animation should be performed
   */
  shouldAnimate: PropTypes.bool,
  /**
   * Indicates whether the animation should be performed in the first rendering
   */
  startWithAnimation: PropTypes.bool,
  /**
   * The target of the animation
   */
  target: PropTypes.string,
  /**
   * The timing function applied to the animation e.g.
   * linear, ease, ease-in, ease-in-out, ease-out,
   * cubic-bezier(0.1, 0.7, 1.0, 0.1) and
   * steps(number_of_steps, direction)
   * @see See [MDN timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function)
   */
  timingFunction: PropTypes.string,
};

Animate.defaultProps = {
  animationName: 'undefined',
  default: '',
  defaultContainer: '',
  delay: 0,
  delayUnit: 's',
  direction: 'normal',
  duration: 1,
  durationUnit: 's',
  fillMode: 'forwards',
  iterationCount: 1,
  keyframes: [],
  maxAnimations: Number.MAX_VALUE,
  onComplete: null,
  onStart: null,
  shouldAnimate: true,
  startWithAnimation: false,
  target: '&',
  timingFunction: 'ease-in',
};
