let canvas = document.getElementById('myCanvas');
let textColor = document.getElementById('textColor');
let bgColor = document.getElementById('bgColor');
let fontSize = document.getElementById('fontSize');
let textWidth = document.getElementById('textWidth');
let clear = document.getElementById('clear');
let save = document.getElementById('save');
let retreive = document.getElementById('retreive');
const ctx = canvas.getContext('2d');

let drawing = false;
let lineX = 0;
let lineY = 0;

//function to start drawing
function startDraw(e){
  drawing = true;
  [lineX, lineY] = [e.offsetX, e.offsetY];
  e.preventDefault();
  draw(e);
}


//function to finish drawing
function finishDraw(){
    drawing = false;
    ctx.beginPath();
}

//function to make drawing
function draw(e){
  if(!drawing) return
  ctx.beginPath();
  ctx.moveTo(lineX,lineY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lineX, lineY] = [e.offsetX, e.offsetY];
  ctx.font = `${fontSize.value}px Arial`; 
  e.preventDefault();
} 


//function to change the text color
function fillTextColor(e){
//  ctx.fillstyle = e.target.value;
 ctx.strokeStyle = e.target.value;
}

//function to change the background color
function fillBgColor(e){
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0,0,800,450);
}

//function to change the font size
function adjustFontSize(e){
    ctx.lineWidth = e.target.value;
}

//function to change the line thickness
function adjusttextWidth(e){
    ctx.lineWidth = e.target.value;
}

//function to clear the canvas
function clearCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

//function to save & download
function downloadSign(){
    
    localStorage.setItem('canvasContents', canvas.toDataURL());
    // Create a new <a> element
    let link = document.createElement('a');

    // Set the download attribute and the href attribute of the <a> element
    link.download = 'Signature.png';
    link.href = canvas.toDataURL();

    // Dispatch a click event on the <a> element
    link.click();
}


//event listeners
canvas.addEventListener('mousedown',startDraw);
canvas.addEventListener('mouseup',finishDraw);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseout',finishDraw);
bgColor.addEventListener('change',fillBgColor);
textColor.addEventListener('change',fillTextColor);
fontSize.addEventListener('change',adjustFontSize);
textWidth.addEventListener('change',adjusttextWidth);
clear.addEventListener('click',clearCanvas);
save.addEventListener('click',downloadSign);





