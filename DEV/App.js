import React from 'react';
import styled from 'styled-components';
import AnimatedCart from './AnimatedCart';
import getRandomIds from './getRandomIds';
import AnimatedContent from './AnimatedContent';

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

function shufle() {
  return getRandomIds(3, 4);
}

export default class App extends React.Component {
  state = {
    ...shufle(),
    isVisible: true,
    total: 0,
    removing: [],
  };

  shufleIds = () => {
    this.setState({
      ...shufle(),
    });
  };

  toggleVisible = () => {
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
    this.setState(({ removing, ids }) => {
      const index = ids.indexOf(id);
      return {
        ids: ids.filter((_, idx) => idx !== index),
        removing: removing.filter(removingId => removingId !== id),
      };
    });
  };

  render() {
    const { ids, isVisible, removing, total } = this.state;
    return (
      <Container>
        <Button type="button" onClick={this.addToCart}>
          Add to Cart
        </Button>
        <Button type="button" onClick={this.shufleIds}>
          Shufle Boxes
        </Button>
        <Button type="button" onClick={this.toggleVisible}>
          {isVisible ? 'Hide' : 'Show'}
        </Button>

        <AnimatedCart total={total} />
        {isVisible && (
          <ContentGrid>
            {ids.map((id, position) => (
              <AnimatedContent
                key={`animated-item-${id}`}
                position={position}
                isRemoving={removing.includes(id)}
                onRemove={this.startRemoving}
                onRemoveCompleted={this.finishRemoving}
                dataId={id}
              />
            ))}
          </ContentGrid>
        )}
      </Container>
    );
  }
}
