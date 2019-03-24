import { createCustomAnimation } from '../src';

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

function parseBounceTwist(props) {
  return {
    ...props,
    animationName: 'BounceTwistEffect',
    duration: 1.2,
    default: 'position: relative;',
    defaultContainer: 'position: relative;',
    target: '& > *',
  };
}

const BounceTwistEffect = createCustomAnimation(parseBounceTwist, BOUNCE_TWIST_PROGRESS);

export default BounceTwistEffect;

BounceTwistEffect.defaultProps = {
  delay: 0,
  maxAnimations: Number.MAX_VALUE,
};
