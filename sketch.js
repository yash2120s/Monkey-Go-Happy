

var monkey , monkey_running
var banana ,bananaImage,f1,f2,f3, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 f1 = loadImage("fruit1.png")
  f2 = loadImage("fruit2.png")
  f3 = loadImage("fruit3.png")
  
}



function setup() {
  createCanvas(600,200)

  ground = createSprite(10,200,900,10)
  ground.velocityX = -5
  
  
  monkey  = createSprite(100,150)
  monkey.addAnimation("running",monkey_running)
  monkey.scale =0.1
  
  
  survivalTime = 0;
  score = 0;
  
  
  foodsGroup  = createGroup();
  obstaclesGroup = createGroup();
}


function draw() {
  
  background("green");
  
  stroke("white")
  textSize(20)
  fill("white")
  
  stroke("black")
  textSize(20)
  fill("black")
    
    

  
  
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
    
      text("Survival Time "+survivalTime,200,20)
  text("Score "+score,400,20)
    
    
  if(keyDown("space")&&monkey.y >= 120 ){
    monkey.velocityY = -10;
  }
  
  if(ground.x>0){
    ground.x = ground.width/2
  }
  
  if(foodsGroup.isTouching(monkey)){
    score = score +1;
    foodsGroup.destroyEach()
  }
   foods();
  obstacles();
     monkey.velocityY = monkey.velocityY + 0.8
  
 
  monkey.collide(ground)
 
  
  
  drawSprites();
}

function foods(){
 if(frameCount % 120===0){ food = createSprite(610,50,10,10)
 food.velocityX = -4 
r = Math.round(random(1,4))
  if(r == 1){
 food.addImage(f1)
    food.scale = 0.1
  }
  
  if(r === 2){
    food.addImage(bananaImage)
    food.scale = 0.1
  }
  
  if(r===3){
    food.addImage(f2)
    food.scale = 0.2
  }
  
  if(r === 4){
    food.addImage(f3)
    food.scale = 0.2
  }
  
  food.y = Math.round(random(50,100))
  food.lifetime =160;
    foodsGroup.add(food)
 }
}

function obstacles(){
 if(frameCount%300===0){ 
   obstacle = createSprite(630,190,10,10)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1;
  obstacle.velocityX = -2
   obstacle.lifetime = 300;
   
   obstaclesGroup.add(obstacle)
   }
}


