PImage miImagen;

void setup() {
  size(800,400);
  surface.setLocation((displayWidth - width) / 2, (displayHeight - height) /2);
  miImagen = loadImage("soldado_juguete.jpg");
}

void draw() {
  background(255);
  image(miImagen, 0, 0, 400, 400);
  println(mouseX,mouseY);

  fill(20);//color del pantalon
    quad(610,370,597,370,587,267,604,267);//pierna completa
    quad(635,290,622,290,622,267,640,267);//pierna cortada
    
     quad(178+400,369,195+400,370,206+400,387,182+400,387);//base del zapato
     ellipse(170+400,381,30,28);//punta del zapato
      ellipse(203+400,377,20,27);//talon del zapato
      noStroke();
      quad(180+400,369,195+400,370,206+400,387,182+400,387);//base para borrar lineas internas
      stroke(0);
      rect(155+400,384,56,2);//suela del zapato
  
  fill(250,179,73);//color de la hebilla del zapato
   quad(184+400,371,192+400,370,200+400,378,189+400,378);//hebilla del zapato
   
   fill(20);//color del zapato
     quad(188+400,371,190+400,371,195+400,376,191+400,376);//parte de adentro de la hebilla
  
  fill(220,30,40);//color de la ropa
  pushMatrix();
  translate(168+400,210);
  rotate(radians(154));
  ellipse(0,0,75,10);//brazo izq
  popMatrix();
    pushMatrix();
  translate(131+400,247);
  rotate(radians(107));
  ellipse(2,0,58,10);//ante brazo izq
  popMatrix();
    pushMatrix();
  translate(248+400,215);
  rotate(radians(45));
  ellipse(0,0,70,10);//brazo der
  popMatrix();
  triangle(610,161,554,268,668,267);//cuerpo
  
  fill(250,204,204);//color de las luces rojas
  noStroke();
  triangle(195+400,200,165+400,262,176+400,262);//luz roja del cuerpo
  triangle(181+400,200,183+400,202,155+400,214);//luz roja del brazo
  triangle(133+400,232,136+400,233,131+400,240);//luz roja del ante brazo
  
  fill(252,227,171);//color de la piel
  stroke(0);
  rect(601,150,18,40);//cuello
  
  fill(220,30,40);//color de la ropa
    quad(567,179,650,178,630,190,590,190);//bufanda
    
fill(237,232,89);//color de los botones
   ellipse(588,242,15,10);//boton1
  ellipse(631,242,15,10);//boton2
  ellipse(592,216,15,10);//boton3
  ellipse(625,216,15,10);//boton4
 
 fill(250);//color de la escopeta
  quad(246+400,142,258+400,159,280+400,255,260+400,259);//escopeta pt1
  bezier(223.0+28+400,144.0+30,226.0+28+400,134.0+30,242.0+17+400,139.0+30,245.0+17+400,143.0+30);//escopeta pt2
   bezier(223.0+33+400,144.0+80,226.0+28+400,134.0+80,242.0+28+400,139.0+80,245.0+28+400,143.0+80);//escopeta pt 3
   bezier(223.0+33+400,144.0+90,226.0+33+400,134.0+90,242.0+33+400,139.0+90,245.0+30+400,143.0+90);//escopeta pt4
    bezier(223.0+35+400,144.0+105,226.0+35+400,134.0+105,242.0+35+400,139.0+105,245.0+35+400,143.0+105);//escopeta pt5
   ellipse(255+400,170,3,7);//escopeta pt6
   
   fill(252,227,171);//color de la piel
    ellipse(273+400,263,25,13);//mano der
     pushMatrix();
     translate(286+397,256+1);
     rotate(radians(115));
     ellipse(0,0,7,12);//dedo der
      popMatrix();
      
      //forma repetida para borrar lineas internas
      pushMatrix();
      noStroke();
     translate(286+400,256);
     rotate(radians(45));
     ellipse(0,4,5,10);
      popMatrix();
    
  stroke(0);
  fill(20);//color del sombrero
 ellipse(206+405,149,152,25);//parte de atras del sombrero
  
  fill(252,227,171);//color de la piel
 circle(167+400,160,15);//oreja izq
 circle(253+400,159,15);//oreja der
 
  fill(255,106,106);//color de la sombra de las orejas
 circle(167+400,160,7);//sombra de la oreja izq
 circle(253+400,159,7);//sombra de la oreja der
  
  fill(252,227,171);//color de la piel
  //rect(568,120,82,55);//cabeza
  quad(162+400,135,252+400,135,243+400,174,172+400,174);//cabeza mejorada
  
  fill(255,106,106);//color de los cachetes
  noStroke();
ellipse(181+405,162,10,7);//cachete izq
   ellipse(232+402,162,10,7);//cachete der
   
   stroke(0);
   fill(255);
rect(177+405,148,17,7);//ojo izq
rect(218+402,148,17,7);//ojo der

fill(0);
rect(182+405,148,7,7);//pupila izq
rect(223+402,148,7,7);//pupila der

rect(200+403,166,14,9);//boca

 fill(252,227,171);//color de la piel
rect(200+403,170,14,7);//labio inf
rect(200+403,163,14,3);//labio sup

rect(201+404,143,10,15);//nariz pt1
rect(201+404,156,10,3);//nariz pt2
  
  fill(0);//color del bigote
  triangle(192+404,160,196+404,162,186+404,169);//bigote izq
  triangle(216+404,162,220+404,160,225+404,169);//bigote der
  
  strokeWeight(2);//grosor de las pestañas
  line(179+404,145,180+404,147);//pestaña izq 1
   line(179+411,145,180+410,147);//pestaña izq 2
     line(179+412+7,145,180+410+7,147);//pestaña izq 3
     
      line(179+404+38,145,180+404+38,147);//pestaña der 1
   line(179+411+38,145,180+410+38,147);//pestaña der 2
     line(179+412+7+38,145,180+410+7+38,147);//pestaña der 3
  
  strokeWeight(1);
  
  fill(250,179,73);//color de pelo
  quad(162+400,135,170+400,135,180+400,174,172+400,174);//pelo izq
  quad(162+488,135,252+405,135,243+405,174,240+400,174);//pelo der
  
  fill(20);//color del sombrero
  ellipse(205+403,62,115,100);//pt1
  quad(147+403,64,262+403,64,254+403,135,159+403,135);//p2
  noStroke();
  ellipse(205+403,62,114,99);//base para borrar lineas
  
  fill(250,179,73);//color de los detalles del sombrero
  ellipse(203+405,85,85,85);//pt1
  quad(161+405,92,245+405,92,238+405,135,170+405,135);//pt2
  noStroke();
  ellipse(203+405,85,84,84);//base para borrar lineas
  stroke(0);
  
  fill(20);//color del sombrero
   ellipse(203+405,85,68,60);//pt1
   quad(169+405,90,237+405,90,232+405,135,175+405,135);//pt2
  noStroke();
   ellipse(203+405,85,67,59);//base para borrar lineas
   stroke(0);
   
    fill(250,179,73);//color de los detalles del sombrero
    quad(158+404,130,254+404,130,252+404,138,160+404,138);
    bezier(158.0+404,131.0,194.0+404,116.0,232.0+404,121.0,254.0+404,131.0);
    
    fill(20);//color del sombrero
    ellipse(203+404,139,61,13);//borde pt1
    quad(564,132,582,136,577,140,565,138);//borde pt2
    quad(633,136,657,134,644,138,635,139);//borde pt6
    bezier(170.0+404,139.0,199.0+404,152.0,213.0+404,148.0,235.0+404,139.0);//borde pt3
    bezier(131.0+404,152.0-2,132.0+404,132.0-2,158.0+404,133.0-2,170.0+404,137.0-2);//borde pt4
     bezier(638.0,138.0,660.0,134.0,681.0,127.0,688.0,148.0);//borde pt5
     
     pushMatrix();//guardo lo que ya hice
     translate(174+402,120);//cambio el punto (0,0)
     rotate(radians(350));//roto a 350 grados
     fill(242,83,94);//color de las letras
     textSize(43);//tamaño de las letras
     text("S",2,0);
     popMatrix();//vuelvo atras a lo que ya hice (menos a lo que rote)
     text("O",190+406,118);
     pushMatrix();
     translate(218+401,120);
     rotate(radians(9));
     text("L",0,-4);
     popMatrix();
    
   //beziers hechos con ayuda de una herramienta: 
    //bezier(638.0,138.0,660.0,134.0,681.0,127.0,688.0,148.0);
    // bezier(131.0,152.0,132.0,132.0,158.0,133.0,170.0,137.0);
    // bezier(170.0,139.0,199.0,152.0,213.0,148.0,235.0,139.0);
  //bezier(158.0,131.0,194.0,116.0,232.0,121.0,254.0,131.0);

  pushMatrix();
  fill(252,227,171);//color de la piel
  translate(121+400,283);
  rotate(radians(110));
  ellipse(2,2,27,15);//mano izq pt1
   popMatrix();
 quad(120+400,270,130+400,274,119+400,296,111+400,290);//mano izq pt2
 triangle(130+400,274,135+400,286,126+400,286);//mano/dedo izq
 ellipse(133+400,287,4,6);//dedo izq
 
 //formas repetidas para borrar lineas internas
 pushMatrix();
 noStroke();
  fill(252,227,171);//color de la piel
  translate(121+400,283);
  rotate(radians(110));
  ellipse(2,2,26,14);
   popMatrix();
 quad(121+400,271,129+400,275,118+400,295,112+400,289);
 triangle(130+400,274,135+400,286,124+400,286);
 ellipse(133+400,287,4,6);
 
 //ellipse(273,263,25,13);
   //ellipse(273,263,24,12);
  
  fill(255);//color de la base del piso
  noStroke();
  rect(0,388,800,50);//base del piso
  
  fill(255,0,0);//color de la ropa
   noStroke();
  rotate(radians(45));
ellipse(168,210,70,10);
  
 
}
