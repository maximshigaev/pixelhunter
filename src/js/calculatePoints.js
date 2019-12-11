function calculatePoints(answers, livesNumber) {
	const SAVED_LIVE_BONUS = 50;
	const CORRECT_ANSWER_BONUS = 100;
	const FAST_ANSWER_BONUS = 50;
	const SLOW_ANSWER_FAIR = 50;
	const livesBonus = livesNumber * SAVED_LIVE_BONUS;
	let correctAnswerPoints = 0;
	let slowAnswersFair = 0;
	let fastAnswersBonus = 0;
	let fastAnswersNumber = 0;
	let slowAnswersNumber = 0;

	answers.forEach((answer) => {
		switch (answer) {
		case `fast`:
			fastAnswersNumber++;
			fastAnswersBonus += FAST_ANSWER_BONUS;
			break;
		case `slow`:
			slowAnswersNumber++;
			slowAnswersFair += SLOW_ANSWER_FAIR;
			break;
		}

		if (answer !== `wrong`) {
			correctAnswerPoints += CORRECT_ANSWER_BONUS;
		}
	});

	let totalPoints = livesBonus + correctAnswerPoints + fastAnswersBonus - slowAnswersFair;
	const stats = { totalPoints, fastAnswersNumber, slowAnswersNumber, livesBonus, livesNumber, fastAnswersBonus, slowAnswersFair, correctAnswerPoints };

	return stats;
}

export default calculatePoints;
