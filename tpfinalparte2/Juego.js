class Juego {
  constructor() {
    this.MIN_X = 65;
    this.MAX_X = 575;
    this.MIN_Y = 55;
    this.MAX_Y = 430;

    this.estado = "menu";

    this.tigre = null;
    this.guardias = [];
    this.ninos = [];
    this.comidos = 0;
    this.empezarJuego = false;
    this.reiniciarJuego();
  }

  reiniciarJuego() {
    this.comidos = 0;
    this.empezarJuego = false;


    this.tigre = new Tigre(width/2, height/2, 50, 3, imgTigre, this);


    this.guardias = [];
    for (let i = 0; i < 3; i++) {
      let gx = random(this.MIN_X + 25, this.MAX_X - 25);
      let gy = random(this.MIN_Y + 25, this.MAX_Y - 25);
      this.guardias.push(new Guardia(gx, gy, 50, imgGuardia, this));
    }


    this.ninos = [];
    for (let i = 0; i < 8; i++) {
      let kx = random(this.MIN_X + 22.5, this.MAX_X - 22.5);
      let ky = random(this.MIN_Y + 22.5, this.MAX_Y - 22.5);
      this.ninos.push(new Nino(kx, ky, 45, imgNene));
    }
  }

  actualizar() {
    if (this.estado === "menu") {
      this.dibujarMenu();
    } else if (this.estado === "instrucciones") {
      this.dibujarInstr();
    } else if (this.estado === "jugar") {
      this.dibujarJuego();
    } else if (this.estado === "ganar") {
      this.dibujarGanar();
    } else if (this.estado === "perder") {
      this.dibujarPerder();
    } else if (this.estado === "creditos") {
      this.dibujarCred();
    }
  }

  dibujarMenu() {
    imageMode(CORNER);
    if (fondoMenu) image(fondoMenu, 0, 0, width, height);
    else background(200, 230, 180);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("Presiona ESPACIO para jugar", width/2, 450);
    text("Presiona I para instrucciones", width/2, 470);
  }

  dibujarInstr() {
    imageMode(CORNER);
    if (fondoInstrucciones) image(fondoInstrucciones, 0, 0, width, height);
    else background(180);

    fill(0);
    textAlign(LEFT);
    fill(255);
    stroke(2);
    textSize(18);
    text("INSTRUCCIONES:", 20, 40);

    textSize(14);
    text("- Mover: flechas o WASD", 20, 80);
    text("- Objetivo: comerte a todos los niños", 20, 110);
    text("- Evita a los guardias", 20, 140);
    text("- Ganas si comes a todos", 20, 170);
    text("- Pierdes si un guardia te toca", 20, 200);
    text("- Presiona ESPACIO para empezar", 20, 240);
    noStroke();
  }

  dibujarJuego() {
    imageMode(CORNER);
    if (fondoJuego) image(fondoJuego, 0, 0, width, height);
    else background(200, 230, 180);
    fill(255);
    stroke(2);
    textSize(16);
    textAlign(LEFT);
    text("Comidos: " + this.comidos, 50, 20);
    noStroke();

    // NIÑOS
    for (let i = this.ninos.length - 1; i >= 0; i--) {
      let k = this.ninos[i];
      k.dibujar();

      if (k.vivo && this.tigre.colision(k) && this.empezarJuego) {
        k.vivo = false;
        this.ninos.splice(i, 1);
        this.comidos++;

        if (sonidoComer) sonidoComer.play();

        if (this.ninos.length === 0) {
          this.estado = "ganar";
          return;
        }
      }
    }

    // GUARDIAS
    for (let g of this.guardias) {
      g.dibujar();
      if (this.empezarJuego) g.mover();

      if (this.tigre.colision(g) && this.empezarJuego) {
        if (sonidoPerder) sonidoPerder.play();
        this.estado = "perder";
        return;
      }
    }

    // TIGRE
    this.tigre.dibujar();
    if (this.empezarJuego) this.tigre.mover();


    if (!this.empezarJuego) {
      fill(0, 150);
      rect(0, 0, width, height);
      fill(255);
      textAlign(CENTER);
      textSize(20);
      text("Presiona ESPACIO para comenzar", width/2, height/2);
    }
  }

  dibujarGanar() {
    background(50, 180, 50);
    fill(255);
    textAlign(CENTER);
    textSize(28);
    text("¡GANASTE!", width/2, height/2 - 20);
    textSize(16);
    text("Click para ir a créditos", width/2, height/2 + 20);
  }

  dibujarPerder() {
    background(180, 50, 50);
    fill(255);
    textAlign(CENTER);
    textSize(28);
    text("TE ATRAPARON", width/2, height/2 - 20);
    textSize(16);
    text("Click para ir a créditos", width/2, height/2 + 20);
  }

  dibujarCred() {
    imageMode(CORNER);
    if (fondoCreditos) image(fondoCreditos, 0, 0, width, height);
    else background(100);

    textAlign(LEFT);
    fill(255);
    stroke(2);
    textSize(24);
    text("CRÉDITOS", 120, 40);

    textSize(16);
    text("Integrantes: Cuello Guadalupe, Urquijo Juan Ignacio", 120, 80);
    text("Programado en POO con p5.js", 120, 110);
    text("Presiona R para reiniciar", 120, 140);
    noStroke();
  }

  tecla(k) {
    if (k === ' ') {
      if (this.estado === "menu" || this.estado === "instrucciones") {
        this.estado = "jugar";
        this.reiniciarJuego();
        return;
      }

      if (this.estado === "jugar") {
        this.empezarJuego = !this.empezarJuego;
        return;
      }
    }

    if (k === 'i' || k === 'I') {
      this.estado = "instrucciones";
      return;
    }

    if (k === 'r' || k === 'R') {
      this.reiniciarJuego();
      this.estado = "menu";
      return;
    }
  }

  mouse() {
    if (this.estado === "ganar") {
      this.estado = "creditos";
      return;
    }

    if (this.estado === "perder") {
      this.estado = "creditos";
      return;
    }
  }
}
