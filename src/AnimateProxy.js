import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Creates the style markup for a keyframe.
 * @param {object} keyframe - it is an object with state and content
 * @returns {string} keyframe
 */
function getKeyframeStyles({ state, content }) {
  return `
      ${state} {
         ${content}
      }
   `;
}

function getAnimationTokens() {
  return [
    'var(--animation-duration)',
    'var(--animation-timing-function)',
    'var(--animation-delay)',
    'var(--animation-iteration-count)',
    'var(--animation-direction)',
    'var(--animation-fill-mode)',
  ];
}

/**
 * Applies the animmation css property with the combination of
 * custom animation properties.
 * @param {object} props
 * @returns {string} animation
 */
function getAnimationStyles(props) {
  const tokens = getAnimationTokens();
  return `animation: ${props.animationName} ${tokens.join(' ')};`;
}

/**
 * Applies animation to the container and its content.
 * @param {object} props
 * @returns {string} styles
 */
function applyAnimation(props) {
  return `
    & {
      ${props.defaultContainer}
    }

    ${props.target} {
      ${props.default}
      ${getAnimationStyles(props)}
    }

    @keyframes ${props.animationName} {
      ${(props.keyframes || []).map(getKeyframeStyles).join('\n')}
    }
  `;
}

/**
 * It makes the translation to the css commands to create animation.
 * In case a specific animation is added to a different target, then,
 * `{props => getAnimationStyles({ ...props, animationName: uuid.v4() })};`
 * below will make sure the onStart and onComplete keep tracking of
 * time to be dispatched.
 */
const AnimateProxy = React.memo(styled.div`
  ${applyAnimation};
`);

AnimateProxy.propTypes = {
  /**
   * The animation name
   */
  animationName: PropTypes.string,
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
   * The target of the animation
   */
  target: PropTypes.string,
};

AnimateProxy.defaultProps = {
  animationName: 'undefined',
  defaultContainer: '',
  default: '',
  keyframes: [],
  target: '&',
};

export default AnimateProxy;
