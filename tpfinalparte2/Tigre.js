class Tigre {
  constructor(x, y, tam, velocidad, img, juegoRef) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.ancho = this.tam;
    this.alto = this.tam;
    this.velocidad = velocidad;
    this.img = img;
    this.juego = juegoRef;

  }

  mover() {
    let r = this.tam / 2;

    if ((keyCode === RIGHT_ARROW || keyCode === 68) &&
      this.x < this.juego.MAX_X - r) {
      this.x += this.velocidad;
    }

    if ((keyCode === LEFT_ARROW || keyCode === 65) &&
      this.x > this.juego.MIN_X + r) {
      this.x -= this.velocidad;
    }

    if ((keyCode === UP_ARROW || keyCode === 87) &&
      this.y > this.juego.MIN_Y + r) {
      this.y -= this.velocidad;
    }

    if ((keyCode === DOWN_ARROW || keyCode === 83) &&
      this.y < this.juego.MAX_Y - r) {
      this.y += this.velocidad;
    }
  }

  dibujar() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.tam, this.tam);
    imageMode(CORNER);
  }


  colision(obj) {
    if (this.x < obj.x + obj.ancho/2 &&
      this.x + this.ancho/2 > obj.x &&
      this.y < obj.y + obj.alto/2 &&
      this.y + this.alto/2 > obj.y) {
      return true;
    }
    return false;
  }
}
