```jsx static
import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { createCustomAnimation }from 'react-animate-me';

/**
 * Here is an example of keyframes where the state represents
 * the progress which can be set as [0-100]% or as keywords
 * (from, to), and the content is the styles applied to the
 * keyframe.
 * */
const FADE_PROGRESS = [
  {
    state: '0%',
    content: 'position: relative; opacity: 0;',
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

const FadeEffect = createCustomAnimation(parseFadeEffect, FADE_PROGRESS);

export default FadeEffect;

FadeEffect.defaultProps = {
  delay: 0,
  maxAnimations: 1,
};

const { useState } = React;

export default function FadeEffectApp({ maxAnimations }) {
  const [hash, setHash] = useState(uuid.v4());
  const onClick = () => { setHash(uuid.v4()); };

  return (
    <FadeEffect onClick={onClick}>
      Hello! Click me "{hash}"
    </FadeEffect>
  );
}

FadeEffectApp.defaultProps = {
  maxAnimations: Number.MAX_VALUE,
};

```

```js
<FadeEffectApp maxAnimations={3} />
```