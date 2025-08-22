async function leagueSearch(userInput) {

    const request = await fetch("https://api.football-data.org/v4/competitions/" + userInput + "/standings", {
        method: "GET",
        headers: {
            "X-Auth-Token": "2cd7813866ac4d439a349e021abdb6ae"
        }
    });
    let requestToJson = await request.json();
    console.log(requestToJson);
    
    return requestToJson;
} 

export default {leagueSearch};