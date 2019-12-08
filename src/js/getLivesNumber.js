function getLivesNumber(resultArray) {
	const START_LIVES_NUMBER = 3;
	const TOTAL_NUMBER_OF_QUESTIONS = 10;
	let mistakesNumber = 0;

	if (resultArray.length < TOTAL_NUMBER_OF_QUESTIONS) {
		return `Game is not finished`;
	}

	resultArray.forEach((result) => {
		if (!result[`answer`]) {
			mistakesNumber++;
		}
	});

	return START_LIVES_NUMBER - mistakesNumber;
}

export default getLivesNumber;
