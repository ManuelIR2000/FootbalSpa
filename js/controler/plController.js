import plService from '../service/plService.js';
import plview from '../view/plView.js';

export async function init() {
    const pl = await plService.getPlStandings();
    plview.render(pl);
}
