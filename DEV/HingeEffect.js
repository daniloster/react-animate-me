import React from "react";
import PropTypes from "prop-types";

import Animate from "../src";

const HINGE_PROGRESS = [
  {
    state: "0%",
    content: "transform: rotate(0); transform-origin: top left; opacity: 1;"
  },
  {
    state: "20%, 60%",
    content: "transform: rotate(80deg); transform-origin: top left; opacity: 1;"
  },
  {
    state: "40%",
    content: "transform: rotate(60deg); transform-origin: top left; opacity: 1;"
  },
  {
    state: "80%",
    content:
      "transform: rotate(60deg) translateY(0); transform-origin: top left; opacity: 1;"
  },
  {
    state: "99%",
    content: "transform: translateY(300%); opacity: 0;"
  },
  {
    state: "to",
    content: "transform: opacity: 0;"
  }
];

export default React.memo(HingeEffect);

function HingeEffect(props) {
  const { children, delay, onComplete, shouldAnimate } = props;
  return (
    <Animate
      animationName="hinge"
      duration={2}
      delay={delay}
      fillMode="none"
      timingFunction="cubic-bezier(0.32, 0, 0.3, 0.97)"
      keyframes={HINGE_PROGRESS}
      default="position: relative; opacity: 0;"
      onComplete={onComplete}
      startWithAnimation
      shouldAnimate={shouldAnimate}
    >
      {children}
    </Animate>
  );
}

HingeEffect.propTypes = {
  /**
   * The content to be animated
   */
  children: PropTypes.node.isRequired,
  /**
   * Animation delay in seconds
   */
  delay: PropTypes.number,
  /**
   * Event triggered at the end of animation
   */
  onComplete: PropTypes.func,
  /**
   * Indicates whether component should animate
   */
  shouldAnimate: PropTypes.bool
};

HingeEffect.defaultProps = {
  onComplete: null,
  delay: 0,
  shouldAnimate: true
};
