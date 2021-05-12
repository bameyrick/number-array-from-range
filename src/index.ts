/**
 * Creates an array of numbers between a range of two provided numbers
 * @param {number} min
 * @param {number} max
 */
export function numberArrayFromRange(min: number, max: number): number[] {
  const result: number[] = [];

  if (min > max) {
    throw new Error('Min is greater than max');
  }

  for (let i = min > 0 ? Math.floor(min) : Math.ceil(min), l = max > 0 ? Math.floor(max) : Math.ceil(max); i <= l; i++) {
    result.push(i);
  }

  return result;
}
