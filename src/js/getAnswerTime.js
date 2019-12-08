function getAnswerTime(startDate) {
	const MLS_IN_S = 1000;
	const finishDate = 10000;

	const answerTime = Math.ceil((finishDate - startDate) / MLS_IN_S);

	return answerTime;
}

export default getAnswerTime;
