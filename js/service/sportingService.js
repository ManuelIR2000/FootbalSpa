async function getSportingStats(){
    const request = await fetch("https://api.football-data.org/v4/teams/498", {
        method:"GET",
        headers:{
            "X-Auth-Token": "2cd7813866ac4d439a349e021abdb6ae"
        }
    });

    const requestToJson = await request.json();
    return requestToJson;
}

async function getPlayer(id){
    const request = await fetch("https://api.football-data.org/v4/persons/"+ id, {
        method:"GET",
        headers:{
            "X-Auth-Token": "2cd7813866ac4d439a349e021abdb6ae"
        }
    });

    const requestToJson = await request.json();
    console.log(requestToJson);
    
    return requestToJson;
}


export default { getSportingStats, getPlayer };