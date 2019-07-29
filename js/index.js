$(document).ready(start);
var draw;
var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
var radius=10;
var minRadius=2;
var maxRadius=30;

//cambiar el tamaño del pincel
function pincelSize(){
    
    $('#increase').click(function(){
    radius=radius+2;
    if(radius>=maxRadius){
        radius=maxRadius;
    }
    $('#pincelval').text(radius);
    });
    $('#decrease').click(function(){
    radius=radius-2;
    if(radius<=minRadius){
        radius=minRadius;
    }
    $('#pincelval').text(radius);
    });
}

function start(){
pincelSize();
//dimensiones del canvas
canvas.width=window.innerWidth;
canvas.width=window.innerHeight;

//eventos
$('#canvas').mousedown(press);
$('#canvas').mousemove(paint);
$('#canvas').mouseup(leave);
$('#guardar').mousedown(guardar);

//funcion presionar, captura la posicion donde doy clic
function press(){
    draw=true;
    var a=event.pageX+10;
    context.moveTo(a,(event.pageY-50));
}

//metodo para que pinte donde doy clic
function paint(){
    if(draw){
        context.lineWidth=radius*2;
        context.lineTo(event.pageX,event.pageY);
        context.stroke();
        
        context.beginPath();
        context.arc(event.pageX,event.pageY,radius,0,2*Math.PI);
        context.fill();
        
        context.beginPath();
        context.moveTo(event.pageX,event.pageY);
    }
}

//funciion para que al soltardeje de pintar
function leave(){
    draw=false;
}

//Guarda la imagen
function guardar(){
    $('#guardar').click(function(){
        var image=canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.location.href=image;
    });
}
}