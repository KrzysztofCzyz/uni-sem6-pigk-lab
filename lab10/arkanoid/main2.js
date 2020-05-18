window.onload = function () {
    var canvas = document.getElementById("AnimationCanvas");
    var context = canvas.getContext("2d");
    paper.setup(canvas);
    with (paper) {
        //Definicja: sceny, paletki, piłki, cegieł 
        with (paper) {
            var scene = new Path.Rectangle({ point: [0, 0], size: [500, 500], strokeColor: 'black', });
            var location = new Point(100, 100); var r = 10; var ball = new Path.Circle(location, r); ball.fillColor = 'blue'; ball.vx = 100; //prędkość poruszania [piksele/sec] 
            ball.vy = 150;
            var plate = new Path.Rectangle({ point: [canvas.width / 2 - 15, canvas.height - 40], size: [160, 20], strokeColor: "black", fillColor: "red" }); plate.vx = 0;
            var b = {
                width: 48, height: 18,
                fillStyles: ["green", "blue", "yellow", "red"],
                strokeStyle: "black"
            };
            // context.fillRect(i * (brick.width + 2),
            // j * (brick.height + 2), brick.width, brick.height);
            var score = 0;
            var area = { width: canvas.width, height: canvas.height }
            var bricks = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 3, 3, 0, 0, 0, 0, 3, 3, 0],
            [0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
            [0, 3, 2, 3, 2, 3, 2, 1, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

            var drawBricks = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 3, 3, 0, 0, 0, 0, 3, 3, 0],
            [0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
            [0, 3, 2, 3, 2, 3, 2, 1, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
            for (var i = 0; i < 10; i++) //po szeroko±ci okna 
            {
                for (var j = 0; j < 10; j++) //po wysoko±ci 
                {
                    if (bricks[j][i] > 0) {
                        drawBricks[j][i] = new Path.Rectangle({ point: [i * (b.width + 2), j * (b.height + 2)], size: [b.width, b.height], strokeColor: "black", fillColor: b.fillStyles[bricks[j][i]] })
                    }
                    drawBricks[j][i].value = bricks[j][i];
                }
            }

        }
        var drawGameOver = false;
        //Implementacja interakcji z klawiaturą lub myszą przy użyciu narzędzia Tool 
        var tool = new Tool(); tool.onKeyDown = function (event) {
            switch (event.key) {
                case "left": plate.vx = -200;
                    //lewo 
                    break;
                case "right": plate.vx = 200;  //prawo
                    break;
            }
        }
        //Zmiana właściwości wszystkich obiektów rysowanych na scenie: 

        //Poruszanie, detekcje kolizji: piłka – krawędzie sceny, piłka – paletka, łka - cegły 
        view.onFrame = function (evt) {
            if (drawGameOver) {
                var text = new PointText(new Point(200, 50));
                text.justification = 'center';
                text.fillColor = 'black';
                text.content = 'Game over: ' + score;
            }
            else {
                var delta = evt.delta;
                var vx = ball.vx * delta; //wektor przemieszczenia po OX 
                var vy = ball.vy * delta; //wektor przemieszczenia po OY 

                for (var i = 0; i < 10; i++) //po szeroko±ci okna 
                {
                    for (var j = 0; j < 10; j++) //po wysoko±ci 
                    {
                        if (drawBricks[j][i].value > 0) {
                            if ((ball.bounds.bottom + vy >= j * (b.height + 2))
                                && (ball.bounds.bottom + vy <= j * (b.height + 2) + b.height)) {
                                if (ball.bounds.right + vx >= i * (b.width + 2)
                                    && ball.bounds.right + vx <= i * (b.width + 2) + b.width) {
                                    ball.vy = -ball.vy;
                                    ball.vx = -ball.vx;
                                    drawBricks[j][i].value--;
                                    drawBricks[j][i].fillColor = b.fillStyles[drawBricks[j][i].value];
                                    if(drawBricks[j][i].value == 0)
                                    drawBricks[j][i].remove();
                                    score++;
                                    console.log("Odbito " + score)
                                }
                            }
                        }
                    }
                }


                //Detekcja kolizji lewa, prawa ścianka 
                if (ball.bounds.left + vx <= scene.bounds.left || ball.bounds.right + vx >= scene.bounds.right) { ball.vx = -ball.vx; }
                //detekcja kolizji góra, dół 
                if (ball.bounds.top + vy <= scene.bounds.top || ball.bounds.bottom + vy >= scene.bounds.bottom) { ball.vy = -ball.vy }
                //Puruszanie piłki 
                //Kolizja paetka pilka
                if (ball.bounds.bottom + vy >= plate.bounds.top && ball.bounds.right + vx >= plate.bounds.left && ball.bounds.left + vx <= plate.bounds.right) { ball.vy = -ball.vy; }
                else {
                    if (ball.bounds.bottom >= plate.bounds.bottom) {
                        drawGameOver = true; //koniec gry 
                    }
                }
                if (plate.bounds.left + plate.vx * delta <= scene.bounds.left || plate.bounds.right + plate.vx * delta >= scene.bounds.right) { plate.vx = 0; }
                //paletka ruch
                ball.translate(vx, vy);
                plate.translate(plate.vx * delta, 0);
            }

        }
    }
}