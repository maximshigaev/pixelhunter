import assert from "assert";
import getLivesNumber from "../src/js/getLivesNumber.js";

describe(`Calculation of user's saved lives`, function () {
	it(`should return 3 given result with 0 mistakes`, function () {
		assert.strictEqual(
			getLivesNumber([
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
			]),
			3
		);
	});

	it(`should return 2 given result with 1 mistakes`, function () {
		assert.strictEqual(
			getLivesNumber([
				{answer: true, time: 20},
				{answer: true, time: 20},
				{answer: true, time: 20},
				{answer: true, time: 20},
				{answer: true, time: 20},
				{answer: true, time: 10},
				{answer: true, time: 10},
				{answer: false, time: 10},
				{answer: true, time: 10},
				{answer: true, time: 10}
			]),
			2
		);
	});

	it(`should return 1 given result with 2 mistakes`, function () {
		assert.strictEqual(
			getLivesNumber([
				{answer: true, time: 20},
				{answer: false, time: 20},
				{answer: true, time: 20},
				{answer: false, time: 20},
				{answer: true, time: 20},
				{answer: true, time: 10},
				{answer: true, time: 10},
				{answer: true, time: 10},
				{answer: true, time: 10},
				{answer: true, time: 10}
			]),
			1
		);
	});

	it(`should return 0 given result with 3 mistakes`, function () {
		assert.strictEqual(
			getLivesNumber([
				{answer: true, time: 20},
				{answer: false, time: 20},
				{answer: true, time: 20},
				{answer: false, time: 20},
				{answer: true, time: 20},
				{answer: true, time: 10},
				{answer: false, time: 10},
				{answer: true, time: 10},
				{answer: true, time: 10},
				{answer: true, time: 10}
			]),
			0
		);
	});

	it(`Should return "Game is not finished" given  only 9 answers at all`, function () {
		assert.strictEqual(
			getLivesNumber([
				{answer: true, time: 20},
				{answer: false, time: 20},
				{answer: true, time: 20},
				{answer: false, time: 20},
				{answer: true, time: 20},
				{answer: true, time: 10},
				{answer: false, time: 10},
				{answer: true, time: 10},
				{answer: true, time: 10}
			]),
			`Game is not finished`
		);
	});
});
