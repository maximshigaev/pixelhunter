import { adaptData } from "./data.js";
import Application from "./application.js";

const GET_URL = `https://es.dump.academy/pixel-hunter/questions`;
const POST_URL = `https://es.dump.academy/pixel-hunter/stats/137max`;

async function loadData() {
	try {
		const response = await fetch(GET_URL);

		if (response.ok) {
			adaptData(await response.json());
			Application.showGreeting();
		} else {
			Application.showError(`Error: status ${response.status}`);
		}
	} catch (err) {
		Application.showError(`Произошла ошибка загрузки данных`);
	}
}

async function sendData(data) {
	try {
		const response = await fetch(POST_URL, {
			method: `POST`,
			body: JSON.stringify({ 'stats': data }),
			headers: {
				'Content-Type': `applicaion/json`
			}
		});

		if (response.ok) {
			loadUserStats();
		} else {
			Application.showError(`Error: status ${response.status}`);
		}
	} catch (err) {
		Application.showError(`Произошла ошибка отправки данных`);
	}
}

async function loadUserStats() {
	try {
		const response = await fetch(POST_URL);

		if (response.ok) {
			const attempts = await response.json();
			attempts.forEach((result) => {
				const date = new Date(result[`date`]);
				const stats = (document.querySelector(`.result`) || document.querySelector(`.result__table`));
				const attempt = document.createElement(`div`);

				attempt.innerHTML = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
				${(date.getHours().toString()).padStart(2, `0`)}:${(date.getMinutes().toString()).padStart(2, `0`)}`;

				stats.append(attempt);
			});
		} else {
			Application.showError(`Error: status ${response.status}`);
		}
	} catch {
		Application.showError(`Произошла ошибка загрузки данных`);
	} finally {
		document.querySelector(`.loading`).remove();
	}
}

export { loadData, sendData };


