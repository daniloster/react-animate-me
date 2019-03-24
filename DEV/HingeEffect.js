import { createCustomAnimation } from '../src';

const HINGE_PROGRESS = [
  {
    state: '0%',
    content: 'transform: rotate(0); transform-origin: top left; opacity: 1;',
  },
  {
    state: '20%, 60%',
    content: 'transform: rotate(80deg); transform-origin: top left; opacity: 1;',
  },
  {
    state: '40%',
    content: 'transform: rotate(60deg); transform-origin: top left; opacity: 1;',
  },
  {
    state: '80%',
    content: 'transform: rotate(60deg) translateY(0); transform-origin: top left; opacity: 1;',
  },
  {
    state: '99%',
    content: 'transform: translateY(300%); opacity: 0;',
  },
  {
    state: 'to',
    content: 'transform: opacity: 0;',
  },
];

function parseHingeEffect(props) {
  return {
    ...props,
    animationName: 'hinge',
    default: 'position: relative; opacity: 0;',
    duration: 2,
    fillMode: 'none',
    timingFunction: 'cubic-bezier(0.32, 0, 0.3, 0.97)',
  };
}

const HingeEffect = createCustomAnimation(parseHingeEffect, HINGE_PROGRESS);

export default HingeEffect;

HingeEffect.defaultProps = {
  onComplete: null,
  delay: 0,
};
