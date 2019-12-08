function calculatePoints(resultArray, livesNumber) {
	const SAVED_LIVE_BONUS = 50;
	const RIGHT_COMMON_ANSWER_BONUS = 100;
	const RIGHT_FAST_ANSWER_BONUS = 150;
	const RIGHT_SLOW_ANSWER_BONUS = 50;
	const FAST_ANSWER_LIMIT = 10;
	const SLOW_ANSWER_LIMIT = 20;
	const TOTAL_NUMBER_OF_QUESTIONS = 10;
	let totalPoints = 0;

	if (resultArray.length < TOTAL_NUMBER_OF_QUESTIONS) {
		return `Game is not finished`;
	}

	resultArray.forEach((result) => {
		if (result[`answer`]) {
			if (
				result[`time`] >= FAST_ANSWER_LIMIT &&
				result[`time`] <= SLOW_ANSWER_LIMIT
			) {
				totalPoints += RIGHT_COMMON_ANSWER_BONUS;
			} else if (result[`time`] < FAST_ANSWER_LIMIT) {
				totalPoints += RIGHT_FAST_ANSWER_BONUS;
			} else if (result[`time`] > SLOW_ANSWER_LIMIT) {
				totalPoints += RIGHT_SLOW_ANSWER_BONUS;
			}
		}
	});

	totalPoints += livesNumber * SAVED_LIVE_BONUS;

	return totalPoints;
}

export default calculatePoints;
