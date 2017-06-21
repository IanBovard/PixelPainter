/*jshint esversion: 6 */
const PIXEL_PAINTER = document.getElementById("pixelPainter");
const COLOR_ARRAY = ["red", "blue" , "green" , "yellow"];

function gridFunctions(){
  //grid populator is the function used to create grid.
  //Rows and Columns are the arguments passed in.
  function gridPopulator(rows, columns){
    //we create a for loop to iterate through the rows passed in by the arguement.
    for(let i = 1; i <= rows; i++){
      //grid rows is a div created that we append to the main div.
      let gridRows = document.createElement("div");
      PIXEL_PAINTER.appendChild(gridRows);
      //We create a second loop for the second arguement passed in which is for columns.
      for(let j = 1; j <= columns; j++){
        //we create a new div for columns and append to gridRows.
        let gridCols = document.createElement("div");
        //We give all cells in grid gridCols a class of grid cells
        gridCols.setAttribute("class", "gridCells");
        gridCols.style.display = "inline-block";
        gridCols.style.boxSizing = "border-box";
        gridCols.style.width = "25px";
        gridCols.style.height = "25px";
        gridCols.style.border = "1px solid";
        gridCols.addEventListener("mousedown", colorSwatch.gridSelect);
        gridCols.addEventListener("mouseover", colorSwatch.mouseDrag);
        gridCols.addEventListener("mouseup", colorSwatch.mouseUp);
        gridRows.appendChild(gridCols);

      }

    }
  }
  return gridPopulator;
}

function colorPopulator(array){
    for (let i = 0; i < array.length; i++){
      let colorRows = document.createElement("div");
      colorRows.setAttribute("id", array[i]);
      colorRows.style.display = "inline-block";
      colorRows.style.boxSizing = "border-box";
      colorRows.style.width = "50px";
      colorRows.style.height = "50px";
      colorRows.style.border = "1px solid";
      colorRows.style.backgroundColor = array[i];
      colorRows.addEventListener("click", colorSwatch.colorSelect);
      PIXEL_PAINTER.appendChild(colorRows);
    }
}
function cellSwatch(){
  let bgColor;
  let cellClicked = false;
  function colorSelect(){
    bgColor = this.id;
    console.log(bgColor);
  }
  function gridSelect(){
    cellClicked = true;
    this.style.backgroundColor = bgColor;
  }
  function mouseDrag(){
    if (cellClicked === true){
      this.style.backgroundColor = bgColor;
    }
  }
  
  function mouseUp(){
    cellClicked = false;
  }
  function fill(){
    let cells = document.getElementsByClassName("gridCells");
  for (let i = 0; i < 225; i++){
    cells[i].style.backgroundColor = bgColor;
  } 

  }

  return{
    colorSelect : colorSelect,
    gridSelect : gridSelect,
    mouseDrag : mouseDrag,
    mouseUp : mouseUp,
    fill : fill
  };
}

function clear(){
  let cells = document.getElementsByClassName("gridCells");
  for (let i = 0; i < 225; i++){
    cells[i].style.backgroundColor = "transparent";
  }
}

let colorSwatch = cellSwatch();
let gridMake = gridFunctions();
gridMake(15,15);
colorPopulator(COLOR_ARRAY);

let eraseButton = document.createElement("div");
eraseButton.setAttribute("id", "transparent");
eraseButton.style.boxSizing = "border-box";
eraseButton.style.textAlign = "center";
eraseButton.style.fontSize = "30px";
eraseButton.style.border = "2px solid";
eraseButton.style.height = "50px";
eraseButton.style.width = "100px";
eraseButton.innerHTML = "Erase!";
eraseButton.addEventListener("click", colorSwatch.colorSelect);
PIXEL_PAINTER.appendChild(eraseButton);

let clearButton = document.createElement("div");
clearButton.style.display = "inline-block";
clearButton.style.boxSizing = "border-box";
clearButton.style.textAlign = "center";
clearButton.style.fontSize = "30px";
clearButton.style.border = "2px solid";
clearButton.style.height = "50px";
clearButton.style.width = "100px";
clearButton.innerHTML = "Clear";
clearButton.addEventListener("click", clear);
PIXEL_PAINTER.appendChild(clearButton);

let fillButton = document.createElement("div");
fillButton.style.display = "inline-block";
fillButton.style.boxSizing = "border-box";
fillButton.style.textAlign = "center";
fillButton.style.fontSize = "30px";
fillButton.style.border = "2px solid";
fillButton.style.height = "50px";
fillButton.style.width = "100px";
fillButton.innerHTML = "Fill";
fillButton.addEventListener("click", colorSwatch.fill);
PIXEL_PAINTER.appendChild(fillButton);