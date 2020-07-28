import { numberArrayFromRange } from '../src';

describe('numberArrayFromRange', () => {
  it('should create a number array for a given range', () => expect(numberArrayFromRange(-1, 4)).toEqual([-1, 0, 1, 2, 3, 4]));
});
