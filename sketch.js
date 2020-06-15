//creating all the variables
var wall,thickness;
var bullet,weight,speed
function setup() {
  createCanvas(1600,400);
  //creating random thickness and the wall
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  //creating random speed and weight and bullet and giving it's velocity
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(800,200,20,20);
  bullet.velocityX=speed;
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
fill("lime");
textSize(20);
text("Damage:"+damage,50,200)
if(damage>10){
  wall.shapeColor="red"
}
if(damage<10){
  wall.shapeColor="green"
}
  }
  drawSprites();
}
//creating the function hasCollided().
function hasCollided(bullet,wall){
  bulletedgeright=bullet.x+bullet.width;
wallleftedge=wall.x
if(bulletedgeright>=wallleftedge){
  return true;
}
return false;
}