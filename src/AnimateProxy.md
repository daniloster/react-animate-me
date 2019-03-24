```jsx static
import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import Animate from 'react-animate-me';

const MOVING_PROGRESS = [
  {
    state: 'from',
    content: 'transform: translate(0%);',
  },
  {
    state: 'to',
    content: 'transform: translate(calc(100% - 190px));',
  },
];
function MovingEffect({ children }) {
  return (
    <Animate
      animationName="moving"
      duration={3}
      fillMode="both"
      iterationCount="infinite"
      keyframes={MOVING_PROGRESS}
      timingFunction="ease-in-out"
    >
      {children}
    </Animate>
  );
}

const { useState } = React;
const PointerWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export default function MovingEffectApp() {
  return (
    <PointerWrapper>
      <MovingEffect>Hello! We are moving around!</MovingEffect>
    </PointerWrapper>
  );
}
```

```jsx
<MovingEffectApp />
```