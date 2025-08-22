async function getTodaysMatches() {
    const request = await fetch("https://api.football-data.org/v4/matches",{
    method: "GET",
    headers: {
      "X-Auth-Token": "2cd7813866ac4d439a349e021abdb6ae"
    }
  });
  const requestToJson = await request.json();

  return requestToJson;
}

export default {getTodaysMatches};