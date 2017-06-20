/*jshint esversion: 6 */
const PIXEL_PAINTER = document.getElementById("pixelPainter");
function gridFunctions(){

  function gridPopulator(rows, columns){
    let grid = document.createElement("div");
    for(let i = 1; i <= rows; i++){
      let gridRows = document.createElement("div");
      PIXEL_PAINTER.appendChild(gridRows);

      for(let j = 1; j <= columns; j++){
        let gridCols = document.createElement("div");
        gridCols.style.display = "inline-block";
        gridCols.style.boxSizing = "border-box";
        gridCols.style.width = "50px";
        gridCols.style.height = "50px";
        gridCols.style.border = "1px solid";
        gridRows.appendChild(gridCols);
        gridCols.addEventListener("click", function(){
          if (redBox.value = "true"){
            this.style.backgroundColor = "red";
          }else if (clickedGreen === true){
            this.style.backgroundColor = "green";
          }else if (clickedBlue === true){
            this.style.backgroundColor = "blue";
          }
        });

    }


     }
  }
  return gridPopulator;
}

let gridMake = gridFunctions();
gridMake(4,4);

let clickedRed = false;
let clickedGreen = false;
let clickedBlue = false;

console.log(clickedRed);

let redBox = document.createElement("div");
redBox.setAttribute("value", "false");
redBox.style.display = "inline-block";
redBox.style.boxSizing = "border-box";
redBox.style.width = "50px";
redBox.style.height = "50px";
redBox.style.border = "1px dashed";
redBox.style.backgroundColor = "red";
redBox.addEventListener("click",colorSelect);
  
PIXEL_PAINTER.appendChild(redBox);

let greenBox = document.createElement("div");
greenBox.style.display = "inline-block";
greenBox.style.boxSizing = "border-box";
greenBox.style.width = "50px";
greenBox.style.height = "50px";
greenBox.style.border = "1px dashed";
greenBox.style.backgroundColor = "green";
greenBox.addEventListener("click",function(){
  if(this.click){
  clickedGreen = true;}
  console.log(clickedRed);
});
PIXEL_PAINTER.appendChild(greenBox);

let blueBox = document.createElement("div");
blueBox.style.display = "inline-block";
blueBox.style.boxSizing = "border-box";
blueBox.style.width = "50px";
blueBox.style.height = "50px";
blueBox.style.border = "1px dashed";
blueBox.style.backgroundColor = "blue";
blueBox.addEventListener("click",function(){
  if(this.click){
  clickedBlue = true;
}
});
PIXEL_PAINTER.appendChild(blueBox);

function colorSelect(){
  if(this.click){
    this.selected;
    this.setAttribute("value", "true");
    console.log(this.value);
  }

}


