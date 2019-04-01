import { createCustomAnimation } from '../src';

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

function parseFadeEffect(props) {
  return {
    ...props,
    animationName: 'fadeIn',
    duration: 1,
  };
}

export const FadeEffect = createCustomAnimation(parseFadeEffect, FADE_PROGRESS); // eslint-disable-line import/prefer-default-export

FadeEffect.defaultProps = {
  delay: 0,
  maxAnimations: 1,
};
