import React from 'react';

import AnimateEpisode from './AnimateEpisode';
import { isNotCustomAnimation } from './customAnimationUtils';

/**
 * Creates a sequence of animations
 * @param {array} effects - custom effects created beforehand
 * @returns {React.Component}
 */
export default function chaningAnimations(effects) {
  /**
   * So, why not provide it as a component? Same reason which explains
   * the keyframes being passed as second argument. Predictability.
   * This function validates in compilation time if the chain of animations
   * are valid (effects).
   */
  if (effects.some(isNotCustomAnimation)) {
    const effectIndex = effects.findIndex(isNotCustomAnimation);
    throw new Error(
      `Incorrect effect at [${effectIndex}]. Double check if this is a custom effect`
    );
  }

  const CustomEpisode = props => <AnimateEpisode {...props} effects={effects} />;

  return CustomEpisode;
}
