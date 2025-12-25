/**
 * Implementation of Saarna's Bluing Algorithm for generating bluish noise.
 *
 * This algorithm creates blue noise with a +3 dB per octave power increase.
 * Unlike traditional blue noise generation methods that require extensive computation
 * to massage random values, this algorithm uses an exponentially decaying running
 * average to prevent clumping of values with minimal computational overhead.
 *
 * The algorithm works by:
 * 1. Generating two random values
 * 2. Selecting the value that's further from the running average
 * 3. Updating the running average with the selected value
 *
 * Reference: https://7800.8bitdev.org/index.php/Creating_Bluish_Noise_With_Minimal_Compute
 *
 * @class BluishNoiseGenerator
 */
class BluishNoiseGenerator {
  /**
   * Creates a new bluish noise generator with optional range constraints.
   * @param {number} [min] - Minimum value of the range (inclusive)
   * @param {number} [max] - Maximum value of the range (exclusive)
   */
  constructor(min, max) {
    this.min = min;
    this.max = max;
    // Initialize running average in [0,1] range
    this.C = Math.random();
  }

  /**
   * Converts a value from [0,1] range to the target range.
   * @param {number} value - Value in [0,1] range
   * @returns {number} Value in target range
   * @private
   */
  scaleToRange(value) {
    if (this.min === undefined || this.max === undefined) {
      return value;
    }
    return value * (this.max - this.min) + this.min;
  }

  /**
   * Generates the next bluish noise value using Saarna's Bluing Algorithm.
   * First generates blue noise in [0,1] range, then scales to target range.
   * This preserves the blue noise characteristics perfectly since scaling
   * maintains relative distances between values.
   * @returns {number} Next bluish noise value
   */
  next() {
    // Generate and compare values in [0,1] range
    const A = Math.random();
    const B = Math.random();

    let result = A;
    if (Math.abs(B - this.C) > Math.abs(A - this.C)) {
      result = B;
    }

    // Update running average (always in [0,1] range)
    this.C = (this.C + result) / 2;

    // Scale result to target range
    return this.scaleToRange(result);
  }

  /**
   * Generates an array of bluish noise values.
   * @param {number} n - Number of values to generate
   * @returns {number[]} Array of bluish noise values
   */
  generate(n) {
    return Array.from({ length: n }, () => this.next());
  }
}

export default BluishNoiseGenerator;
