var pic = document.getElementById("vimage");

var size = 50
var bigging = true

var drawDot = function(xc,yc){
    clear()
    id = requestAnimationFrame(drawDot);
    var cl=document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
    
    if ( size<1 || size>355 ){
	bigging = !bigging;
    }
    if (bigging) { size++; }
    if (!bigging) { size--; }

    cl.setAttribute("cx", 250);
    cl.setAttribute("cy", 250);
    cl.setAttribute("r",size);
    cl.setAttribute("fill","pink");
    //cl.setAttribute("stroke","black");
    pic.appendChild(cl)    
}

var left = true;
var down = true;
var x = 250;
var y = 250;

var dvd = function(e){
    clear()
    id = requestAnimationFrame(dvd)
    var cl=document.createElementNS(
	"http://www.w3.org/2000/svg",
	"rect"
    );
    if(x == 0 || x == 400){
	left = !left}
    if ( y == 0 || y == 430 ) {
	down = !down }
    if(left){x++;}
    else{x--;}
    if(down){y++;}
    else{y--;}
    cl.setAttribute("height",70);
    cl.setAttribute("width",100);
    cl.setAttribute("x",x);
    cl.setAttribute("y",y);
    cl.setAttribute("fill","pink");
    pic.appendChild(cl)    
}

var clear = function(e){
    pic.innerHTML=""; 
}

var stop = function(e){
    cancelAnimationFrame(id)
}

c = document.getElementById("stop")
c.addEventListener("click",stop)

b = document.getElementById("dvd")
b.addEventListener("click",dvd)

a = document.getElementById("dot")
a.addEventListener("click",drawDot)
