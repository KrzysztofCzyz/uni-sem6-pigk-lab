var date;
var canvas;
var context;
var last_time;
var ball;
var area;
var plate;
var stop = false;
var drawGameOver = false;
var score;
var levels;
window.onload = function () {
    canvas = document.getElementById("AnimationCanvas");
    context = canvas.getContext("2d");
    //Deklaracja zmiennych podlegających zmianie podczas całej animacji 
    last_time = 0; stop = false;
    ball = {}; //obiekt piłka 
    area = {}; //obiekt obszar poruszania 
    plate = {}; // paletka


    //Włączenie poruszania 
    document.onkeydown = function (evt) {
        switch (evt.code) {
            case "ArrowLeft":
                //Strzałka w lewo
                plate.vx = -300;
                //Zmiana kierunku (-300 pikseli/s)
                break;
            case "ArrowRight":
                //Strzałka w prawo
                plate.vx = 300;
                //Zmiana kierunku
                break;
        }
    }



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
        score = 0;
        plate = {
            x: area.width / 2.0,
            y: area.height - 20,
            width: 100,
            height: 7,
            vx: 0,
            vy: 0,
            fillStyle: "green",
            strokeStyle: "black"
        };
        levels = Array();
        brick = {
            width: 48, height: 18,
            fillStyles: ["green", "blue", "yellow", "red"],
            strokeStyle: "black"
        };
        bricks = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 3, 0, 0, 0, 0, 3, 3, 0],
        [0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
        [0, 3, 2, 3, 2, 3, 2, 1, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        bricks2 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 3, 0, 0, 0, 0, 3, 3, 0],
        [0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
        [0, 3, 2, 3, 2, 3, 2, 1, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        bricks3 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 3, 0, 0, 0, 0, 3, 3, 0],
        [0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
        [0, 3, 2, 3, 2, 3, 2, 1, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        bricks4 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 3, 0, 0, 0, 0, 3, 3, 0],
        [0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
        [0, 3, 2, 3, 2, 3, 2, 1, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        levels.push(bricks2,bricks3,bricks4);

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



        //Wyznaczenie przesunięcia paletki 
        var pdx = plate.vx * time_interval / 1000;
        //Poruszanie paletki (sprawdzenie warunków granicznych) 
        if (plate.x + pdx >= area.x &&
            plate.x + pdx + plate.width <= area.width) {
            // To poruszaj 
            plate.x += pdx;
        } else {
            plate.vx = 0;
            // zatrzymanie paletki 
        }
        //……
        var nextLevel = true;
        for (var i = 0; i < 10; i++) //po szeroko±ci okna 
        {
            for (var j = 0; j < 10; j++) //po wysoko±ci 
            {
                if (bricks[j][i] > 0) {
                    nextLevel = false;
                    break;
                }
            }
            if(!nextLevel)
            break;
        }

        if(nextLevel){
            bricks = shift(levels);
        }
        //KOLIZJA PALETKA PILKA 
        if (ball.y + ball.r >= plate.y)
        //odbicie piłki od paletki 
        {
            if (ball.x >= plate.x && ball.x <= plate.x + plate.width)
            //odbicie 
            {
                plate_center = plate.x + plate.width / 2.0;
                ball.vx = ball.vx - 4 * (plate_center - ball.x);
                //zmiana kąta odbicia 
                ball.vy = -ball.vy; //odbicie po osi OY
            } else {
                drawGameOver = true; //koniec gry 
            }
        }

        //KOLIZJA PALETKA KOSTKA
        for (var i = 0; i < 10; i++) //po szeroko±ci okna 
        {
            for (var j = 0; j < 10; j++) //po wysoko±ci 
            {
                if (bricks[j][i] > 0) {
                    if ((ball.y + ball.r >= j * (brick.height + 2))
                        && (ball.y + ball.r <= j * (brick.height + 2) + brick.height)) {
                        if (ball.x >= i * (brick.width + 2)
                            && ball.x <= i * (brick.width + 2) + brick.width) {
                            ball.vy = -ball.vy;
                            ball.vx = -ball.vx;
                            bricks[j][i]--;
                            score++;
                        }
                    }
                }
            }
        }


        // 4. Rysowanie obiektów:
        // 4.1 Zapamiętanie stanu płótna 
        if (drawGameOver) {
            context.save();
            context.clearRect(0, 0, 500, 500);
            context.fillStyle = "black";
            context.font = "50pt Calibri";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText("Game over", area.width / 2.0, area.height / 2.0);
            context.fillText("Score: " + score, area.width / 2.0, area.height / 3.0);
            context.restore();
        } else {
            context.save();

            //RYSUJ SCORE
            context.fillStyle = "black";
            context.font = "15pt Calibri";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText("Score: " + score,area.width / 2.0,10);

            for (var i = 0; i < 10; i++) //po szeroko±ci okna 
            {
                for (var j = 0; j < 10; j++) //po wysoko±ci 
                {
                    if (bricks[j][i] > 0) {
                        context.beginPath();
                        context.fillStyle = brick.fillStyles[bricks[j][i]];
                        context.fillRect(i * (brick.width + 2),
                            j * (brick.height + 2), brick.width, brick.height);
                        context.strokeRect(i * (brick.width + 2),
                            j * (brick.height + 2), brick.width, brick.height);
                        context.closePath();
                    }
                }
            }

            context.beginPath();
            context.fillStyle = "blue";
            context.strokeStyle = "black";
            context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
            context.closePath();
            context.stroke();
            context.fill();

            // Rysowanie Paletki
            context.beginPath();
            context.fillStyle = plate.fillStyle;
            context.strokeStyle = plate.strokeStyle;
            context.fillRect(plate.x, plate.y, plate.width, plate.height);
            context.strokeRect(plate.x, plate.y, plate.width, plate.height);
            context.closePath();

            context.restore();
        }


        // 5. Ponowne wywołanie pętli animacji 
        if (!stop) window.requestAnimationFrame(drawAnimation);
    }

    InitAnimation();

}
