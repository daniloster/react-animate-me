import uuid from 'uuid';

/**
 * Generates a random number between min and max.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function random(min, max) {
  const iteration = parseInt(Math.random() * 100, 10) % max;
  if (iteration < min) {
    return min;
  }

  return iteration;
}

/**
 * Generates a list of random ids based on min and max for the
 * list length.
 * @param {number} min
 * @param {number} max
 * @returns {array}
 */
export default function getRandomIds(min = 1, max = 5) {
  const ids = Array.from({
    length: random(min, max),
  }).map(() => uuid.v4());

  return {
    ids,
  };
}
