function render(searchedLeague) {
    const container = document.querySelector('#container');
    container.innerHTML = '<br>'; //removes the previous elements
    const list = document.createElement('div');
    list.style = `display: flex; margin-top: 10%`;
    list.className = `text-center`;

    const form = document.createElement("form");
    const inputText = document.createElement("input");
    inputText.type = "text";
    const button = document.createElement("input");
    button.type = "button";
    container.appendChild(form);
    form.appendChild(inputText);
    form.appendChild(button);


    let counter = 1;
    const table = document.createElement("table");
    table.className = "table table-bordered";
    const header = document.createElement("tr");
    header.innerHTML = `
   
  <th> Position </th>
  <th> Logo </th>
  <th> Team</th>
  <th> Games Played </td>
  <th> Victories </td>
  <th> Ties </td>
  <th> Losses </td>
  `;
    table.appendChild(header);
    container.appendChild(table);

    button.addEventListener("click", async () => {
        console.log(inputText.value);
        
        const league = await searchedLeague(inputText.value);

        const leagueStandings = league.standings[0].table;

        leagueStandings.forEach(element => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${element.position}</td>
         <td> <img src="${element.team.crest}" style="height:30px;"/> </td>   
         <td>${element.team.shortName}</td>
         <td>${element.playedGames}</td>
         <td>${element.won}</td>
         <td>${element.draw}</td>
         <td>${element.lost}</td> 
            `;

            table.appendChild(tr);
        });
    })



};

export default { render };
/*  <td>${counter}</td>
   <td> <img src="${element.team.crest}" style="height:30px;"/> </td>   
    <td>${element.team.shortName}</td>
    <td>${element.playedGames}</td>
    <td>${element.won}</td>
    <td>${element.draw}</td>
    <td>${element.lost}</td>   */