import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import FadeEffect from '../../DEV/FadeEffect';

const { useState } = React;
const PointerWrapper = styled.div`
  cursor: pointer;
`;

export default function FadeEffectApp({ maxAnimations }) {
  const [hash, setHash] = useState(uuid.v4());
  const onClick = () => {
    setHash(uuid.v4());
  };

  return (
    <PointerWrapper>
      <FadeEffect onClick={onClick}>Hello! Click me "{hash}"</FadeEffect>
    </PointerWrapper>
  );
}

FadeEffectApp.defaultProps = {
  maxAnimations: Number.MAX_VALUE,
};
