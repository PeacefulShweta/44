var player1, player2;
var edges,fireG;
var BGimg;
var BlueDragon, RedDragon, fireimg, fire;
var score = 0;


function preload()
{
   Bgimg = loadImage("BG.jpg");
     gimg = loadAnimation("tenor.gif")  ;   
 
   RedDragon = loadAnimation("d1.jpg","d2.jpg","d3.jpg");
  BlueDragon = loadAnimation("dragon1.png","dragon2.png","dragon3.png");
   // fireimg = loadImage("firesprite1.png");
  updragon = loadAnimation("dragonimg1.png","dragonimg2.png","dragonimg3.png");
 fireimg = loadAnimation("fire1.png","fire2.png","fire3.png","fire4.png","fire5.png");
downdragon = loadAnimation("Dragonsprite1.png","Dragonsprite2.png","Dragonsprite3.png")
}
 
function setup() {
  createCanvas(windowWidth,windowHeight);
  background = createSprite(0,0,width,height);
 background.scale = 1.5;         
  background.addImage(Bgimg);
  player1 = createSprite(0,100,10,10);
  player1.addAnimation("Dragon",RedDragon);
  
  
  
 
  player2 = createSprite(width,200,10,10);
  player2.addAnimation("Dragon1",BlueDragon);
  player2.velocityX = random (1,3);
  player2.velocityY = random (1,3);
  
  player3 = createSprite(width/2,height-560,10,10);
   player3.addAnimation("UpDragon1",updragon);
   player3.velocityX = random (1,3);
  player3.velocityY = random (1,3);

  player4 = createSprite(width/2,height,10,10);
   player4.addAnimation("DownDragon1",downdragon);
   player4.velocityX = random (1,3);
  player4.velocityY = random (1,3);
  

  fireG = new Group();
  
  edges = createEdgeSprites();
}

function draw() {
 // background(Bgimg);

  background.velocityX = -3;
  if (background.x < 0){
    background.x = background.width/2
  }
  
  if(keyDown(RIGHT_ARROW)){
    player1.velocityX = 5;
  
  }
  if(keyDown(LEFT_ARROW)){
    player1.velocityX = -5;
  
  }
  if(keyDown(UP_ARROW)){
    player1.velocityY = -5;
  
  }
  if(keyDown(DOWN_ARROW)){
    player1.velocityY = 5;
  
  }
 if (keyDown("space"))
{
  dragonfire();
}
  if(fireG.isTouching(player2) || fireG.isTouching(player3) || fireG.isTouching(player4)){
    player2.visible = false;
    player3.visible = false;
    player4.visible = false;
    score = score +1;
  }
  if(player1.isTouching(player2) || player1.isTouching(player3) || player1.isTouching(player4)){
   // background("white");
    gameOver = createSprite(width/2,height/2);
    gameOver.addAnimation("game Over",gimg);
    gameOver.scale = 2.5;
    player1.visible = false;
  }
  player1.bounceOff(edges);
  player2.bounceOff(edges);
  player3.bounceOff(edges);
  player4.bounceOff(edges);

  drawSprites();
  textSize(25)
   text("Points: "+score,width/2,20)
}

function dragonfire(){
  fire = createSprite(100,100);
  fire.addAnimation("fires",fireimg);
  fire.x = player1.x +70;
  fire.y = player1.y;
  fire.velocityX = 3 ;
  fire.lifetime = 140;
  fireG.add(fire);
  //fire.visible = true;
}