var player
var ground
var coinGroup
var logGroup
var score =0
function setup() {
  createCanvas(displayWidth-100,displayHeight-200);
   player = new Player()
ground= createSprite(displayWidth/2,displayHeight-210,displayWidth,10)
coinGroup=createGroup()
logGroup=createGroup()

}

function draw() {
  background("green");  
  textSize(20)
  text(" Score :"+score,100,100)
  
  if (keyDown("space")){
    player.body.velocityY=-5
    
  }
  if(keyDown(RIGHT_ARROW)){
    player.body.x=player.body.x+5
  }
  if(keyDown(LEFT_ARROW)){
    player.body.x=player.body.x-5
  }

  player.body.velocityY=player.body.velocityY+0.2
  spawnLogs()
  spawnCoins()
  player.body.collide(logGroup)
  createEdgeSprites()
  if (player.body.isTouching(coinGroup)){
    score= score+1
  }
  drawSprites();
}
function spawnLogs(){
  if (World.frameCount % 30 === 0) {
    var logs = new Log (0,displayHeight,40,10);
    logs.body.x = random(0,displayWidth);
   // cloud.setAnimation("");
    //cloud.scale = 0.8;
   // logs.velocityY = -1;
    
     //assign lifetime to the variable
     logs.lifetime = 134;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    
    //add each cloud to the group
    logGroup.add(logs.body);
  }
}
function spawnCoins(){
  if (World.frameCount % 30 === 0) {
    var coin = new Coin (0,displayHeight,10,10);
    coin.body.x = random(0,displayWidth);
   // cloud.setAnimation("");
    //cloud.scale = 0.8;
   // logs.velocityY = -1;
    
     //assign lifetime to the variable
     coin.lifetime = 134;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    
    //add each cloud to the group
    coinGroup.add(coin.body);
  }
}

