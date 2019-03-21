import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid';

function setProgress({ state, content }) {
  return `
      ${state} {
         ${content}
      }
   `;
}

function setAnimation(props) {
  const {
    shouldAnimate,
    animationName,
    duration,
    durationUnit,
    timingFunction,
    delay,
    delayUnit,
    iterationCount,
    direction,
    fillMode,
  } = props;
  if (shouldAnimate) {
    const animation = [
      animationName,
      `${duration}${durationUnit}`,
      timingFunction,
      `${delay}${delayUnit}`,
      iterationCount,
      direction,
      fillMode,
    ].join(' ');
    return `animation: ${animation}`;
  }

  return '';
}

/**
 * It makes the translation to the css commands to create animation.
 * In case a specific animation is added to a different target, then,
 * `{props => setAnimation({ ...props, animationName: uuid.v4() })};`
 * below will make sure the onStart and onComplete keep tracking of
 * time to be dispatched.
 *
 * @example AnimateProxy.md
 */
const AnimateProxy = React.memo(styled.div`
  & {
    ${props => props.defaultContainer};
    ${props => setAnimation({ ...props, animationName: uuid.v4() })};
  }

  ${props => props.target} {
    ${props => props.default} ${setAnimation};
  }

  @keyframes ${props => props.animationName} {
    ${props => (props.keyframes || []).map(setProgress)};
  }
`);

AnimateProxy.propTypes = {
  /**
   * The animation name
   */
  animationName: PropTypes.string,
  /**
   * The duration of the animation
   */
  duration: PropTypes.number,
  /**
   * The duration unit of the animation
   */
  durationUnit: PropTypes.oneOf(['s', 'mx']),
  /**
   * The timing function applied to the animation e.g.
   * linear, ease, ease-in, ease-in-out, ease-out,
   * cubic-bezier(0.1, 0.7, 1.0, 0.1) and
   * steps(number_of_steps, direction)
   * @see See [MDN timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function)
   */
  timingFunction: PropTypes.string,
  /**
   * The delay to start the animation
   */
  delay: PropTypes.number,
  /**
   * The delay unit of the animation
   */
  delayUnit: PropTypes.string,
  /**
   * The number of iteration for the animation
   */
  iterationCount: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['infinite'])]),
  /**
   * The direction of the animation
   */
  direction: PropTypes.oneOf(['normal', 'reverse', 'alternate', 'alternate-reverse']),
  /**
   * The fill mode of the animation
   */
  fillMode: PropTypes.oneOf(['none', 'forwards', 'backwards', 'both']),
  /**
   * The styles applied to the container
   */
  defaultContainer: PropTypes.string,
  /**
   * The styles applied to the target. It may overrides
   * the container when this matches the target.
   */
  default: PropTypes.string,
  /**
   * The keyframes list with { state, content }
   */
  keyframes: PropTypes.arrayOf(
    PropTypes.shape({ state: PropTypes.string, content: PropTypes.string })
  ),
  /**
   * Indicates whether the animation should be performed
   */
  shouldAnimate: PropTypes.bool,
  /**
   * The target of the animation
   */
  target: PropTypes.string,
};

AnimateProxy.defaultProps = {
  animationName: 'undefined',
  duration: 1,
  durationUnit: 's',
  timingFunction: 'ease-in',
  delay: 0,
  delayUnit: 's',
  iterationCount: 1,
  direction: 'normal',
  fillMode: 'forwards',
  defaultContainer: '',
  default: '',
  keyframes: [],
  shouldAnimate: true,
  target: '&',
};

/** @ignore */
export default AnimateProxy;
