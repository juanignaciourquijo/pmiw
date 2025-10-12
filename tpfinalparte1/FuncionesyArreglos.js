let imagen=[];
let textos=[];

function preload() {
  for (let i=0; i<20; i++) {
    imagen[i]=loadImage('data/'+i+'.png');
    click = loadSound('data/click.mp3');
  }
}
function parrafos() {
  textos=['Trabajo realizado por Urquijo Juan Ignacio y Cuello Guadalupe', 'Charles esta en clase y siente ganas de ir al baño', 'La maestra lo humilla frente a sus compañeros pero finalmente lo deja salir', 'En el pasillo, Charles se siente observado y comienza a asustarse', 'Charles llega al baño y teme abrir la puerta', 'Al abrir la puerta, Charles ve un tigre y huye de vuelta al salon', 'Al contarle a su maestra, sus compañeros se rien', 'La maestra decide ir a revisar y encuentra al tigre', 'La maestra va a la oficina del director a informarle y este llama a control animal', 'Control animal se lleva al tigre sin inconvenientes y nadie sale herido', 'Charles piensa en todas las posibilidades y finalmente se queda sin ir al baño', 'La maestra no cree en Charles y manda a un niño a revisar', 'Como el niño no vuelve, la maestra llama al director para que supervice a los niños y va a revisar', 'Como la maestra tampoco vuelve, el director tambien va a revisar, dejando a los niños solos', '¿Charles deberia pedir permiso para ir al baño?', '¿Charles deberia abrir la puerta?', '¿La maestra deberia creerle?', 'Felicitaciones!, conseguiste el final bueno, ¿Deseas jugar de nuevo?', 'Que lastima... Conseguiste el final malo, ¿Deseas jugar de nuevo?', 'Conseguiste el final neutral, ¿Deseas jugar de nuevo?' ]
}

function mousePressed() {
  if (pantalla===0 && overMouse(520, 420, 100, 45)) pantalla=1;
  else if (pantalla===1 && overMouse(520, 420, 100, 45)) pantalla=14;
  else if (pantalla===14 && overMouse(170, 350, 100, 50)) pantalla=2; // Sí
  else if (pantalla===14 && overMouse(370, 350, 100, 50)) pantalla=10; // No
  else if (pantalla===2 && overMouse(520, 420, 100, 45)) pantalla=3;
  else if (pantalla===3 && overMouse(520, 420, 100, 45)) pantalla=4;
  else if (pantalla===4 && overMouse(520, 420, 100, 45)) pantalla=15;
  else if (pantalla===15 && overMouse(170, 350, 100, 50)) pantalla=5; // Sí
  else if (pantalla===15 && overMouse(370, 350, 100, 50)) pantalla=10; // No
  else if (pantalla===5 && overMouse(520, 420, 100, 45)) pantalla=6;
  else if (pantalla===6 && overMouse(520, 420, 100, 45)) pantalla=16;
  else if (pantalla===16 && overMouse(170, 350, 100, 50)) pantalla=7; // Sí
  else if (pantalla===16 && overMouse(370, 350, 100, 50)) pantalla=11; // No
  else if (pantalla===7 && overMouse(520, 420, 100, 45)) pantalla=8;
  else if (pantalla===8 && overMouse(520, 420, 100, 45)) pantalla=9;
  else if (pantalla===11 && overMouse(520, 420, 100, 45)) pantalla=12;
  else if (pantalla===12 && overMouse(520, 420, 100, 45)) pantalla=13;
  else if (pantalla===9 && overMouse(520, 420, 100, 45)) pantalla=17;
  else if (pantalla===10 && overMouse(520, 420, 100, 45)) pantalla=19;
  else if (pantalla===13 && overMouse(520, 420, 100, 45)) pantalla=18;
  else if ((pantalla===17 || pantalla===18 || pantalla===19) && overMouse(520, 420, 100, 45)) pantalla=0;
}

function miBoton(posX, posY, tamX, tamY, textoB) {
  if (overMouse(posX, posY, tamX, tamY)) {
    fill(110);
  } else {
    fill (157);
  }
  rect(posX, posY, tamX, tamY, tamY/4);
  fill(0);
  textAlign(CENTER, CENTER);
  text(textoB, posX+tamX/2, posY+tamY/2);
}

function overMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}

function miFondo(imagen, texto, posX, posY, tamXB, tamYB) {
  image(imagen, 0, 0);
  fill(255);
  text(texto, posX, posY, width-tamXB, height-tamYB);
}

function mouseClicked() {
  click.amp(0.5);
  click.play();
}
