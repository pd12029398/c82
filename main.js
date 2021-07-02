canvas=document.getElementById('myCanvas');
ctx=canvas.getcontext("2d");
var mouseEvent="empty";
var last_postion_of_x;      
var last_postion_of_y;
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{mouseEvent="mouseDown";


}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{mouseEvent="mouseUP";


}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{mouseEvent="mouseleave";


}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
current_postion_of_mouse_x=e.clientX-canvas.offsetLeft;
current_postion_of_mouse_y=e.clientY-canvas.offsetTop;
if(mouseEvent="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.linewidth=width_of_line;
ctx.moveTo(last_postion_of_x,last_postion_of_y);
ctx.lineTo(current_postion_of_mouse_x,current_postion_of_mouse_y);
ctx.stroke();
}
last_postion_of_x=current_postion_of_mouse_x;
last_postion_of_y=current_postion_of_mouse_y;




}