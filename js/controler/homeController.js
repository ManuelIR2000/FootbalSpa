import homeView from '../view/homeView.js';
import homeService from"../service/homeService.js";

export async function init() {
    const league = await homeService.leagueSearch();
    homeView.render(league);
}
