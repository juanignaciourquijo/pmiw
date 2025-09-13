//Juan Ignacio Urquijo 
// Profesor: Jose Luis Bugiolachi
//Comision 1
//https://youtu.be/csj5cXmOLZc

let cant1 = 7;
let cant2 = 8;
let img32;
let colorArriba;

function preload() {
  img32 = loadImage('data/32.jpg');
}
function setup() {
  createCanvas(800, 400);
  img32.resize(400, 400);
  colorArriba = color(255);
}


function draw() {
  background (255);
  dibujarGrilla(400, 370, 10, 71, 60, 120);
  image (img32, 0, 0, 400, 400);
}
