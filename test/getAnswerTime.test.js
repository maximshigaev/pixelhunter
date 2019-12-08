import assert from "assert";
import getAnswerTime from "../src/js/getAnswerTime.js";

describe(`Evaluation of time of user's answer`, function () {
	it(`Should return 1 given 1-milisecond time of user's answer`, function () {
		assert.strictEqual(getAnswerTime(9999), 1);
	});

	it(`Should return 1 given 999-milisecond time of user's answer`, function () {
		assert.strictEqual(getAnswerTime(9001), 1);
	});

	it(`Should return 1 given 1-second time of user's answer`, function () {
		assert.strictEqual(getAnswerTime(9000), 1);
	});

	it(`Should return 2 given 1001-milisecond time of user's answer`, function () {
		assert.strictEqual(getAnswerTime(8999), 2);
	});
});
