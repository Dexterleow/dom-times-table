
console.log("javascript,are you there?");

//Pushing the numberInput to the array
var number = [];

function insert() {
  number.push( numberInput.value );
  clearAndShow();
}

function clearAndShow () {
  numberInput.value ="";
}


//Generating Table via the Form.
document.getElementById("myBtn").addEventListener("click", generate_table);

function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // Getting the number from the placeholder input
  var numberInput = document.getElementById("inputField").value;
  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // appends <table> into <body>
  body.appendChild(tbl);
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);

  console.log("Number Input is: " + numberInput);
  // creating all cells
  for (var i = 1; i <= numberInput; i++) {
    // creates a table row
    var row = document.createElement("tr");
    tblBody.appendChild(row);
    console.log("TABLE ROW CREATED!");

    for (var j = 1; j <= numberInput; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      cell.textContent = i * j;
      //var cellText = document.createTextNode(i*j); //Output value in the table
      //var cellText = document.createTextNode("cell in row "+i+", column "+j); //Output value in the table
      //cell.appendChild(cellText);
      row.appendChild(cell);
      console.log("TABLE COLUMN CREATED!");
    }

    // add the row to the end of the table body

  }


  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}


// Reference for table output

//Generating Table via the Form.
// document.getElementById("myBtn").addEventListener("click", generate_table);
//
// function generate_table() {
//   // get the reference for the body
//   var body = document.getElementsByTagName("body")[0];
//
//   // creates a <table> element and a <tbody> element
//   var tbl     = document.createElement("table");
//   var tblBody = document.createElement("tbody");
//
//   // creating all cells
//   for (var i = 0; i < 2; i++) {
//     // creates a table row
//     var row = document.createElement("tr");
//
//     for (var j = 0; j < 2; j++) {
//       // Create a <td> element and a text node, make the text
//       // node the contents of the <td>, and put the <td> at
//       // the end of the table row
//       var cell = document.createElement("td");
//       var cellText = document.createTextNode("cell in row "+i+", column "+j);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }
//
//     // add the row to the end of the table body
//     tblBody.appendChild(row);
//   }
//
//   // put the <tbody> in the <table>
//   tbl.appendChild(tblBody);
//   // appends <table> into <body>
//   body.appendChild(tbl);
//   // sets the border attribute of tbl to 2;
//   tbl.setAttribute("border", "2");
// }
//






// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });




// take the input alue and miltiply by itself

//A*A

// 1.Get the number in the placeholder and store it in the array
//Using a push Method



// 2. Take the array number and mutiply by itself.
//
// for (i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }

//3. Display the numbers horizontally and vertically on the webpage
// Using Dom manipulation
