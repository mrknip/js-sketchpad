var options = {
    drawType: "smooth",
    drawColour: "#000",
    padWidth: 460
};

function popoutToggle() {
    document.getElementById("popout").classList.toggle("popoutShow");
    
    // Adds outline to the colour boxes after making box visible
    var boxes = document.getElementsByClassName("box")
    for (var i = boxes.length - 1; i >= 0; i--) {
        boxes[i].classList.toggle("boxShowOutline");
    };
};

function selectColour(e) {
    console.log(e);
    if (e.target !== e.currentTarget) {
        var boxSelected = document.getElementById(e.target.id);
        var colourSelected = getComputedStyle(boxSelected).backgroundColor;
        options.drawColour = colourSelected;
    };
    e.stopPropagation();
}

function switchBoxColour(e) {
    console.log(e);
    if (e.target !== e.currentTarget) {
        var targetBox = e.target;
        
        switch(options.drawType){
            case "smooth":
                targetBox.style.backgroundColor = options.drawColour;
                targetBox.style.opacity = (parseFloat(targetBox.style.opacity) + 0.2  );
                break;
            case "standard":
                targetBox.style.backgroundColor = options.drawColour;
                targetBox.style.opacity = 1;
                break;
        };

    };
    e.stopPropagation();
};

// Single box maker
function addBox(parent, numberOfBoxes) {
    var gridBox = document.createElement('div');
    
    gridBox.style.backgroundColor = '#fff';
    gridBox.style.display = 'inline-block';
    gridBox.style.width = (options.padWidth / numberOfBoxes);
    gridBox.style.height = (options.padWidth / numberOfBoxes);
    gridBox.style.opacity = 0;
    
    document.getElementById(parent).appendChild(gridBox);
};

// Multibox maker, defaults to 1 box
function addBoxes(parent, numberOfBoxes) {
    for (var i = 1; i <= numberOfBoxes; i ++) {
        addBox(parent, numberOfBoxes);
    };
};

// Single row maker
function addRow(numberOfBoxes) {
    var gridRow = document.createElement('div')
    gridRow.style.margin = "0 auto";
    gridRow.id = "box-here";

    document.getElementById("grid-container").appendChild(gridRow);
    addBoxes("box-here", numberOfBoxes);
};

// Multi row maker
function addRows(numberOfBoxes) {
    for (var i = 1; i <= numberOfBoxes; i++) {
        addRow(numberOfBoxes);
    };
};

// Grid maker
function addGrid(numberOfBoxes) {
    addRows(numberOfBoxes);
};

function reset() {
    document.getElementById("grid-container").innerHTML = "";
    options.padWidth = document.getElementById("padWidthInput").value;
    document.getElementById("grid-container").style.width = options.padWidth
    addGrid(document.getElementById("numberOfBoxesInput").value);
};

window.onload = function() {
    document.getElementById("grid-container").style.width = options.padWidth
    addGrid(50);

    // Event Listeners
    var popoutBtn = document.getElementById("popoutBtn");
    popoutBtn.onclick = function () {
        popoutToggle();
    };

    var popoutGrid = document.getElementById("popout");
    popoutGrid.addEventListener("click", selectColour, false);

    var grid = document.getElementById("grid-container");
    grid.addEventListener("mouseover", switchBoxColour, false);
};
