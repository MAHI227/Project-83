var mouseevent="empty";
var lastpostionofX,lastpostionofY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
linewidth=1;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-120;
if(width < 992)  {
    document.getElementById("myCanvas").width=new_width;

    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(m){
    console.log("mytouchstart");
    color=document.getElementById("color").value;
    linewidth=document.getElementById("linewidth").value;
lastpostionofX=m.touches[0].clientX-canvas.offsetLeft;
lastpostionofY=m.touches[0].clientY-canvas.offsetTop;
console.log("x= "+lastpostionofX+" y= "+lastpostionofY);
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(m){
currentpostionofX=m.touches[0].clientX-canvas.offsetLeft;
currentpostionofY=m.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=linewidth;
        ctx.moveTo(lastpostionofX,lastpostionofY);
        ctx.lineTo(currentpostionofX,currentpostionofY);
        ctx.stroke();
        console.log("x= "+currentpostionofX+" y= "+currentpostionofY);
    
    lastpostionofX=currentpostionofX;
    lastpostionofY=currentpostionofY;
}

function clear_area(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);    
}
