var tower,tower_img;
var door,door_img;
var climber,climber_img;
var ghost,ghost_img;
var climbersGroup,doorsGroup;
var spookysound;
var gameState="Play";
var Score


function preload (){
  tower_img=loadImage("tower.png");
  door_img=loadImage("door.png");
  climber_img=loadImage("climber.png");
  ghost_img=loadImage("ghost-standing.png","ghost-jumping.png");
  spookysound=loadSound("spooky.wav");
}

function setup(){
 createCanvas (windowWidth,windowHeight);
  
  tower= createSprite(200,200);
  tower.addImage("tower",tower_img);
  tower.velocityY=5;
  tower.y = tower.height/2;
  
  ghost= createSprite(200,200,30,30);
  ghost.addImage("ghost",ghost_img);
  ghost.scale=0.25;
 // ghost.debug=true; 
  ghost.setCollider("rectangle",0,0,150,250);
  
  climbersGroup=new Group();
  doorsGroup=new Group();
  
  score=0;
 
  
}
function draw(){
  background(0);
  spookysound.loop();
   textSize(20);
   text("Score: "+score,200,50);
  
 
  
  if(gameState==="Play"){
    
   if(ghost.isTouching(doorsGroup)){
      score=score+5;
    }
   
  
   if(tower.y > 500){
     tower.y = 300
  }
  
   if(keyDown("space")){
     ghost.velocityY=-4       
     
   }
  
  
  ghost.velocityY=ghost.velocityY+0.2 ;
  ghost.depth=ghost.depth+2;  
  
  if(keyDown("Right")){
    ghost.x=ghost.x+3
  }
  
  if(keyDown("Left")){
    ghost.x=ghost.x-3 
  }
    
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0
    //tower.velocityY=0
    door.velocityY=0
    climber.velocityY=0
    gameState="End";
   
     
    
  }
     spawndoors();
    drawSprites();
  }
  
 if(gameState==="End"){
   fill("red")
    textSize(30);
    text("GAME OVER",200,200);
    
  }
  
  

}


function spawndoors(){
  
  if(frameCount%150==0){
  door= 
    createSprite
  (Math.round(random(20,350)),-100,25,25);
  door.velocityY=5;
  door.addImage("door",door_img);
  door.scale=0.5;
  doorsGroup.add(door);
    
   climber=createSprite(200,-60)
    climber.x=door.x
    climber.velocityY=5;
    climber.addImage("climber",climber_img);
    climbersGroup.add(climber);
  }
  
}