import React from 'react';

const { useState } = React;

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
