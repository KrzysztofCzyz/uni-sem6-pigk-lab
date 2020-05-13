var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
draw_wave(ctx,20,60,100);



var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
var tab = Array(10,30,50,120);
draw_pie(ctx2,tab);

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
draw_rec2(ctx3,100,100);

var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");
draw_cog(ctx4,160,160,70,80,52,15);

function draw_cog(context,x1,y2,r12,r22,il,r0){
    context.beginPath();
    var koloZ = { x: x1, y: y2, r1:r12, r2:r22 };
    var ile = il; //liczba zębów
    var r = koloZ.r1;
    context.fillStyle = "blue";
    context.strokeStyle = "black";
    for (var i = 0; i < ile; i++) { 
        var alpha = ((Math.PI * 2) / ile) * (i); //aktualny kąt

        if (i % 2 == 0) { 
            if (r == koloZ.r1) 
                r = koloZ.r2;
            else 
                r = koloZ.r1;
        } 
        var x = (r * Math.sin(alpha)) + koloZ.x;
        var y = (r * Math.cos(alpha)) + koloZ.y;
        if (i == 0)
            context.moveTo(x, y); 
        else 
            context.lineTo(x, y);
        }

    context.fill();
    context.stroke();
    context.closePath();
    var delta = r12/2;
    with(context){
            globalCompositeOperation = "source-atop";
            beginPath();
            arc(koloZ.x, koloZ.y, r0, 0, 2 * Math.PI);
            fillStyle="white";
            fill();
            stroke();
            closePath();
            beginPath();
            arc(koloZ.x+delta, koloZ.y, r0, 0, 2 * Math.PI);
            fillStyle="white";
            fill();
            stroke();
            closePath();
            beginPath();
            arc(koloZ.x, koloZ.y+delta, r0, 0, 2 * Math.PI);
            fillStyle="white";
            fill();
            stroke();
            closePath();
            beginPath();
            arc(koloZ.x, koloZ.y-delta, r0, 0, 2 * Math.PI);
            fillStyle="white";
            fill();
            stroke();
            closePath();
            beginPath();
            arc(koloZ.x-delta, koloZ.y, r0, 0, 2 * Math.PI);
            fillStyle="white";
            fill();
            stroke();
            closePath();

        }
    
        
}


// w sumie dalo sie latwiej z fillRect
function draw_rec2(ctx,a,b){
with(ctx){
    beginPath();
    moveTo(50,50);
    arc(50,50,50,Math.PI,Math.PI*(3/2));
    closePath();
    fill();
    beginPath();
    moveTo(50,0);
    lineTo(50+a,0);
    lineTo(50+a,100+b);
    lineTo(50,100+b);
    lineTo(50,0);
    closePath();
    fill();
    beginPath();
    moveTo(50+a,50);
    arc(50+a,50,50,Math.PI*(3/2),Math.PI*2);
    closePath();
    fill();
    beginPath();
    moveTo(50+a,50+b);
    arc(50+a,50+b,50,0,Math.PI*(1/2));
    closePath();
    fill();
    beginPath();
    moveTo(50,50+b);
    arc(50,50+b,50,Math.PI*(1/2),Math.PI);
    closePath();
    fill();
    beginPath();
    moveTo(0,50);
    lineTo(a+100,50);
    lineTo(a+100,50+b);
    lineTo(0,50+b);
    lineTo(0,50);
    closePath();
    fill();
}

}



function draw_pie(ctx, arr){
let sum = 0;

arr.forEach(element => {
    sum+=element;
});

console.log(sum);

let array = Array();
arr.forEach(e => {
    array.push((e/sum));
})

console.log(array);
var start = 0;
var i = 1;
// 2 * Math.PI
var slice;
var colors = Array();
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "white");
grd.addColorStop(1, "green");
var grd2 = ctx.createLinearGradient(0, 0, 170, 0);
grd2.addColorStop(0, "white");
grd2.addColorStop(1, "yellow");
colors.push(grd,grd2);
array.forEach(e => {
    ctx.fillStyle = colors[i];
    if(i==0){
        i++;
    }
    else{
        i=0;
    }
    console.log(start)
    slice=e*2*Math.PI;
    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.arc(50,50,50,start,start+slice);
    start=start+slice;
    ctx.closePath();
    ctx.fill();
});

}

function draw_wave(c, l, h, s=20){
    c.beginPath();
    c.moveTo(0,0);


    for(i=0;i<s;i++){
        c.lineTo(l+2*i*l,0);
        c.lineTo(l+2*i*l,h);
        c.lineTo(2*l+2*i*l,h);
        c.lineTo(2*l+2*i*l,0);
    }


    c.stroke();
    c.closePath();

}


