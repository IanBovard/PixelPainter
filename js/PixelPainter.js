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
        gridCols.addEventListener("click", colorSwatch.gridSelect);
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
  function colorSelect(){
    bgColor = this.id;
    console.log(bgColor);
  }
  function gridSelect(){
    this.style.backgroundColor = bgColor;
  }
  return{
    colorSelect : colorSelect,
    gridSelect : gridSelect
  };
}

let colorSwatch = cellSwatch();
let gridMake = gridFunctions();
gridMake(10,10);
colorPopulator(COLOR_ARRAY);









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











