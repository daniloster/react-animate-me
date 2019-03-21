import React from 'react';
import PropTypes from 'prop-types';

import Animate from '../src';

const FADE_PROGRESS = [
  {
    state: '0%',
    content: 'opacity: 0;',
  },
  {
    state: '100%',
    content: 'opacity: 1;',
  },
];

export default React.memo(FadeEffect);

function FadeEffect({ children, delay, maxAnimations, ...otherProps }) {
  return (
    <Animate
      {...otherProps}
      animationName="fadeIn"
      duration={1}
      delay={delay}
      maxAnimations={maxAnimations}
      keyframes={FADE_PROGRESS}
      default={`
            position: relative;
            opacity: 0;
         `}
      startWithAnimation
    >
      {children}
    </Animate>
  );
}

FadeEffect.propTypes = {
  /**
   * The content to be animated
   */
  children: PropTypes.node.isRequired,
  /**
   * Animation delay in seconds
   */
  delay: PropTypes.number,
  /**
   * Total of animations allow before being invalidated
   */
  maxAnimations: PropTypes.number,
};

FadeEffect.defaultProps = {
  delay: 0,
  maxAnimations: 1,
};
