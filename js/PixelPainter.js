/*jshint esversion: 6 */
const PIXEL_PAINTER = document.getElementById("pixelPainter");
const COLOR_ARRAY = ["red", "blue" , "green" , "yellow"];
const TOOL_ARRAY = ["Erase", "Clear"];

function gridPopulator(rows, columns){
  for(let i = 1; i <= rows; i++){
    let gridRows = document.createElement("div");
    PIXEL_PAINTER.appendChild(gridRows);

    for(let j = 1; j <= columns; j++){
      let gridCols = document.createElement("div");
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

function colorPopulator(array){
  for (let i = 0; i < array.length; i++){
    let colorRows = document.createElement("div");
    colorRows.setAttribute("id", array[i]);
    colorRows.style.margin = "1px";
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

function toolBoxPopulator(array){
  for (let i = 0; i <array.length; i++){
    let toolRows = document.createElement("div");
    toolRows.setAttribute("id", array[i]);
    toolRows.style.margin = "1px";
    toolRows.style.boxSizing = "border-box";
    toolRows.style.textAlign = "center";
    toolRows.style.fontSize = "30px";
    toolRows.style.border = "2px solid";
    toolRows.style.height = "50px";
    toolRows.style.width = "100px";
    toolRows.innerHTML = array[i];
    toolRows.addEventListener("click", colorSwatch.toolBox);
    PIXEL_PAINTER.appendChild(toolRows);
  }
}
function cellSwatch(){
  let bgColor;
  let cellClicked = false;
  let fillClicked = false;
  let gridCells = document.getElementsByClassName("gridCells");

  function colorSelect(){
    bgColor = this.id;
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
  function toolFunctionality(){

  }
  function toolBox(){
    let toolSelect = this.id;
    switch (toolSelect){
      case "Erase":
      bgColor = "transparent";
      break;
      case "Clear":
      for (let i = 0; i < 225; i++){
        gridCells[i].style.backgroundColor = "transparent";
      }
    }
  }
  return{
    colorSelect : colorSelect,
    gridSelect : gridSelect,
    mouseDrag : mouseDrag,
    mouseUp : mouseUp,
    toolBox : toolBox
  };
}
let colorSwatch = cellSwatch();
gridPopulator(15,15);
colorPopulator(COLOR_ARRAY);
toolBoxPopulator(TOOL_ARRAY);