/*jshint esversion: 6 */
const PIXEL_PAINTER = document.getElementById("pixelPainter");
function gridFunctions(){
function gridPopulator(rows, columns){
	let grid = document.createElement("div");
	for(let i = 1; i <= rows; i++){
		let gridRows = document.createElement("div");
		gridRows.style.display = "inline-block";
		gridRows.style.boxSizing = "border-box";
		gridRows.style.width = "50px";
		gridRows.style.height = "50px";
		//gridRows.style.border = "1px solid";
		PIXEL_PAINTER.appendChild(gridRows);
			for(let j = 1; j <= columns; j++){
				let gridCols = document.createElement("div");
					gridCols.style.display = "inline-block";
					gridCols.style.boxSizing = "border-box";
					gridCols.style.width = "50px";
					gridCols.style.height = "50px";
					gridCols.style.border = "1px solid";
					gridRows.appendChild(gridCols);

		}


  }
}
return gridPopulator;
}
let gridMake = gridFunctions();
gridMake(4,4);
console.log(gridMake);