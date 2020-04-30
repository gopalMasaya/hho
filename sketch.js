

var platesSize = 70;
var x =0;
var y_angle = 1.6;
var x_angle = 3.6;
var z_angle = 0.1;
var m = 0.01;
var hhoX_rotation = 2.8;
var hhoZ_rotation = 2.8;
var yTranslate;
var canvas2;

var addZ = 0;


function setup(){

	createCanvas(window.innerWidth - 4, window.innerHeight - 4, WEBGL);

 yTranslate = width/2;
canvas2 = createGraphics(40,200)
canvas2.background(255,0,0)

let p1 = createDiv('6.5 kw </br> generator')
p1.position(width*0.3,230)
p1.style('font-size','26px')
p1.style('color','rgb(220,180,16)')

let p2 = createDiv('1kw </br> solar panel')
p2.position(width*0.785,175)
p2.style('font-size','20px')
p2.style('color','rgb(220,180,16)')

let p3 = createDiv('48v 40amps </br> battery')
p3.position(width*0.62,120)
p3.style('font-size','20px')
p3.style('color','rgb(220,180,16)')

let p4 = createDiv('48v hho </br> generatot </br> 10L per minute')
p4.position(width*0.64,320)
p4.style('font-size','20px')
p4.style('color','rgb(220,180,16)')



}

function draw(){

 background(120);


 addZ= addZ+0.1;
//addZ=10.0;
  if(addZ > 28.0){addZ = 28.0;}
  camera(width*0.5, height*0.5,(height/2.0) / tan(PI*addZ / 180.0), width/2.0,height/2,0.0,
       0.0, 1.0, 0.0);

 x = map(mouseX,0,width,0,10);
  console.log(x);
// lights();
scale(1.1);
 directionalLight(21, 20, 226, 0, 0, 0);
 //lightSpecular(0, 0, 204);
//spoletLight(251, 250, 255, x, x, x);
//spotLight(51, 102, 126, 80, 20, 40, 1, 1, 1, PI/2, 2);
//poletLight(251, 102, 126, 340, 340, 340);
 ambientLight(200, 0, 226,1,1,1);

  push();
  translate(width/2,height*0.6,-100);
 rotateX(0.9);
fill(5,0,156);
strokeWeight(2);stroke(120);
 box(width*0.85,height*0.8,10);
 pop();


 //plates
 for(let i = 0;i< 60;i+=10){
   push();
   stroke(0,0,255);
 fill(90);
translate(705-i,  height*0.5,0);
rotateX(hhoX_rotation);
 rotateZ(z_angle);
 rotateY(y_angle);
 //rotateZ(y_angle);
box(platesSize,platesSize,5);
pop();
 }

 //spacers
 fill(180,40,60,90);
  for(let i = 0;i< 60;i+=10){
   push();
translate(700-i, height*0.5,0);
rotateX(hhoX_rotation);
 rotateZ(z_angle);
 rotateY(y_angle);
box(platesSize,platesSize,5);
pop();
 }

//border1
 push();
 translate(651,  height*0.5,0);
 fill(120);
  rotateX(hhoX_rotation);
  rotateZ(z_angle);
 rotateY(y_angle);
box(90,90,10);
pop();

  push();
 translate(720,  height*0.5,0);
 //fill(0);
 noStroke();
 rotateX(hhoX_rotation);
 rotateZ(z_angle);
 rotateY(y_angle);
box(90,90,10);
pop();

//generator
push();
 translate(400, height*0.52,-20);
 fill(200,90);
  rotateX(2.6);
 rotateY(1.55);
 fill(90,0,200);
noStroke();
box(200,100,300);
pop();


push();
translate(580,height*0.48,0);
 rotateY(1.6);
 fill(90);
 drawCylinder(50,10,150);
 pop();

// push();
// ambientLight(0, 222, 0,0,0,0);
//  translate(410, height*0.42,0);
// rotateX(0.7);
//  textSize(25);
// fill(255,215,0);
//  text("6.5 kilo watt\n generator",0,0,0);
//
// pop();





// solar panels
 x_angle = x_angle+m;
 if(x_angle > 3.9 || x_angle< 3.0){m = -m ;}
//angleMode(DEGREES);
fill(120,40,60,90);
  for(let i = 0;i< 160;i+=40){
   push();

translate(1080-i, height*0.28,-180);
 rotateX(x_angle);

 stroke(200);fill(0);
box(40,80,5);
pop();
 }


//  push();
//  translate(915, height*0.28,-140);
// rotateX(x_angle+5);
//  textSize(25);noStroke();
// fill(255,215,0);textAlign(CENTER,CENTER);
//  text("1k watt\n solar panels",0,0,0);
// pop();


//  push();
//  translate(790, height*0.5,80);
// rotateX(0);
//  textSize(20);noStroke();
// fill(255,215,0);textAlign(CENTER,CENTER);
//  text("hho generator\n 10L per minute\n 48v",0,0,0);
// pop();



 //cilnder
 translate(width*0.9,height*0.4,-250);
 rotateX(1.5);
 fill(90);
 drawCylinder(15,15,180);


 // batteiries

  for(let i = 0;i< 240;i+=60){
   push();
translate(-150-i,0,40);
  rotateX(1.4);
 stroke(150);fill(0);
box(60,60,60);
pop();
 }

 //lead +
 push();
 translate(-330,10,70);
  rotateX(1.4);
 fill(255,0,0);
 box(20,20,20);
 pop();

 //lead -
  push();
 translate(-150,10,70);
  rotateX(1.4);
 fill(0);
 box(20,20,20);
 pop();


//  push();
// fill(255,215,0);
//  translate(-400,500,65);
//  rotateX(4.8);
//  textSize(10);
//  text("48V\n 40amps battery",0,0,0);
//
//  pop();

}

function keyPressed(){
  if(key == 'y'){addZ = addZ + 0.1;}

}

function drawCylinder( sides,  r,  h)
{
    var angle = 360 / sides;
    var halfHeight = h / 2;
    // draw top shape
    beginShape();
    for (let i = 0; i < sides; i++) {
        var x = cos( radians( i * angle ) ) * r;
        var y = sin( radians( i * angle ) ) * r;
        vertex( x, y, -halfHeight );
    }
    endShape(CLOSE);
    // draw bottom shape
    beginShape();
    for (let i = 0; i < sides; i++) {
        var x = cos( radians( i * angle ) ) * r;
        var y = sin( radians( i * angle ) ) * r;
        vertex( x, y, halfHeight );
    }
    endShape(CLOSE);

    beginShape(TRIANGLE_STRIP);
for (let i = 0; i < sides + 1; i++) {
  noStroke();
    var x = cos( radians( i * angle ) ) * r;
    var y = sin( radians( i * angle ) ) * r;
    vertex( x, y, halfHeight);
    vertex( x, y, -halfHeight);
}
endShape(CLOSE);
}
