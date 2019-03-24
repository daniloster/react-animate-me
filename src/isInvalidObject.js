/**
 * Validates if an object is invalid
 * @param {object} keyframe
 * @returns {boolean}
 */
export default function isInvalidObject(object) {
  return object.constructor !== Object;
}
