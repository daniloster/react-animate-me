import React from 'react';

const { useMemo } = React;

/**
 * Creates a style object with css variables for animations only
 * when a property of interest gets changed.
 * @param {object} props
 * @returns {array<object>} style - only one item
 */
export default function useAnimationStyle(props) {
  const {
    duration,
    durationUnit,
    timingFunction,
    delay,
    delayUnit,
    iterationCount,
    direction,
    fillMode,
  } = props;

  const style = useMemo(
    () => ({
      '--animation-duration': `${duration}${durationUnit}`,
      '--animation-timing-function': timingFunction,
      '--animation-delay': `${delay}${delayUnit}`,
      '--animation-iteration-count': iterationCount,
      '--animation-direction': direction,
      '--animation-fill-mode': fillMode,
    }),
    [duration, durationUnit, timingFunction, delay, delayUnit, iterationCount, direction, fillMode]
  );

  return [style];
}
