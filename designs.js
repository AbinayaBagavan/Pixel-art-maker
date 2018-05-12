// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//alert("Width:"+g_width+" Height:"+g_height);
function makeGrid()
{
  // Your code goes here!
let canvas=document.querySelector("#pixelCanvas");//get table element
if(canvas.innerHTML.length!=0);
{
	for(i=0;i<canvas.innerHTML.length/2;i++)
	{
		canvas.deleteRow(0);
	}
}
var height=document.querySelector("#inputHeight").value;
var width=document.querySelector("#inputWidth").value;
//alert("Width entered is"+width+"height is"+height);
  for(var i=0;i<height;i++)
  {
    var row=document.createElement("tr");
    for(var j=0;j<width;j++)
    {
      var cell=document.createElement("td");
      row.appendChild(cell);
	  //row.insertColumn();
	  
    }
    canvas.appendChild(row);
  }
}
let table=document.querySelector("#pixelCanvas");
table.addEventListener("click",function(event){//alert("table is selected");
let colorPick=document.querySelector("#colorPicker").value;
let tdata=event.target;
tdata.style.backgroundColor=colorPick;
});
const submitButton=document.querySelector('[type="submit"]');
submitButton.addEventListener("click",function(event){event.preventDefault();makeGrid();});//check form is submitted
