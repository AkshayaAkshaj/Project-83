var mouseEvent="empty";
var lastpositionofx,lastpositionofy;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="pink";
widthofline=5;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value ;
    widthofline=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
  currentpositionofmousex=e.clientX-canvas.offsetLeft;
    currentpositionofmousey=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        console.log(" last position of x and y codinates=");
        console.log("x="+currentpositionofmousex+"y="+currentpositionofmousey);
        ctx.moveTo(lastpositionofx,lastpositionofy);
        console.log(" current position of x and y codinates=");
        console.log("x="+currentpositionofmousex+"y="+currentpositionofmousey);
        ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
        ctx.stroke();
    }
    lastpositionofx=currentpositionofmousex;
    lastpositionofy=currentpositionofmousey;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}