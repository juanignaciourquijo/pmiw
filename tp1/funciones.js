function dibujarGrilla(posx, posx2, posy, posy2, a, l) {

  for (let i = 0; i < cant1; i++) {
    for (let j = 0; j < cant2; j++) {
      let x = posx + i * a;
      let y = posy + j * l;
      stroke(0);
      dibujarCubo(x, y, 30);
    }
  }

  for (let i = 0; i < cant2; i++) {
    for (let j = 0; j < cant2; j++) {
      let x = posx2 + i * a;
      let y = posy2 + j * l;
      stroke(0);
      dibujarCubo(x, y, 30);
    }
  }

  let brillo = calcularBrillo(colorArriba);

  if (brillo > 127) {
    print("Color claro");
  } else {
    print("Color oscuro");
  }
}


function dibujarCubo( x, y, t) {
  let x0 = x;
  let  y0 = y;
  let x1 = x + t;
  let   y1 = y - t;
  let  x2 = x + 2 * t;
  let  y2 = y;
  let x3 = x + t;
  let y3 = y + t;
  let x4 = x;
  let  y4 = y + t;
  let x5 = x + t;
  let  y5 = y + 2 * t;
  let x6 = x + 2 * t;
  let y6 = y + t;

  // Cara de arriba
  fill(colorArriba);
  quad(x0, y0, x1, y1, x2, y2, x3, y3);

  // Cara izquierda
  fill(150);
  quad(x0, y0, x3, y3, x5, y5, x4, y4);

  // Cara derecha
  fill(0);
  quad(x3, y3, x2, y2, x6, y6, x5, y5);
}

function calcularBrillo(c) {
  let r = red(c);
  let g = green(c);
  let b = blue(c);
  return (r + g + b) / 3.0;
}

function mousePressed() {
  colorArriba = color(random(255), random(255), random(255));
}


function mouseMoved() {
  let d = dist(mouseX, mouseY, width/2, height/2);

  let brillo = map(d, 0, dist(0, 0, width/2, height/2), 255, 0);

  colorArriba = color(brillo);
}

function keyPressed() {
  if (key == 'r' || key == 'R') {
    colorArriba = color(255);
  }
}
