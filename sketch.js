var  tcornerX1, tcornerY1, tcornerX2, tcornerY2, tcornerX3, tcornerY3, tcornerX4, tcornerY4, head, r, g, b;


function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(255);
  fill (0);
  textSize (60);
  textFont ('Helvetica');
  text ("Let's Get Subatomic", 300, 800); 
  monster(tcornerX1, tcornerY1, tcornerX2, tcornerY2, tcornerX3, tcornerY3, tcornerX4, tcornerY4, head, r, g, b);
  
}

function mouseReleased(){
  tcornerX1 = int(random(0,450));
  tcornerX2 = int(random(450, 900));
  tcornerX3 = int(random(450, 900));
  tcornerX4 = int(random(0, 450));
  tcornerY1 = int(random(270, 495 ));
  tcornerY2 = int(random(270, 495));
  tcornerY3 = int(random(495, 720));
  tcornerY4 = int(random(495, 720));
  r = int(random(0, 255));
  g = int(random(0, 255));
  b = int(random(0, 255));
  head = int(random (0, 7))
}

function monster(tcornerX1, tcornerY1, tcornerX2, tcornerY2, tcornerX3, tcornerY3, tcornerX4, tcornerY4, head, r, g, b){
  noStroke();
  fill (r, g, b);
  quad (tcornerX1, tcornerY1, tcornerX2, tcornerY2, tcornerX3, tcornerY3, tcornerX4, tcornerY4);
  ellipse (tcornerX3, tcornerY3, 120, 40);
  ellipse (tcornerX4, tcornerY4, 120, 40);
  fill (g, b, r)
  if (head == 0){
	  circle (450, abs(tcornerY1 + tcornerY2)/2, 150);
  }
  if (head == 1){
	  square (tcornerX1+30, (abs(tcornerY1 + tcornerY2)/2)-50, 125);
  }
  if (head == 2){
	  translate (tcornerX1+30, (abs(tcornerY1 + tcornerY2)/2)-50);
		rotate(PI/4);
		square (0, 0, 125);
  }
  if (head == 3){
	  square (tcornerX1+30, (abs(tcornerY1 + tcornerY2)/2)-50, 125, 40);
  }
  if (head == 4){
	  translate (tcornerX1+30, (abs(tcornerY1 + tcornerY2)/2)-50);
		rotate(PI/4);
		square (0, 0, 125, 40);
  }
  if (head == 5){
	  triangle (450, (abs(tcornerY1 + tcornerY2)/2)-100, tcornerX1 + 30, (abs(tcornerY1 + tcornerY2)/2)+ 50, tcornerX2 - 30, (abs(tcornerY1 + tcornerY2)/2)+50);
  }
  if (head == 6){
	  triangle (450, (abs(tcornerY1 + tcornerY2)/2)+100, tcornerX1 + 30, (abs(tcornerY1 + tcornerY2)/2)- 50, tcornerX2 - 30, (abs(tcornerY1 + tcornerY2)/2)-50);
  }
}