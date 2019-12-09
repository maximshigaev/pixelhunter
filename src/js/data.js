const initialState = {
	question: 1,
	lives: 3,
	time: 20
};
const answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
const QUESTIONS = [{ imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`], rightAnswers: [0, 1] },
	{ imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`], rightAnswers: [0] },
	{ imageSources: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`], rightAnswers: [2] },
	{ imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`], rightAnswers: [0, 1] },
	{ imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`], rightAnswers: [0] },
	{ imageSources: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`], rightAnswers: [2] },
	{ imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`], rightAnswers: [0, 1] },
	{ imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`], rightAnswers: [0] },
	{ imageSources: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`], rightAnswers: [2] },
	{ imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`], rightAnswers: [0, 1] }];

export { initialState, answers, QUESTIONS };
