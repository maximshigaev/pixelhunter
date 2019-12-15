import AbstractView from "./abstractView.js";

class StatsView extends AbstractView {
	constructor(gameModel, stats = false) {
		super();
		this.stats = stats;
		this.gameModel = gameModel;
	}

	get template() {
		if (this.stats) {
			return `<section class="result">
				<h2 class="result__title">Победа!</h2>
				<table class="result__table">
					<tr>
						<td class="result__number">1.</td>
						<td colspan="2">
							<ul class="stats">${this.gameModel[`answers`].map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
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
					<ul class="stats">${this.gameModel[`answers`].map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
					</ul>
				</td>
				<td class="result__total"></td>
				<td class="result__total  result__total--final">fail</td>
			</tr>
			</table>
			<table class="result__table">`;
	}
}

export default StatsView;
