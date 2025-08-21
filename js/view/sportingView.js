function render(scp) {
    let scpLogo = document.createElement("div");
    scpLogo.innerHTML= "<img src=/resources/sporting.jpg style=height:100px; />";
    document.body.append(scpLogo);

    const container = document.querySelector('#container');
    container.innerHTML = '<br>'; //removes the previous elements
    container.appendChild(scpLogo);
    const list = document.createElement('div');
    list.style = `display: flex; margin-top: 10%`;
    list.className = `text-center`;



    let counter = 1;
    const table = document.createElement("table");
    table.className = "table table-bordered";
    const header = document.createElement("tr");
    header.innerHTML = `
   
  <th> Name</th>
  <th> Position </th>
  <th>Date Of Birth</th>
  <th>Nacionality </td>
  <th>Shirt Number </td>
  `;
    table.appendChild(header);
    let itemString;
    const scpPlayers = scp.squad;
    scpPlayers.forEach(async player => {
        itemString = `
    <tbody>
  <tr>  
    <td>${player.name}</td>
    <td>${player.position}</td>
    <td>${player.dateOfBirth}</td>
    <td>${player.nationality}</td>
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