import React from 'react';
import PropTypes from 'prop-types';

const { useState } = React;

/**
 * Component to chain custom animation.
 */
export default function AnimateEpisode(props) {
  const {
    children,
    effects,
    onStart,
    onComplete,
    duration,
    durationUnit,
    timingFunction,
    delay,
    delayUnit,
    iterationCount,
    direction,
    fillMode,
    ...otherProps
  } = props;
  const [animationIndex, setAnimationIndex] = useState(0);
  const lastAnimationIndex = effects.length - 1;
  const onCompleteAnimations = e => {
    setAnimationIndex(animationIndex + 1);
    if (onComplete && animationIndex === lastAnimationIndex) {
      onComplete(e);
    }
  };
  const onStartAnimations = e => {
    if (onStart && animationIndex === 0) {
      onStart(e);
    }
  };
  const Effect = effects[animationIndex % effects.length];
  const styleAnimationProps = animationIndex === 0 && {
    duration,
    durationUnit,
    timingFunction,
    delay,
    delayUnit,
    iterationCount,
    direction,
    fillMode,
  };

  if (animationIndex > lastAnimationIndex) {
    return <div {...otherProps}>{children}</div>;
  }

  return (
    <Effect
      {...otherProps}
      {...styleAnimationProps}
      onComplete={onCompleteAnimations}
      onStart={onStartAnimations}
    >
      {children}
    </Effect>
  );
}

AnimateEpisode.propTypes = {
  /**
   * The content to be animated
   */
  children: PropTypes.node.isRequired,
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
   * List of animation that must be executed in series
   */
  effects: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(React.Component)]).isRequired,
  /**
   * The fill mode of the animation
   */
  fillMode: PropTypes.oneOf(['none', 'forwards', 'backwards', 'both']),
  /**
   * The number of iteration for the animation
   */
  iterationCount: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['infinite'])]),
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
   * The timing function applied to the animation e.g.
   * linear, ease, ease-in, ease-in-out, ease-out,
   * cubic-bezier(0.1, 0.7, 1.0, 0.1) and
   * steps(number_of_steps, direction)
   * @see See [MDN timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function)
   */
  timingFunction: PropTypes.string,
};

AnimateEpisode.defaultProps = {
  delay: 0,
  delayUnit: 's',
  direction: 'normal',
  duration: 1,
  durationUnit: 's',
  fillMode: 'forwards',
  iterationCount: 1,
  onComplete: null,
  onStart: null,
  timingFunction: 'ease-in',
};
