alert('Kamera rusza się poprzez klawisze W A S D ')
//'Poruszanie kostka - strzalki. Poruszanie kamera - WASD'

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial({ color: 0xff00ff });
var material2 = new THREE.MeshNormalMaterial({ color: 0xff0000 });
var material3 = new THREE.MeshNormalMaterial({ color: 0x0080ff });
var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry, material);
var cube3 = new THREE.Mesh(geometry, material2);
var cube4 = new THREE.Mesh(geometry, material3);

var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);

var directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(-2, 5, 0);

var directionalLight3 = new THREE.DirectionalLight(0x000000, 1);
directionalLight3.position.set(2, 4, -2);

var directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight4.position.set(3, -2, 0);

var directionalLight5 = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight5.position.set(1, 5, 0);

scene.add(directionalLight);
scene.add(directionalLight2);
scene.add(directionalLight3);
scene.add(directionalLight4);
scene.add(directionalLight5);
scene.add(cube);
scene.add(cube2);
scene.add(cube3);
scene.add(cube4);
camera.position.z = 5;
cube.position.x = 4;
cube2.position.x = 6;
cube3.position.x = 1;
cube4.position.x = -3;
cube2.position.y = 2;
cube4.position.y = 3;

var cameraz = 4;
camera.position.z = 10;

var xSpeed = 0.1;
var ySpeed = 0.1;

document.onkeydown = function (evt) {
    switch (evt.keyCode) {
        case 37: //strzałka w lewo
            cube.position.x -= xSpeed;
            break;
        case 39: //strzałka w prawo
            cube.position.x += xSpeed;
            break;
        case 38: //strzałka w górę
            cube.position.y += ySpeed;
            break;
        case 40: //strzałka w dół
            cube.position.y -= ySpeed;
            break;
        case 65:
            camera.position.x -= 2;
            break;
        case 68:
            camera.position.x += 2;
            break;
        case 83:
            camera.position.z += 2;
            break;
        case 87:
            camera.position.z -= 2;
            break;
    }
};

var vx1 = 0.01;
var vy1 = 0.03;
var vz1 = 0.06;

var vx3 = 0.02;
var vy3 = 0.03;
var vz3 = 0.05;

var vx4 = 0.01;
var vy4 = 0.07;
var vz4 = 0.03;

function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    if (cube2.position.x > 5 || cube2.position.x < -5)
        if (cube2.position.y > 4 || cube2.position.y < -4) vy1 = -vy1;
    if (cube2.position.z > 4 || cube2.position.z < -4) vz1 = -vz1;
    cube2.position.x += vx1;
    cube2.position.y += vy1;
    cube2.position.z += vz1;
    cube2.rotation.x += vx1;

    if (cube3.position.x > 5 || cube3.position.x < -5) vx3 = -vx3;
    if (cube3.position.y > 4 || cube3.position.y < -4) vy3 = -vy3;
    if (cube3.position.z > 4 || cube3.position.z < -4) vz3 = -vz3;
    cube3.position.x += vx3;
    cube3.position.y += vy3;
    cube3.position.z += vz3;
    cube3.rotation.y += 0.3;

    if (cube4.position.x > 5 || cube4.position.x < -5) vx4 = -vx4;
    if (cube4.position.y > 4 || cube4.position.y < -4) vy4 = -vy4;
    if (cube4.position.z > 4 || cube4.position.z < -4) vz4 = -vz4;
    cube4.position.x += vx4;
    cube4.position.y += vy4;
    cube4.position.z += vz4;
    cube4.rotation.z += 0.01;

    renderer.render(scene, camera);
}

render();