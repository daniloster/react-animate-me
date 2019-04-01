## react-animate-me



[\`npm: react-animate-me\`](https://www.npmjs.com/package/react-animate-me)


### src/Animate.js

#### Animate

Basic component to create animations/effects

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**animationName** | string | 'undefined' | :x: | The animation name
**children** | node |  | :white_check_mark: | The content to be animated
**default** | string | '' | :x: | The styles applied to the target. It may overrides the container when this matches the target.
**defaultContainer** | string | '' | :x: | The styles applied to the container
**delay** | number | 0 | :x: | The delay to start the animation
**delayUnit** | string | 's' | :x: | The delay unit of the animation
**direction** | enum | 'normal' | :x: | The direction of the animation
**duration** | number | 1 | :x: | The duration of the animation
**durationUnit** | enum | 's' | :x: | The duration unit of the animation
**fillMode** | enum | 'forwards' | :x: | The fill mode of the animation
**iterationCount** | union | 1 | :x: | The number of iteration for the animation
**keyframes** | arrayOf |  | :white_check_mark: | The keyframes list with { state, content }
**onComplete** | func | null | :x: | Event triggered when animation is completed @param {AnimationEvent} event - The native &#x60;AnimationEvent&#x60;
**onStart** | func | null | :x: | Event triggered when animation is started @param {AnimationEvent} event - The native &#x60;AnimationEvent&#x60;
**target** | string | '&' | :x: | The target of the animation
**timingFunction** | string | 'ease-in' | :x: | The timing function applied to the animation e.g. linear, ease, ease-in, ease-in-out, ease-out, cubic-bezier(0.1, 0.7, 1.0, 0.1) and steps(number_of_steps, direction) @see See [MDN timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function)

### src/AnimateEpisode.js

#### AnimateEpisode

Component to chain custom animation.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**children** | node |  | :white_check_mark: | The content to be animated
**delay** | number | 0 | :x: | The delay to start the animation
**delayUnit** | string | 's' | :x: | The delay unit of the animation
**direction** | enum | 'normal' | :x: | The direction of the animation
**duration** | number | 1 | :x: | The duration of the animation
**durationUnit** | enum | 's' | :x: | The duration unit of the animation
**effects** | union |  | :white_check_mark: | List of animation that must be executed in series
**fillMode** | enum | 'forwards' | :x: | The fill mode of the animation
**iterationCount** | union | 1 | :x: | The number of iteration for the animation
**onComplete** | func | null | :x: | Event triggered when animation is completed @param {AnimationEvent} event - The native &#x60;AnimationEvent&#x60;
**onStart** | func | null | :x: | Event triggered when animation is started @param {AnimationEvent} event - The native &#x60;AnimationEvent&#x60;
**timingFunction** | string | 'ease-in' | :x: | The timing function applied to the animation e.g. linear, ease, ease-in, ease-in-out, ease-out, cubic-bezier(0.1, 0.7, 1.0, 0.1) and steps(number_of_steps, direction) @see See [MDN timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function)

