import assert from "assert";
import calculatePoints from "../src/js/calculatePoints.js";

describe(`Calculation of user's total points`, function() {
	it(`Should return right stats object given 10 right fast answers and 3 saved lives`, function() {
		assert.deepEqual(
			calculatePoints([`fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`], 3),
			{
				totalPoints: 1650,
				fastAnswersNumber: 10,
				slowAnswersNumber: 0,
				livesBonus: 150,
				livesNumber: 3,
				fastAnswersBonus: 500,
				slowAnswersFair: 0,
				correctAnswerPoints: 1000
			});
	});

	it(`Should return right stats object given 10 right fast answers and 0 saved lives`, function() {
		assert.deepEqual(
			calculatePoints([`fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`], 0),
			{
				totalPoints: 1500,
				fastAnswersNumber: 10,
				slowAnswersNumber: 0,
				livesBonus: 0,
				livesNumber: 0,
				fastAnswersBonus: 500,
				slowAnswersFair: 0,
				correctAnswerPoints: 1000
			});
	});

	it(`Should return right stats object given 10 correct answers and 2 saved lives`, function() {
		assert.deepEqual(
			calculatePoints([`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`], 2),
			{
				totalPoints: 1100,
				fastAnswersNumber: 0,
				slowAnswersNumber: 0,
				livesBonus: 100,
				livesNumber: 2,
				fastAnswersBonus: 0,
				slowAnswersFair: 0,
				correctAnswerPoints: 1000
			});
	});

	it(`Should return right stats object given 10 slow answers and 1 saved lives`, function() {
		assert.deepEqual(
			calculatePoints([`slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`], 1),
			{
				totalPoints: 550,
				fastAnswersNumber: 0,
				slowAnswersNumber: 10,
				livesBonus: 50,
				livesNumber: 1,
				fastAnswersBonus: 0,
				slowAnswersFair: 500,
				correctAnswerPoints: 1000
			});
	});

	it(`Should return right stats object given 7 right slow answers and 2 saved lives`, function() {
		assert.deepEqual(
			calculatePoints([`slow`, `slow`, `wrong`, `slow`, `wrong`, `slow`, `wrong`, `slow`, `slow`, `slow`], 2),
			{
				totalPoints: 450,
				fastAnswersNumber: 0,
				slowAnswersNumber: 7,
				livesBonus: 100,
				livesNumber: 2,
				fastAnswersBonus: 0,
				slowAnswersFair: 350,
				correctAnswerPoints: 700
			});
	});

	it(`Should return right stats object given 8 right fast answers and 1 saved lives`, function() {
		assert.deepEqual(
			calculatePoints([`fast`, `fast`, `fast`, `fast`, `wrong`, `fast`, `wrong`, `fast`, `fast`, `fast`], 1),
			{
				totalPoints: 1250,
				fastAnswersNumber: 8,
				slowAnswersNumber: 0,
				livesBonus: 50,
				livesNumber: 1,
				fastAnswersBonus: 400,
				slowAnswersFair: 0,
				correctAnswerPoints: 800
			});
	});

	it(`Should return right stats object given 9 correct answers and 0 saved lives`, function() {
		assert.deepEqual(
			calculatePoints([`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `wrong`, `correct`, `correct`, `correct`], 0),
			{
				totalPoints: 900,
				fastAnswersNumber: 0,
				slowAnswersNumber: 0,
				livesBonus: 0,
				livesNumber: 0,
				fastAnswersBonus: 0,
				slowAnswersFair: 0,
				correctAnswerPoints: 900
			});
	});
});
