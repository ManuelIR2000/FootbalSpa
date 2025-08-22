import matchesService from "../service/matchesService.js";
import matchesView from "../view/matchesView.js"

export async function init() {
    const matches = await matchesService.getTodaysMatches();
    matchesView.render(matches);
}