function render(todayMatches) {
    const container = document.querySelector('#container');
    container.innerHTML = '<br>'; //removes the previous elements
    const list = document.createElement('div');
    list.style = `display: flex; margin-top: 10%`;
    list.className = `text-center`;

    let counter = 1;
    const table = document.createElement("table");
    table.className = "table table-bordered";
    const header = document.createElement("tr");
    header.innerHTML = `
     <th>   </th>    
  <th> Competition </th>
  <Time>
  <th>   </th>    
  <th> Home Team </th>
    <th>   </th>    
  <th> Away Team</th>
  `;
    table.appendChild(header);
    let itemString;
    const games = todayMatches.matches; //arr



    games.forEach(element => {

        itemString = `
    <tbody>
  <tr>
   <td> <img src="${element.competition.emblem}" style="height:30px;"/> </td>   
    <td>${element.competition.name}</td>
    <td>${element.utcDate}</td>
    <td> <img src="${element.homeTeam.crest}" style="height:30px;"/> </td>  
    <td>${element.homeTeam.name}</td>
    <td> <img src="${element.awayTeam.crest}" style="height:30px;"/> </td>  
    <td>${element.awayTeam.name}</td>        
        </tr>
     </tbody>
     </table>`;
        table.innerHTML += itemString;
        counter++;
    });
    //table.appendChild(item);
    list.appendChild(table);
    container.appendChild(list);


};

export default {render}