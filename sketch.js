var PLAY = 1;
var END = 0;
var gameState = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FruitGroup, obstaclesGroup
var score=0;
var ground
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}




function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  obstaclesGroup = createGroup();
  FruitGroup = createGroup();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  
  
  ground = createSprite(400,350,900,10);
 
  


}



  function createObstacles(){
  if (World.frameCount % 150 === 0){
    
    obstacle = createSprite(600,320,20,20);
                            
    obstacle.addImage(obstacleImage);
    obstacle.y = 320
    
    obstacle.scale = 0.1;
    obstacle.velocityX = -10;
    obstaclesGroup.add(obstacle);
    
    obstacle.lifetime = 200;
  }
}

function createFruits(){
 if(World.frameCount%80 === 0){ 
  
   banana = createSprite(600,10,20,20);
   banana.addImage(bananaImage);
   banana.y = Math.round(random(180,300));
   
   banana.scale = 0.1;
   banana.velocityX = -6;
   FruitGroup.add(banana);
   
   banana.lifetime = 200;
}
}
 


function draw() { 
 
  background(220);
 
   text("Score: "+ score, 500,50);
  score = score + Math.round(getFrameRate()/60);

  createFruits();
   createObstacles();

    if(monkey.isTouching(obstaclesGroup)){
   obstaclesGroup.setVelocityXEach(0);
    FruitGroup.setVelocityXEach(0);
    
   ground.velocityX = 0;
    monkey.velocityX = 0;
    
    if(keyDown("space")){
    monkey.velocityY = 0;
    }
      
      score = 0;
   
    obstaclesGroup.setLifetimeEach(-1);
    FruitGroup.setLifetimeEach(-1);
    
 }

 
   monkey.collide(ground);
  
  if(keyDown("space")){
    monkey.velocityY = -15
  
  } 
   monkey.velocityY = monkey.velocityY + 0.8
  
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  drawSprites();
}






