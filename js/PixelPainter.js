/*jshint esversion: 6 */
const PIXEL_PAINTER = document.getElementById("pixelPainter");
const COLOR_ARRAY = ["red", "blue" , "green" , "yellow"];

function gridFunctions(){
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
  return gridPopulator;

<<<<<<< HEAD

=======
}
>>>>>>> b42bf186499d31a28e67bee4bcb27b0821563472
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
<<<<<<< HEAD
  }
  
=======
}
>>>>>>> b42bf186499d31a28e67bee4bcb27b0821563472

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

  return{
    colorSelect : colorSelect,
    gridSelect : gridSelect,
    mouseDrag : mouseDrag,
    mouseUp : mouseUp
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
<<<<<<< HEAD
gridMake(10,10);
colorPopulator(COLOR_ARRAY);

=======
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
>>>>>>> b42bf186499d31a28e67bee4bcb27b0821563472








<<<<<<< HEAD
let y = document.createElement("div");
y.innerHTML = "ERASE";
PIXEL_PAINTER.appendChild(y);
y.addEventListener("click", colorSwatch.colorSelect);
y.setAttribute("id", "transparent");



let h = document.getElementsByClassName("gridCells");
console.log(h);
let r = document.createElement("div");
r.innerHTML = "CLEAR";
PIXEL_PAINTER.appendChild(r);
r.addEventListener("click", function(){
  function clearGrid(){for (let i=0;i<100;i++){
  h[i].style.backgroundColor = "white";
}
});







=======
>>>>>>> b42bf186499d31a28e67bee4bcb27b0821563472




