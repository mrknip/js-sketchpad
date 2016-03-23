// Wrap this all in a 'padUtils' function

var padWidth = 460

// Single box maker
var addBox = function(parent, n) {
    var gridBox = document.createElement('div');
    gridBox.style.cssText = 'background-color:#FFF; position:relative; display:inline-block; align:center'
    gridBox.style.width = (padWidth / n);
    gridBox.style.height = (padWidth / n);
    gridBox.onmouseover = function () {
        gridBox.style.backgroundColor = "black";
    };
    //gridBox.onmouseout = function () {
    //  gridBox.style.backgroundColor = "red";
    //};

    document.getElementById(parent).appendChild(gridBox);
};

// Multibox maker, defaults to 1 box
var addBoxes = function(parent, n) {
    for (var i = 1; i <= n; i ++) {
        addBox(parent, n);
    };
};

// Single row maker
var addRow = function(numberOfBoxes) {
    var gridRow = document.createElement('div')
    gridRow.style.margin = "0 auto";
    gridRow.id = "box-here";

    document.getElementById("grid-container").appendChild(gridRow);
    addBoxes("box-here", numberOfBoxes );

    gridRow.id = "";
    gridRow.class = gridRow
};

// Multi row maker

var addRows = function(numberOfBoxes, n) {
    for (var i = 1; i <= n; i++) {
        addRow(numberOfBoxes);
        console.log(i + " rows")
    };
};

// Grid maker!

var addGrid = function(numberOfBoxes) {
    addRows(numberOfBoxes, numberOfBoxes);
};

// Reset function

var reset = function() {
    document.getElementById("grid-container").innerHTML = "";
    padWidth = document.getElementById("padWidthInput").value;
    document.getElementById("grid-container").style.width = padWidth
    addGrid(document.getElementById("numberOfBoxesInput").value);
}

window.onload = function() {
    // document.body.appendChild(gridDiv)
    // addDivs();
    document.getElementById("grid-container").style.width = padWidth
    addGrid(50);
};
