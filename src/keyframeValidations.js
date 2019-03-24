import isInvalidObject from './isInvalidObject';

/**
 * @typedef Keyframe
 * @property {string} state
 * @property {string} content
 */

/**
 * Checks if the state in keyframe is invalid
 * @param {Keyframe} keyframe
 * @returns {boolean}
 */
export function isInvalidKeyframeState(keyframe) {
  const REGEX_STATE = /(\s*)(to|from|(\d+%))((\s*),(\s*)(to|from|(\d+%)))*(\s*)/i;
  return !('state' in keyframe) || !REGEX_STATE.test(keyframe.state);
}

/**
 * Checks if the content in keyframe is invalid
 * @param {Keyframe} keyframe
 * @returns {boolean}
 */
export function isInvalidKeyframeContent(keyframe) {
  return !('content' in keyframe) || typeof keyframe.content !== 'string';
}

/**
 * Checks if all keyframes are valid throwing an exception
 * otherwise.
 * @param {Keyframe} keyframe
 */
export function validateKeyframe(keyframes) {
  if (!keyframes || !keyframes.length || keyframes.length < 2) {
    throw new Error(
      'The keyframes must be an array with at least 2 objects containing {state, content}'
    );
  }
  if (keyframes.some(isInvalidObject)) {
    const index = keyframes.findIndex(isInvalidObject);
    const message = `Keyframe at [${index}] is not a valid object.`;
    throw new Error(message);
  }
  if (keyframes.some(isInvalidKeyframeState)) {
    const index = keyframes.findIndex(isInvalidKeyframeState);
    const message = `
Keyframe at [${index}] is not valid.
Incorrect "state" property.
Found: "${keyframes[index].state}"
Expected: "0%", "0%, from", "from", "54%", "100%", "100%, to", "to"
    `.trim();
    throw new Error(message);
  }
  if (keyframes.some(isInvalidKeyframeContent)) {
    const index = keyframes.findIndex(isInvalidKeyframeContent);
    const message = `
Keyframe at [${index}] is not valid.
Incorrect "content" property.
Found: type "${typeof keyframes[index].content}"
Expected: type "string"
    `.trim();
    throw new Error(message);
  }
}
