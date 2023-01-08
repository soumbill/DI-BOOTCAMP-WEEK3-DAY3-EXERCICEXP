function allowDrop(event) {
  event.preventDefault(); // Necessary. Allows us to drop.
}
function dragStart(event) {
//set the data to be dragged
console.log("target:",  event.target)
console.log("id: ",  event.target.id ) // id: box
event.dataTransfer.setData("text", event.target.id);
}

function dragDrop(event) {
// console.log("event.target:",event.target) 
event.preventDefault();
// retrieve the data dragged
  
let data = event.dataTransfer.getData("text");
console.log("data: ",  data) //data: box
  
let data1 = document.getElementById(data)
event.target.appendChild(data1);
}

// Only JS

let carre1 = document.getElementById("box")
let carre2= document.getElementById("target")

square1.addEventListener("dragstart", dragStart)

function dragStart(event){
  event.dataTransfer.setData("text", event.target.id);
}

///END OF box////

///BEGINNING OF box ///
carre2.addEventListener("dragover", dragOver)
carre2.addEventListener("drop", drop)

//1st step of drop target
function dragOver(event){
  event.preventDefault();
}


