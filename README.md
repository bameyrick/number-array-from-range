# number-array-from-range

Creates an array of numbers for a given range.

[![GitHub release](https://img.shields.io/github/release/bameyrick/number-array-from-range.svg)](https://github.com/bameyrick/number-array-from-range/releases)
[![Travis tests](https://img.shields.io/travis/bameyrick/number-array-from-range.svg)](https://travis-ci.org/bameyrick/number-array-from-range)
[![codecov](https://codecov.io/gh/bameyrick/number-array-from-range/branch/master/graph/badge.svg)](https://codecov.io/gh/bameyrick/number-array-from-range)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/698e5d0ad4f64ffaa4aa7fe440faf7d6)](https://www.codacy.com/manual/bameyrick/number-array-from-range)

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
import { numberArrayFromRange } from 'number-array-from-range';
```

### Arguments

numberArrayFromRange accepts two arguments:

**min**: The lower bound of the number array to create

**max** The upper bound of the number array to create

#### Example

```javascript
import { numberArrayFromRange } from 'number-array-from-range';

const rangeArray = numberArrayFromRange(10, 20);
// [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
```
