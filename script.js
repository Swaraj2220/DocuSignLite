function toggleMenu(){

let menu=document.getElementById("menu");

if(menu.style.display==="block")
menu.style.display="none";
else
menu.style.display="block";

}



function uploadFile(){

let file=document.getElementById("file").files[0];

let status=document.getElementById("uploadStatus");

if(file){

status.innerText="Uploaded: "+file.name;

}
else{

alert("Please select a file");

}

}



function sendMessage(){

alert("Message sent successfully!");

return false;

}



/* signature pad */

let canvas=document.getElementById("pad");

if(canvas){

let ctx=canvas.getContext("2d");

let drawing=false;

canvas.addEventListener("mousedown",()=>drawing=true);

canvas.addEventListener("mouseup",()=>drawing=false);

canvas.addEventListener("mousemove",draw);

function draw(e){

if(!drawing) return;

ctx.lineWidth=2;

ctx.lineCap="round";

ctx.lineTo(e.offsetX,e.offsetY);

ctx.stroke();

ctx.beginPath();

ctx.moveTo(e.offsetX,e.offsetY);

}

}



function clearPad(){

ctx.clearRect(0,0,canvas.width,canvas.height);

}



/* timestamp */

let time=document.getElementById("time1");

if(time){

let now=new Date();

time.innerText=now.toLocaleString();

}