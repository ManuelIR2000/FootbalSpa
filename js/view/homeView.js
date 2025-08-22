 function render(searchedLeague) {
  const container = document.querySelector('#container');
  container.innerHTML = '<br>'; //removes the previous elements
  const list = document.createElement('div');
  list.style = `display: flex; margin-top: 10%`;
  list.className = `text-center`;

  const leagueStats = searchedLeague.standings[0].table;

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
  let itemString;
  leagueStats.forEach(element => {

    itemString = `
    <tbody>
  <tr>
   <td>${counter}</td>
   <td> <img src="${element.team.crest}" style="height:30px;"/> </td>   
    <td>${element.team.shortName}</td>
    <td>${element.playedGames}</td>
    <td>${element.won}</td>
    <td>${element.draw}</td>
    <td>${element.lost}</td>        
     </tr
     </tbody>
     </table>`;
    table.innerHTML += itemString;
    counter++;
  });
  //table.appendChild(item);
  list.appendChild(table);
  container.appendChild(list);


};

export default { render };
