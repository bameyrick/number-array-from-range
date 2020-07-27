/**
 * Creates an array of numbers between a range of two provided numbers
 * @param {number} min
 * @param {number} max
 */
export function numberArrayFromRange(min: number, max: number): number[] {
  const result: number[] = [];

  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  return result;
}
