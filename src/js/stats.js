import showScreen from "./showScreen";
import { clearMain } from "./main.js";
import AbstractView from "./abstract-view";
import { answers } from "./data.js";

class StatsView extends AbstractView {
	constructor(stats = false) {
		super();
		this.stats = stats;
	}

	get template() {
		if (this.stats) {
			return `<section class="result">
				<h2 class="result__title">Победа!</h2>
				<table class="result__table">
					<tr>
						<td class="result__number">1.</td>
						<td colspan="2">
							<ul class="stats">${answers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
							</ul>
						</td>
						<td class="result__points">× 100</td>
						<td class="result__total">${this.stats[`correctAnswerPoints`]}</td>
					</tr>
					<tr>
						<td></td>
						<td class="result__extra">Бонус за скорость:</td>
						<td class="result__extra">${this.stats[`fastAnswersNumber`]} <span class="stats__result stats__result--fast"></span></td>
						<td class="result__points">× 50</td>
						<td class="result__total">${this.stats[`fastAnswersBonus`]}</td>
					</tr>
					<tr>
						<td></td>
						<td class="result__extra">Бонус за жизни:</td>
						<td class="result__extra">${this.stats[`livesNumber`]} <span class="stats__result stats__result--alive"></span></td>
						<td class="result__points">× 50</td>
						<td class="result__total">${this.stats[`livesBonus`]}</td>
					</tr>
					<tr>
						<td></td>
						<td class="result__extra">Штраф за медлительность:</td>
						<td class="result__extra">${this.stats[`slowAnswersNumber`]} <span class="stats__result stats__result--slow"></span></td>
						<td class="result__points">× 50</td>
						<td class="result__total">${this.stats[`slowAnswersFair`]}</td>
					</tr>
					<tr>
						<td colspan="5" class="result__total  result__total--final">${this.stats[`totalPoints`]}</td>
					</tr>
				</table>
				</section>`;
		}

		return `<table class="result__table">
			<tr>
				<td class="result__number">2.</td>
				<td>
					<ul class="stats">${answers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
					</ul>
				</td>
				<td class="result__total"></td>
				<td class="result__total  result__total--final">fail</td>
			</tr>
			</table>
			<table class="result__table">`;
	}

}

function getStatsScreenTemplate(userAnswers, stats) {
	return `<div><header class="header">
		<button class="back">
			<span class="visually-hidden">Вернуться к началу</span>
			<img src="img/sprite/arrow-left.svg">
			<img src="img/sprite/logo-small.svg">
		</button>
		</header>
		<section class="result">
		<h2 class="result__title">Победа!</h2>
		<table class="result__table">
			<tr>
				<td class="result__number">1.</td>
				<td colspan="2">
					<ul class="stats">${userAnswers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
					</ul>
				</td>
				<td class="result__points">× 100</td>
				<td class="result__total">${stats[`correctAnswerPoints`]}</td>
			</tr>
			<tr>
				<td></td>
				<td class="result__extra">Бонус за скорость:</td>
				<td class="result__extra">${stats[`fastAnswersNumber`]} <span class="stats__result stats__result--fast"></span></td>
				<td class="result__points">× 50</td>
				<td class="result__total">${stats[`fastAnswersBonus`]}</td>
			</tr>
			<tr>
				<td></td>
				<td class="result__extra">Бонус за жизни:</td>
				<td class="result__extra">${stats[`livesNumber`]} <span class="stats__result stats__result--alive"></span></td>
				<td class="result__points">× 50</td>
				<td class="result__total">${stats[`livesBonus`]}</td>
			</tr>
			<tr>
				<td></td>
				<td class="result__extra">Штраф за медлительность:</td>
				<td class="result__extra">${stats[`slowAnswersNumber`]} <span class="stats__result stats__result--slow"></span></td>
				<td class="result__points">× 50</td>
				<td class="result__total">${stats[`slowAnswersFair`]}</td>
			</tr>
			<tr>
				<td colspan="5" class="result__total  result__total--final">${stats[`totalPoints`]}</td>
			</tr>
		</table>
		</section></div>`;
}

function getFailScreenTemplate(userAnswers) {
	return `<table class="result__table">
		<tr>
			<td class="result__number">2.</td>
			<td>
				<ul class="stats">${userAnswers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
				</ul>
			</td>
			<td class="result__total"></td>
			<td class="result__total  result__total--final">fail</td>
		</tr>
		</table>
		<table class="result__table">`;
}

function showStats(screen) {
	clearMain();

	showScreen(screen);
}

export { getFailScreenTemplate, getStatsScreenTemplate, showStats };
