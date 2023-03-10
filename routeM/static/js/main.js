var c = document.getElementById("idCanva");
var ctx = c.getContext("2d");
ctx.beginPath();



var polygon = [
    [75, 75],
    [75, 225],
    [75, 400],
    [400, 400],
    [400, 225],
    [400,75]
];

var dirx = polygon[0][0];
var diry = polygon[0][1];

function drawMap(poly) {
    ctx.beginPath();
    var x, y;
    for (var index in poly) {
        x = poly[index][0];
        y = poly[index][1];
        ctx.arc(x, y, 10, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();   
    }
}

function drawlines(poly) {
    ctx.beginPath();
    var x, y;
    for (let index = 0; index < poly.length; index++) {    
        x = poly[index][0];
        y = poly[index][1];
        ctx.lineTo(x, y);
        ctx.moveTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
   
}

function drawBall(x, y) {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function draw() {
   
    console.log("Inicia la funcion")
    
    for(let index = 0; index < polygon.length-1; index++){
        console.log("Entra al for")
        
        let movx = polygon[index+1][0]
        let movy = polygon[index+1][1]

        if(typeof movx,movy === 'undefined'){
            console.log("indefinidas")
        }

        while(movx > dirx || movx > dirx){
            console.log("Entra al while")

            if(movx > dirx){        
                dirx += 1;
                drawBall(dirx,diry);              
            }
                
            if(movy > diry){
                diry += 1;
                drawBall(dirx,diry);                   
            } 
        }  
        console.log(dirx," ",diry)
        
    }
}

drawlines(polygon);
drawMap(polygon);

//setInterval(draw,3000);
