import assert from "assert";
import calculatePoints from "../src/js/calculatePoints.js";

describe(`Calculation of user's total points`, function () {
	it(`Should return 1150 given 10 right common answers and 3 saved lives`, function () {
		assert.strictEqual(
			calculatePoints(
				[
					{answer: true, time: 20},
					{answer: true, time: 20},
					{answer: true, time: 20},
					{answer: true, time: 20},
					{answer: true, time: 20},
					{answer: true, time: 10},
					{answer: true, time: 10},
					{answer: true, time: 10},
					{answer: true, time: 10},
					{answer: true, time: 10}
				],
				3
			),
			1150
		);
	});

	it(`Should return 700 given 7 right common answers and 0 saved lives`, function () {
		assert.strictEqual(
			calculatePoints(
				[
					{answer: true, time: 10},
					{answer: true, time: 10},
					{answer: true, time: 10},
					{answer: true, time: 10},
					{answer: true, time: 10},
					{answer: true, time: 20},
					{answer: true, time: 20},
					{answer: false, time: 20},
					{answer: false, time: 20},
					{answer: false, time: 20}
				],
				0
			),
			700
		);
	});

	it(`Should return 1650 given 10 right fast answers and 3 saved lives`, function () {
		assert.strictEqual(
			calculatePoints(
				[
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9}
				],
				3
			),
			1650
		);
	});

	it(`Should return 950 given 10 right slow answers and 3 saved lives`, function () {
		assert.strictEqual(
			calculatePoints(
				[
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21}
				],
				3
			),
			650
		);
	});

	it(`Should return 550 given 9 right slow answers and 2 saved lives`, function () {
		assert.strictEqual(
			calculatePoints(
				[
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: false, time: 21}
				],
				2
			),
			550
		);
	});

	it(`Should return 1250 given 8 right fast answers and 1 saved lives`, function () {
		assert.strictEqual(
			calculatePoints(
				[
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: true, time: 9},
					{answer: false, time: 9},
					{answer: false, time: 9}
				],
				1
			),
			1250
		);
	});

	it(`Should return "Game is not finished" given  only 9 answers at all`, function () {
		assert.strictEqual(
			calculatePoints(
				[
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21},
					{answer: true, time: 21}
				],
				1
			),
			`Game is not finished`
		);
	});
});
