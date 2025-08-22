import sportingService from "../service/sportingService.js";
import sportingView from "../view/sportingView.js";

export async function init() {
    const scpStats = await sportingService.getSportingStats();
    sportingView.render(scpStats);
}