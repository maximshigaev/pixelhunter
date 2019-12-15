function getAnswerType(time) {
	const FAST_ANSWER_LIMIT = 20;
	const SLOW_AMSWER_LIMIT = 10;

	if (time > FAST_ANSWER_LIMIT) {
		return `fast`;
	} else if (time < SLOW_AMSWER_LIMIT) {
		return `slow`;
	}

	return `correct`;
}

export default getAnswerType;
