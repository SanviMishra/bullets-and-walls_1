var bullet,speed,weight;
var wall,thickness;

function setup() {
  createCanvas(1700,400);
  thickness=random(22,83);
  speed=random(50,90);
  //weight=random(400,1500);
  bullet=createSprite(50,200,20,10);
  speed=random(223,321);
  weight=random(30,52);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapecolor=color(80,80,80);
  bullet.velocityX=speed;
 }



function draw() {
  background(0,0,0); 
  var deformation=(0.5 * weight * speed * speed/22509)
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
   
    //console.log(deformation);
   /* if(deformation>180){
   bullet.shapeColor=color(255,0,0);
     }
    if(deformation<180 && deformation>100){
     bullet.shapeColor=color(230,230,0);
      }
    if(deformation<100){
      bullet.shapeColor=color(0,250,0);
      } */
      if (hasCollided(bullet,wall)){
        bullet.velocityX=0;
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
        if (damage>10){
          wall.shapeColor=color(255,0,0);
        }
        if (damage<10){
          wall.shapeColor=color(0,255,0);
        }
      }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
return false;
}
