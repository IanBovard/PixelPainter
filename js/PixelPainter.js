/*jshint esversion: 6 */
const PIXEL_PAINTER = document.getElementById("pixelPainter");
const COLOR_ARRAY = ["red", "blue" , "green" , "yellow", "orange", "purple", "brown"];
const TOOL_ARRAY = ["Erase", "Clear"];

function bodyColor(){
  let bodyCell = document.getElementsByTagName("body")[0];
  console.log(bodyCell);
  bodyCell.style.backgroundColor = "lightblue";
}
function titleBar(){
  let title = document.getElementsByTagName("h1")[0];
  title.style.color = "white";
  title.style.fontFamily = "Lucida Console, Monaco, sans-serif";
}

function gridPopulator(rows, columns){
  for(let i = 1; i <= rows; i++){
    let gridRows = document.createElement("div");
    PIXEL_PAINTER.appendChild(gridRows);
    PIXEL_PAINTER.addEventListener("mouseup", colorSwatch.mouseUp);
    for(let j = 1; j <= columns; j++){
      let gridCols = document.createElement("div");
      gridCols.setAttribute("class", "gridCells");
      gridCols.style.backgroundColor = "white";
      gridCols.style.display = "inline-block";
      gridCols.style.boxSizing = "border-box";
      gridCols.style.width = "15px";
      gridCols.style.height = "15px";
      gridCols.addEventListener("mousedown", colorSwatch.gridSelect);
      gridCols.addEventListener("mouseover", colorSwatch.mouseDrag);
      gridCols.addEventListener("mouseup", colorSwatch.mouseUp);
      gridCols.addEventListener("mouseover", colorSwatch.cellHover);
      gridCols.addEventListener("mouseout", colorSwatch.cellLeave);
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
    colorRows.style.border = "4px outset";
    colorRows.style.backgroundColor = array[i];
    colorRows.addEventListener("mousedown", colorSwatch.colorSelect);
    colorRows.addEventListener("mouseup", colorSwatch.colorMouseUp);
    PIXEL_PAINTER.appendChild(colorRows);
  }
}

function toolBoxPopulator(array){
  for (let i = 0; i <array.length; i++){
    let toolRows = document.createElement("div");
    toolRows.setAttribute("id", array[i]);
    toolRows.style.backgroundColor = "lightslategrey";
    toolRows.style.margin = "1px";
    toolRows.style.boxSizing = "border-box";
    toolRows.style.textAlign = "center";
    toolRows.style.fontSize = "30px";
    toolRows.style.border = "4px outset";
    toolRows.style.height = "50px";
    toolRows.style.width = "100px";
    toolRows.innerHTML = array[i];
    toolRows.style.fontFamily = "Lucida Console, Monaco, sans-serif";
    toolRows.style.color = "white";
    toolRows.addEventListener("mousedown", colorSwatch.toolBox);
    toolRows.addEventListener("mouseup", colorSwatch.toolBoxMouseUp);
    PIXEL_PAINTER.appendChild(toolRows);
  }
}
function cellSwatch(){
  let bgColor;
  let cellClicked = false;
  let gridCells = document.getElementsByClassName("gridCells");

  function colorSelect(){
    bgColor = this.id;
    this.style.border = "5px inset";
  }
  function cellHover(){
    this.style.border = "1px outset";
    this.style.backgroundColor = bgColor;
  }
  function cellLeave(){
    if (cellClicked === false){
      this.style.border = "none";
      this.style.backgroundColor = "white";
    }
  }
  function colorMouseUp(){
    this.style.border = "4px outset";
  }
  function gridSelect(){
    cellClicked = true;
    this.style.backgroundColor = bgColor;
    this.style.border = "none";
  }
  function mouseDrag(){
    if (cellClicked === true){
      this.style.backgroundColor = bgColor;
      this.style.border = "none";
    }
  }
  function mouseUp(){
    cellClicked = false;
  }
  function toolBox(){
    let toolSelect = this.id;
    switch (toolSelect){
      case "Erase":
      this.style.border = "4px inset";
      bgColor = "white";
      break;
      case "Clear":
      this.style.border = "4px inset";
      for (let i = 0; i < 900; i++){
        gridCells[i].style.backgroundColor = "white";
        gridCells[i].style.border = "none";
        cellClicked = false;
      }
    }
  }
  function toolBoxMouseUp(){
    this.style.border = "4px outset";
  }
  return{
    colorSelect : colorSelect,
    gridSelect : gridSelect,
    mouseDrag : mouseDrag,
    mouseUp : mouseUp,
    toolBox : toolBox,
    colorMouseUp : colorMouseUp,
    toolBoxMouseUp : toolBoxMouseUp,
    cellHover :cellHover,
    cellLeave : cellLeave
  };
}
let colorSwatch = cellSwatch();
gridPopulator(30,30);
colorPopulator(COLOR_ARRAY);
toolBoxPopulator(TOOL_ARRAY);
bodyColor();
titleBar();