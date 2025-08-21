function render(films) {
  const container = document.querySelector('#container');
  container.innerHTML = '<br>'; //removes the previous elements
  const list = document.createElement('div');
  list.style = `display: flex; margin-top: 10%`;
  list.className = `text-center`;

  const standings = films.standings[0].table;
 let counter = 1;
  standings.forEach(element => {
   
    const item = document.createElement('div');
    //item.className = `col card text-white bg-primary mb-3" style="max-width": 18rem;`;
    item.style.display = "block";
    item.innerHTML = `
                            <div class="table table-dark">
                                <table>
                                <tr>
                                <th scope="col"> ${counter}</td>
                                </tr>
                                <tr>
                                <td scope="row">${element.team.shortName}</td> 
                                <td> <br> </td>
                                </tr>
                        </div>`;
    list.appendChild(item);
    container.appendChild(list);
    counter ++;
  });


};

export default { render };
