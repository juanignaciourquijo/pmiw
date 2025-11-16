//Comision 1 Profesor Jose Luis Bugiolachi
// Alumnos: Guadalupe Cuello, Juan Ignacio Urquijo
//https://www.youtube.com/watch?v=K5QE-mB7ilI

let fondoMenu, fondoInstrucciones, fondoJuego, fondoCreditos;
let imgTigre, imgGuardia, imgNene;
let sonidoMusica, sonidoClick, sonidoComer, sonidoPerder;
let juego;

function preload() {
  fondoMenu = loadImage("data/fondo_menu.png");
  fondoInstrucciones = loadImage("data/fondo_instrucciones.png");
  fondoJuego = loadImage("data/fondo_juego.png");
  fondoCreditos = loadImage("data/fondo_creditos.png");

  imgTigre = loadImage("data/tigre.png");
  imgGuardia = loadImage("data/guardia.png");
  imgNene = loadImage("data/nene.png");

  sonidoMusica = loadSound("data/fondo_musica.mp3");
  sonidoClick  = loadSound("data/click.mp3");
  sonidoComer  = loadSound("data/comer.mp3");
  sonidoPerder = loadSound("data/perder.mp3");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();

  if (sonidoMusica && !sonidoMusica.isPlaying()) {
    sonidoMusica.setLoop(true);
    sonidoMusica.setVolume(0.12);
    sonidoMusica.play();
  }
}


function draw() {
  juego.actualizar();
}

function keyPressed() {
  juego.tecla(key);
}

function mousePressed() {
  sonidoClick.play();
  juego.mouse();
}
