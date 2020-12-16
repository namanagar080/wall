var bullet,wall,bulletRightEdge,wallLeftEdge;
var speed,weight,thickness,damage,lwall,lbullet;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20);
  bullet.shapeColor="green";
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="yellow";  
  
  speed=random(223,321);
  weight=random(30,52);
 
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage<=10){
     bullet.shapeColor="green";
    }
    else{
      bullet.shapeColor="red";
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}