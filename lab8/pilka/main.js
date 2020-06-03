var date;
var canvas;
var context;
var last_time;
var ball;
var area;
window.onload = function () {
    canvas = document.getElementById("AnimationCanvas");
    context = canvas.getContext("2d");
    //Deklaracja zmiennych podlegających zmianie podczas całej animacji 
    last_time = 0; stop = false;
    ball = {}; //obiekt piłka 
    area = {}; //obiekt obszar poruszania 


    //Włączenie poruszania 


    //Inicjalizacja stanu początkowego animacji 
    function InitAnimation() {
        date = new Date();
        last_time = date.getTime() + date.getMilliseconds() / 1000;;
        //Uruchomienie animacji po inicjalizacji  
        //Ustawienie stanu początkowego płótna 
        context.fillStyle = "white";
        context.strokeStyle = "black";
        //Ustalenie stanu początkowego piłki 
        ball = { x: 20, y: 20, r: 10, vx: 100, vy: -150 };
        //vx oraz vx – to oczywiście początkowa prędkość piłki
        area = { x: 0, y: 0, width: 500, height: 500 };
        window.requestAnimationFrame(drawAnimation);
    }


    //właściwa funkcja rysująca kolejne klatki animacji
    function drawAnimation() {
        // 2. Czyszczenie płótna 
        context.clearRect(0, 0, 500, 500);
        // var currentTime = date.getTime();
        // var time_interval = currentTime - last_time;
        var time_interval = 10;
        // Zapamiętanie ostatniego czasu animacji 
        // last_time = currentTime;
        // 3.1. Wyznaczenie nowego stanu rysowanych obiektów 
        // Wyznaczenie przesunięcia piłki (dx, dy) 
        var dx = ball.vx * time_interval / 1000;
        //1000 – time_interval - [ms] 
        var dy = ball.vy * time_interval / 1000;
        //Warunki odbicia piłki od krawędzi obszaru poruszania (area)
        //Dla osi OX 
        if (ball.x + dx + ball.r >= area.width | ball.x - ball.r + dx <= 0) {
            //Zmiana kierunku 
            ball.vx = -ball.vx;
            //Ponowne wyznaczenie przemieszczenia 
            dx = ball.vx * time_interval / 1000;
        }
        ball.x += dx;  //Poruszanie 
        //Dla osi OY 
        if (ball.y + dy + ball.r >= area.height | ball.y - ball.r + dy <= 0) {
            //Zmiana kierunku 
            ball.vy = -ball.vy;
            dy = ball.vy * time_interval / 1000;
        }
        ball.y += dy;



        // 4. Rysowanie obiektów:
        // 4.1 Zapamiętanie stanu płótna 
        
            context.save();

        
            context.beginPath();
            context.fillStyle = "blue";
            context.strokeStyle = "black";
            context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
            context.closePath();
            context.stroke();
            context.fill();

            context.restore();


        // 5. Ponowne wywołanie pętli animacji 
        if (!stop) window.requestAnimationFrame(drawAnimation);
        
    }
    InitAnimation();
}
    
