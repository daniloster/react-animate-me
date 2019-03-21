import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import uuid from 'uuid';
import AnimatedCart from './AnimatedCart';
import BounceTwist from './BounceTwist';
import FadeEffect from './FadeEffect';
import HingeEffect from './HingeEffect';

// app
const div = document.createElement('div');

div.id = 'container';
div.style.backgroundColor = 'inherit';
div.style.width = '100vw';
div.style.height = '100vh';
document.body.style.margin = 0;

document.body.appendChild(div);

function SimpleContent() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Amazing evening</h1>
      <p>That is really an amazing evening</p>
    </div>
  );
}

function random(min, max) {
  const iteration = parseInt(Math.random() * 100, 10) % max;
  if (iteration < min) {
    return iteration + min;
  }

  return iteration;
}

function getElements(min = 1, max = 5) {
  const elements = Array.from({
    length: random(min, max),
  }).map(() => <SimpleContent />);
  const ids = elements.map(() => uuid.v4());

  return {
    elements,
    ids,
  };
}

const Button = styled.button`
  color: white;
  background-color: navy;
  padding: 6px 12px;
  border-radius: 15px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: auto;
`;

const AnimatedContentBasedOnPosition = React.memo(props => {
  const { children, dataId, position, isRemoving, onRemoveCompleted, onRemove } = props;
  const delayFade = position * 0.3;
  const delayBounceTwist = 1 + position * 0.3;
  const onClick = () => onRemove(dataId);
  const onComplete = () => onRemoveCompleted(dataId);

  if (isRemoving) {
    return (
      <HingeEffect onComplete={onComplete} startWithAnimation>
        {children}
      </HingeEffect>
    );
  }

  const MAX_ANIMATIONS = 1;

  return (
    <FadeEffect delay={delayFade} maxAnimations={MAX_ANIMATIONS}>
      <BounceTwist delay={delayBounceTwist} maxAnimations={MAX_ANIMATIONS} startWithAnimation>
        <div style={{ cursor: 'pointer' }} onClick={onClick}>
          {children}
        </div>
      </BounceTwist>
    </FadeEffect>
  );
});

function shufle() {
  return getElements(2, 4);
}

class App extends React.Component {
  state = {
    ...shufle(),
    isVisible: true,
    total: 0,
    removing: [],
  };

  shufle = () => {
    this.setState({
      ...shufle(),
    });
  };

  toggle = () => {
    this.setState(({ isVisible }) => ({
      isVisible: !isVisible,
    }));
  };

  addToCart = () => {
    this.setState(({ total }) => ({
      total: total + 1,
    }));
  };

  startRemoving = id => {
    this.setState(({ removing }) => ({
      removing: removing.concat(id),
    }));
  };

  finishRemoving = id => {
    this.setState(({ removing, elements, ids }) => {
      const index = ids.indexOf(id);
      return {
        elements: elements.filter((_, idx) => idx !== index),
        ids: ids.filter((_, idx) => idx !== index),
        removing: removing.filter(removingId => removingId !== id),
      };
    });
  };

  render() {
    const { elements, ids, isVisible, removing, total } = this.state;
    return (
      <Container>
        <Button type="button" onClick={this.addToCart}>
          Add to Cart
        </Button>
        <Button type="button" onClick={this.shufle}>
          Shufle Boxes
        </Button>
        <Button type="button" onClick={this.toggle}>
          {isVisible ? 'Hide' : 'Show'}
        </Button>

        <AnimatedCart total={total} />
        {isVisible && (
          <ContentGrid>
            {ids.map((id, position) => (
              <AnimatedContentBasedOnPosition
                key={`animated-item-${id}`}
                position={position}
                isRemoving={removing.includes(id)}
                onRemove={this.startRemoving}
                onRemoveCompleted={this.finishRemoving}
                dataId={id}
              >
                {elements[position]}
              </AnimatedContentBasedOnPosition>
            ))}
          </ContentGrid>
        )}
      </Container>
    );
  }
}

render(<App />, div);
