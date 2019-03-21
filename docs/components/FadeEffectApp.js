import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import FadeEffect from '../../DEV/FadeEffect';

const { useState } = React;
const PointerWrapper = styled.div`
  cursor: pointer;
`;

export default function FadeEffectApp() {
  const [hash, setHash] = useState(uuid.v4());
  const onClick = () => {
    setHash(uuid.v4());
  };

  return (
    <PointerWrapper>
      <FadeEffect onClick={onClick} maxAnimations={Number.MAX_VALUE}>
        Hello! Click me "{hash}"
      </FadeEffect>
    </PointerWrapper>
  );
}
