fetch("./Dynamic.json")
  .then(response => response.json())
  .then(data => {
    //createTable(data.products);
    //console.log(data.products);
    render(data.products);
  });

// fetch("./Dynamic.json").then(response => response.json());

/*function createTable(records) {
  var table = document.createElement("table");
  table.setAttribute("border", 1);
  table.appendChild(createHeading(records[0]));
  for (let record of records) {
    table.appendChild(createRow(record));
  }
  document.getElementById("container").appendChild(table);
}

function createHeading(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var heading = document.createElement("th");
    heading.innerHTML = prop.toUpperCase();
    row.appendChild(heading);
  }
  return row;
}

function createRow(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var column = document.createElement("td");
    column.innerHTML = record[prop];
    row.appendChild(column);
  }
  return row;
}*/

function render(record) {
  var container = document.getElementById("container");
  for (let obj of record) {
    for (let prop in obj) {
      var value = obj[prop];
      var div = document.createElement("div");
      div.innerHTML = value;
      container.appendChild(div);
    }
  }
}
