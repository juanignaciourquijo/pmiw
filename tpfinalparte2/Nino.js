class Nino {
  constructor(x, y, tam, img) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.ancho = this.tam;
    this.alto = this.tam;
    this.img = img;
    this.vivo = true;
    
  }

  dibujar() {
    if (!this.vivo) return;
    if (this.img) {
      imageMode(CENTER);
      image(this.img, this.x, this.y, this.tam, this.tam);
      imageMode(CORNER);
    } else {
      fill(255, 0, 0);
      ellipse(this.x, this.y, this.tam, this.tam);
    }
  }
}
