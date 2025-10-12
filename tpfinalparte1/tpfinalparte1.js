//www.youtube.com/watch?v=51T73uy-2p8
//Alumnos: Juan Ignacio Urquijo , Guadalupe Cuello 
//Comision 1 
// Profesor Jose Luis Bugiolachi

let click;
let pantalla=0;

function setup() {
  createCanvas(640, 480);
  parrafos();
  for (let i=0; i<20; i++) {
    imagen[i].resize(640, 480);
  }
  textSize(20);
}

function draw() {
  //pantalla 0 (presentacion)
  if (pantalla===0) {
    miFondo(imagen[0], textos[0], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Comenzar");
  }
  //pantalla 1
  if (pantalla===1) {
    miFondo(imagen[1], textos[1], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 14 (primera pregunta)
  if (pantalla===14) {
    miFondo(imagen[14], textos[14], 5, -100, 0, 0);
    miBoton(170, 350, 100, 50, "Si");
    miBoton(370, 350, 100, 50, "No");
  }
  //pantalla 2
  if (pantalla===2) {
    miFondo(imagen[2], textos[2], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 3
  if (pantalla===3) {
    miFondo(imagen[3], textos[3], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 4
  if (pantalla===4) {
    miFondo(imagen[4], textos[4], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 15 (segunda pregunta)
  if (pantalla===15) {
    miFondo(imagen[15], textos[15], 5, -100, 0, 0);
    miBoton(170, 350, 100, 50, "Si");
    miBoton(370, 350, 100, 50, "No");
  }
  //pantalla 5
  if (pantalla===5) {
    miFondo(imagen[5], textos[5], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 6
  if (pantalla===6) {
    miFondo(imagen[6], textos[6], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 16 (tercera pregunta)
  if (pantalla===16) {
    miFondo(imagen[16], textos[16], 5, -100, 0, 0);
    miBoton(170, 350, 100, 50, "Si");
    miBoton(370, 350, 100, 50, "No");
  }
  //pantalla 7
  if (pantalla===7) {
    miFondo(imagen[7], textos[7], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 8
  if (pantalla===8) {
    miFondo(imagen[8], textos[8], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 9 (final bueno pt1)
  if (pantalla===9) {
    miFondo(imagen[9], textos[9], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 10 (final neutral)
  if (pantalla===10) {
    
    miFondo(imagen[10], textos[10], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 11
  if (pantalla===11) {
    miFondo(imagen[11], textos[11], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 12
  if (pantalla===12) {
    miFondo(imagen[12], textos[12], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 13 (final malo pt1)
  if (pantalla===13) {
    miFondo(imagen[13], textos[13], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Siguiente");
  }
  //pantalla 17 (final bueno pt2)
  if (pantalla===17) {
    miFondo(imagen[17], textos[17], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Reiniciar");
  }
  //pantalla 18 (final malo pt2)
  if (pantalla===18) {
    miFondo(imagen[18], textos[18], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Reiniciar");
  }
  //pantalla 19 (final neutral pt2)
  if (pantalla===19) {
    miFondo(imagen[19], textos[19], 5, -100, 0, 0);
    miBoton(520, 420, 100, 45, "Reiniciar");
  }
}
