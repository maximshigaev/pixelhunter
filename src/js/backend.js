import { adaptData } from "./data.js";
import Application from "./application.js";

const GET_URL = `https://es.dump.academy/pixel-hunter/questions`;
const POST_URL = `https://es.dump.academy/pixel-hunter/stats/1737max`;

function loadData() {
	fetch(GET_URL)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(`Error: status ${response.status}`);
		})
		.then((questions) => {
			adaptData(questions);
			Application.showGreeting();
		})
		.catch((err) => {
			Application.showError(err.message);
		});
}

function sendData(data) {
	fetch(POST_URL, {
		method: `POST`,
		body: JSON.stringify({ 'stats': data }),
		headers: {
			'Content-Type': `applicaion/json`
		}
	})
		.then((response) => {
			if (response.ok) {
				loadUserStats();
			} else {
				throw new Error(`Error статус ${response.status}`);
			}
		})
		.catch((err) => {
			Application.showError(err.message);
		});
}

function loadUserStats() {
	fetch(POST_URL)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(`Error: status ${response.status}`);
		})
		.then((data) => {
			data.forEach((result) => {
				const date = new Date(result[`date`]);
				const stats = (document.querySelector(`.result`) || document.querySelector(`.result__table`));
				const attempt = document.createElement(`div`);

				attempt.innerHTML = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
				${(date.getHours().toString()).padStart(2, `0`)}:${(date.getMinutes().toString()).padStart(2, `0`)}`;
				stats.append(attempt);
			});
		})
		.catch((err) => {
			Application.showError(err.message);
		})
		.finally(() => {
			document.querySelector(`.loading`).remove();
		});
}

export { loadData, sendData };


