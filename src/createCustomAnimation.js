import { validateKeyframe } from './keyframeValidations';
import { createCustomAnimationFromParser } from './customAnimationUtils';

/**
 * Creates a custom effect e.g. Fade, Moving, Shake and on and on.
 * @param {function} parseProps - function to parse the properties
 * generating the needed transformation
 * @returns {React.Component}
 */
export default function createCustomAnimation(parseProps, keyframes) {
  /**
   * The reason to have the keyframes as second arguments is to provide
   * a predictable construction of effects, then, if keyframes are
   * invalid, the validation will throw an exception during compilation
   * as the creation of the effects happens under static blocks.
   */
  if (typeof parseProps !== 'function') {
    throw new Error('parseProps is required as a function');
  }
  validateKeyframe(keyframes);

  const customEffectParser = props => {
    const parsedProps = parseProps(props);

    return {
      default: keyframes[0].content,
      ...parsedProps,
      keyframes,
    };
  };

  return createCustomAnimationFromParser(customEffectParser);
}
