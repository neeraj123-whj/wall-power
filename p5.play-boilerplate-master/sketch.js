var car,wall
var speed,weight

function setup() {  
createCanvas(1600,400)
 
speed = random(55,90)
weight= random(400,1500)

car = createSprites(50,200,50,50);
car.velocityx = speed;
car.shapecolor = color(225);

wall = createSprites(1500,200,60,height/2)
wall.shapecolor = color(80,80,80)
}




function draw() {
  background(255,255,255);  
  drawSprites();
}