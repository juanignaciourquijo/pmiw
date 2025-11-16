class Guardia {
  constructor(x, y, tam, img, juegoRef) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.ancho = this.tam;
    this.alto = this.tam;
    this.img = img;
    this.juego = juegoRef;
    this.vx = random([-1, 1]) * random(1, 2);
    this.vy = random([-1, 1]) * random(1, 2);
    
  }

  mover() {
    this.x += this.vx;
    this.y += this.vy;

    let r = this.tam / 2;

    if (this.x < this.juego.MIN_X + r) {
      this.x = this.juego.MIN_X + r;
      this.vx *= -1;
    }
    if (this.x > this.juego.MAX_X - r) {
      this.x = this.juego.MAX_X - r;
      this.vx *= -1;
    }

    if (this.y < this.juego.MIN_Y + r) {
      this.y = this.juego.MIN_Y + r;
      this.vy *= -1;
    }
    if (this.y > this.juego.MAX_Y - r) {
      this.y = this.juego.MAX_Y - r;
      this.vy *= -1;
    }
  }

  dibujar() {
    if (this.img) {
      imageMode(CENTER);
      image(this.img, this.x, this.y, this.tam, this.tam);
      imageMode(CORNER);
    } else {
      fill(0, 0, 255);
      rectMode(CENTER);
      rect(this.x, this.y, this.tam, this.tam);
      rectMode(CORNER);
    }
  }
}
