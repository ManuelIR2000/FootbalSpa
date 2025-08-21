import filmService from '../service/filmService.js';
import filmView from '../view/filmView.js';

export async function init() {
    const films = await filmService.getPlStandings();
    filmView.render(films);
}
