import { numberArrayFromRange } from '../src';

describe('numberArrayFromRange', () => {
  it('should create a number array for a given range', () => expect(numberArrayFromRange(-1, 4)).toEqual([-1, 0, 1, 2, 3, 4]));

  it('should create a number array for a given range with negative decimals', () =>
    expect(numberArrayFromRange(-4.5, -1.8)).toEqual([-4, -3, -2, -1]));

  it('should create a number array for a given range with positive decimals', () =>
    expect(numberArrayFromRange(1.8, 4.2)).toEqual([1, 2, 3, 4]));

  it('should create a number array for a given range from negative to positive decimals', () =>
    expect(numberArrayFromRange(-3.8, 4.2)).toEqual([-3, -2, -1, 0, 1, 2, 3, 4]));

  it('should create a number array of one value if min and max are the same', () => expect(numberArrayFromRange(2, 2)).toEqual([2]));

  it('should create a number array of one value if min and max are the same negative values', () =>
    expect(numberArrayFromRange(-3, -3)).toEqual([-3]));

  it('should throw an error if the min value is greater than the max value', () =>
    expect(() => numberArrayFromRange(4, -2)).toThrowError());
});
