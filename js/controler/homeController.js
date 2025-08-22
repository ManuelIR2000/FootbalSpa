import homeView from '../view/homeView.js';
import homeService from"../service/homeService.js";

export async function init() {
        console.log("ola");

    homeView.render(homeService.leagueSearch);
    
}
