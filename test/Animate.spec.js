import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { FadeEffect } from './helpers';

const { useState } = React;

let updateContent;

function FadeEffectStateful({ children }) {
  const [content, setContent] = useState(children);
  updateContent = newChildren => {
    setContent(newChildren);
  };

  return <FadeEffect>{content}</FadeEffect>;
}

/**
 * FadeEffect is a custom animation, then, it is an Animate rendering
 */
describe('<Animate />', () => {
  before(() => {
    global.clock = sinon.useFakeTimers(Date.now());
  });
  after(() => global.clock.restore());

  describe('Animate to re-render when props change', () => {
    let element;
    const NEW_CONTENT = 'Hello world, again...';
    it('Given Animate has "Hello world!" as children', () => {
      element = mount(<FadeEffectStateful>Hello world!</FadeEffectStateful>);
    });
    it('When the Animate children is updated', () => {
      updateContent(NEW_CONTENT);
    });
    it('Then the children should be set as "Hello world, again..."', () => {
      expect(element.text()).to.be.eql(
        NEW_CONTENT,
        `Children does not match, found "${element.text()}"`
      );
    });
  });

  describe('Animate to render children', () => {
    let element;
    it('Given Animate has "Hello world!" as children', () => {
      element = mount(<FadeEffect>Hello world!</FadeEffect>);
    });
    it('Expect to have children as "Hello world!"', () => {
      expect(element.text()).to.be.eql(
        'Hello world!',
        `Children does not match, found "${element.text()}"`
      );
    });
  });

  describe('Animate to dispatch onComplete event', () => {
    let element;
    const durationInSeconds = 1;
    const durationInMilliseconds = 1000;
    const onComplete = sinon.spy();
    it('Given Animate has onComplete event handler', () => {
      element = mount(
        <FadeEffect onComplete={onComplete} duration={durationInSeconds}>
          Hello world!
        </FadeEffect>
      );
    });
    it('When the animation has passed the duration', () => {
      global.clock.tick(durationInMilliseconds + 100);
    });
    it('Then the onComplete event handler should have been dispatched', () => {
      expect(onComplete.called).to.be.eql(true, 'onComplete event handler has not been called');
      expect(onComplete.calledOnce).to.be.eql(
        true,
        'onComplete event handler has not been called once'
      );
    });
  });
});
