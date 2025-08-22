async function leagueSearch() {
    const userInput = document.getElementById("leagueSearch");
    const button = document.getElementById("button");
    let requestToJson;

    button.addEventListener("click", async e => { 
    //.value
    const request = await fetch("https://api.football-data.org/v4/competitions/" + userInput.value + "/standings", {
        method: "GET",
        headers: {
            "X-Auth-Token": "2cd7813866ac4d439a349e021abdb6ae"
        }
    });
    requestToJson = await request.json();
    console.log(requestToJson);
    
})
    return requestToJson;
} 

export default {leagueSearch};