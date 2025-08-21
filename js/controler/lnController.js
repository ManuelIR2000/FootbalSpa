import lnService from '../service/lnService.js';
import lnView from '../view/lnView.js';

export async function init() {
    const ln = await lnService.getLnStandings();
    lnView.render(ln);
}
