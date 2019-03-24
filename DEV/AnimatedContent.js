import React from 'react';
import styled from 'styled-components';

import { chaningAnimations } from '../src';
import BounceTwistEffect from './BounceTwistEffect';
import FadeEffect from './FadeEffect';
import HingeEffect from './HingeEffect';

const CenteredContent = styled.div`
  text-align: center;
`;

function SimpleContent() {
  return (
    <CenteredContent>
      <h1>Amazing evening</h1>
      <p>That is really an amazing evening</p>
    </CenteredContent>
  );
}

const SimpleContentMemo = React.memo(SimpleContent);

const IntroAnimationContent = chaningAnimations([FadeEffect, BounceTwistEffect]);

export default function AnimatedContent(props) {
  const { dataId, position, isRemoving, onRemoveCompleted, onRemove } = props;
  const delayFade = position * 0.3;
  const onClick = () => onRemove(dataId);
  const onComplete = () => onRemoveCompleted(dataId);
  const simpleContentKey = `animated-item-content-${dataId}`;

  if (isRemoving) {
    return (
      <HingeEffect onComplete={onComplete}>
        <SimpleContentMemo key={simpleContentKey} />
      </HingeEffect>
    );
  }

  return (
    <IntroAnimationContent
      delay={delayFade}
      key={`fadeEffect-${dataId}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <SimpleContentMemo key={simpleContentKey} />
    </IntroAnimationContent>
  );
}
