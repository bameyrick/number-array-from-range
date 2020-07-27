# number-array-from-range

Creates an array of numbers for a given range.

## Install

You can install via npm or yarn.

### npm

```bash
npm install --save number-array-from-range
```

### yarn

```bash
yarn add number-array-from-range
```

## Usage

### Importing

You can import using ES6 imports.

```javascript
import { numberArrayFromRange } from 'number-array-form-range';
```

### Arguments

numberArrayFromRange accepts two arguments:

**min**: The lower bound of the number array to create

**max** The upper bound of the number array to create

#### Example

```javascript
import { numberArrayFromRange } from 'number-array-form-range';

const rangeArray = numberArrayFromRange(10, 20);
// [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
```
