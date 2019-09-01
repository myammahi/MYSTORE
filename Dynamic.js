var productsData;
fetch("./Dynamic.json")
  .then(response => response.json())
  .then(data => {
    //createTable(data.products);
    //console.log(data.products);
    productsData = data;
    displayProducts(data);
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

//This is code for the search box that filters the data
function filterProducts() {
  var searchInput = document.getElementById("search").value;
  document.getElementById("main").innerHTML = "";
  displayProducts(
    productsData.filter(value => {
      var lowerCaseProduct = value.name.toLowerCase();
      return lowerCaseProduct.includes(searchInput);
    })
  );
}

//This is code for the cart

function cartAmount() {
  var currentUser = document.getElementById("username").value;
  var currentCount = document.getElementById("cartCount");
  console.log(currentCount);
  var currentCountParsed = parseInt(currentCount.textContent);
  var nextCount = counter(currentCountParsed);
  currentCount.innerHTML = nextCount;
  localStorage.setItem(currentUser, nextCount);
}
function counter(currentCountParsed) {
  return currentCountParsed + 1;
}

//This is code to display the products
function displayProducts(data) {
  document.getElementById("username").value = localStorage.getItem("username");
  document.getElementById("username").innerHTML = localStorage.getItem(
    "username"
  );
  document.getElementById("cartCount").value = localStorage.getItem(
    document.getElementById("username").value
  );
  document.getElementById("cartCount").innerHTML = localStorage.getItem(
    document.getElementById("username").value
  );
  for (let value of data) {
    var divOuter = document.createElement("div");
    divOuter.setAttribute("class", "column");

    var divInner = document.createElement("div");
    divInner.setAttribute("class", "content");

    var img = document.createElement("img");
    img.setAttribute("src", value.imagUrl);
    divInner.appendChild(img);

    var productName = document.createElement("h3");
    productName.innerHTML = value.name;
    divInner.appendChild(productName);

    var productPrice = document.createElement("p");
    productPrice.innerHTML = value.price;
    divInner.appendChild(productPrice);

    var button = document.createElement("button");
    button.setAttribute("onclick", "cartAmount()");
    button.innerHTML = "Add to cart";
    divInner.appendChild(button);

    divOuter.appendChild(divInner);
    document.getElementById("main").appendChild(divOuter);
  }
}
