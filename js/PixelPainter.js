/*jshint esversion: 6 */
const PIXEL_PAINTER = document.getElementById("pixelPainter");
function gridFunctions(){
<<<<<<< HEAD
=======

function gridPopulator(rows, columns){
	let grid = document.createElement("div");
	for(let i = 1; i <= rows; i++){
		let gridRows = document.createElement("div");
		gridRows.style.display = "inline-block";
		gridRows.style.boxSizing = "border-box";
		gridRows.style.width = "50px";
		gridRows.style.height = "50px";
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
      if (clickedRed === true){
        this.style.backgroundColor = "red";
      }else if (clickedGreen === true){
        this.style.backgroundColor = "green";
      }else if (clickedBlue === true){
        this.style.backgroundColor = "blue";
      }
    });

		}
>>>>>>> 5ab63d00909ce075e2dafcd31df95ccd019ed2a2

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
<<<<<<< HEAD
=======
return gridPopulator;
}
>>>>>>> 5ab63d00909ce075e2dafcd31df95ccd019ed2a2

let gridMake = gridFunctions();
gridMake(4,4);

let clickedRed = false;
let clickedGreen = false;
let clickedBlue = false;

console.log(clickedRed);

let redBox = document.createElement("div");
<<<<<<< HEAD
redBox.setAttribute("value", "false");
=======
>>>>>>> 5ab63d00909ce075e2dafcd31df95ccd019ed2a2
redBox.style.display = "inline-block";
redBox.style.boxSizing = "border-box";
redBox.style.width = "50px";
redBox.style.height = "50px";
redBox.style.border = "1px dashed";
redBox.style.backgroundColor = "red";
<<<<<<< HEAD
redBox.addEventListener("click",colorSelect);
  
=======
redBox.addEventListener("click",function(){
  clickedRed = true;
  clickedBlue = false;
  clickedGreen = false;
  console.log(clickedRed);
});
>>>>>>> 5ab63d00909ce075e2dafcd31df95ccd019ed2a2
PIXEL_PAINTER.appendChild(redBox);

let greenBox = document.createElement("div");
greenBox.style.display = "inline-block";
greenBox.style.boxSizing = "border-box";
greenBox.style.width = "50px";
greenBox.style.height = "50px";
greenBox.style.border = "1px dashed";
greenBox.style.backgroundColor = "green";
greenBox.addEventListener("click",function(){
<<<<<<< HEAD
  if(this.click){
  clickedGreen = true;}
=======
  clickedGreen = true;
  clickedRed = false;
  clickedBlue = false;
>>>>>>> 5ab63d00909ce075e2dafcd31df95ccd019ed2a2
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
<<<<<<< HEAD
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


=======
  clickedBlue = true;
  clickedRed = false;
  clickedGreen = false;
});
PIXEL_PAINTER.appendChild(blueBox);

>>>>>>> 5ab63d00909ce075e2dafcd31df95ccd019ed2a2
