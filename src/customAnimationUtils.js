import React from 'react';
import styled from 'styled-components';
import Animate from './Animate';

/**
 * Check if a component is a custom animation.
 */
export function isNotCustomAnimation(Component) {
  return !Component.__isCustomAnimation;
}

/**
 * Creates a custom effect e.g. Fade, Moving, Shake and on and on.
 * @param {function} parser - function to parse the properties
 * generating the needed transformation
 * @returns {React.Component}
 */
export function createCustomAnimationFromParser(parser) {
  const CustomEffect = styled(props => <Animate {...parser(props)} />)``;
  CustomEffect.__isCustomAnimation = true;

  return CustomEffect;
}
