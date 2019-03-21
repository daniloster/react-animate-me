import React from 'react';
import PropTypes from 'prop-types';

import Animate from '../src';

const BOUNCE_TWIST_PROGRESS = [
  {
    state: '0%',
    content: 'transform: rotate(0deg);',
  },
  {
    state: '10%',
    content: 'transform: rotate(20deg);',
  },
  {
    state: '15%',
    content: 'transform: rotate(-35deg);',
  },
  {
    state: '20%',
    content: 'transform: rotate(60deg);',
  },
  {
    state: '40%',
    content: 'transform: rotate(-60deg);',
  },
  {
    state: '55%',
    content: 'transform: rotate(45deg);',
  },
  {
    state: '70%',
    content: 'transform: rotate(-35deg);',
  },
  {
    state: '80%',
    content: 'transform: rotate(20deg);',
  },
  {
    state: '90%',
    content: 'transform: rotate(-10deg);',
  },
  {
    state: '100%',
    content: 'transform: rotate(0deg);',
  },
];

export default function BounceTwist(props) {
  const { children, className, delay, maxAnimations, shouldAnimate, startWithAnimation } = props;
  return (
    <Animate
      animationName="bounceTwist"
      duration={1.2}
      delay={delay}
      className={className}
      defaultContainer="position: relative;"
      default={`
            position: relative;
            transform: rotate(0deg);
      `}
      keyframes={BOUNCE_TWIST_PROGRESS}
      maxAnimations={maxAnimations}
      shouldAnimate={shouldAnimate}
      startWithAnimation={startWithAnimation}
      target="& > *"
    >
      {children}
    </Animate>
  );
}

BounceTwist.propTypes = {
  /**
   * The content to be animated
   */
  children: PropTypes.node.isRequired,
  /**
   * Classname to modify behaviour
   */
  className: PropTypes.string,
  /**
   * Animation delay in seconds
   */
  delay: PropTypes.number,
  /**
   * Total of animations allow before being invalidated
   */
  maxAnimations: PropTypes.number,
  /**
   * Indicates when should animate
   */
  shouldAnimate: PropTypes.bool,
  /**
   * Indicates whether animation happends since the first rendering
   */
  startWithAnimation: PropTypes.bool,
};

BounceTwist.defaultProps = {
  className: '',
  delay: 0,
  maxAnimations: Number.MAX_VALUE,
  shouldAnimate: true,
  startWithAnimation: false,
};
