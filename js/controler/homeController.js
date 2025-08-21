import homeView from '../view/homeView.js';
import plService from '../service/plService.js';

export function init() {
    homeView.render(plService.getFilm);
}
