var player1,player2,ball;
var player1standingimg,player1kickimg,player2standingimg,player2kickimg,ballimg;
var Goalpost1,Goalpost2;
var topB,bottomB,leftB,rightB,center;
var Cscore=0,Pscore=0;
var bgImg;
var Gamestate="intro";


function preload(){
player1standingimg= loadAnimation("Assets/Player1.png");
player1kickimg= loadAnimation("Assets/player1kick.png");
player2standingimg= loadAnimation("Assets/player2standing.png");
player2kickimg= loadAnimation("Assets/player2kick.png");
ballimg= loadImage("Assets/ball.png");
bgImg= loadImage("Assets/bg.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  Goalpost1= createSprite(windowWidth/2,20,200,10);
  Goalpost2= createSprite(windowWidth/2,windowHeight-20,200,10);
 Goalpost1.shapeColor="black";
 Goalpost2.shapeColor="black";

 player1=createSprite(windowWidth/2,60,10,10)
 player1.addAnimation("standing",player1standingimg);
 player1.addAnimation("kicking",player1kickimg)
 player1.scale=0.8;

 player2=createSprite(windowWidth/2,windowHeight-60,10,10);
 player2.addAnimation("standing",player2standingimg);
 player2.addAnimation("kicking",player2kickimg)
 player2.scale=0.8;
 
 center=createSprite(windowWidth/2,windowHeight/2,windowWidth,5);
 center.shapeColor="white";

 ball=createSprite(windowWidth/2,windowHeight/2,10,10);
ball.addImage("ball",ballimg)
ball.scale=0.2;

 topB=createSprite(windowWidth/2,5,windowWidth,5);
 topB.shapeColor="white";
 
 

bottomB=createSprite(windowWidth/2,windowHeight-10,windowWidth,5)
bottomB.shapeColor="white";

leftB=createSprite(5,windowHeight/2,5,windowHeight);
leftB.shapeColor="white";

rightB=createSprite(windowWidth-5,windowHeight/2,5,windowHeight);
rightB.shapeColor="white";

}

function draw() {
  if(Gamestate==="intro"){

    background(bgImg);
    fill("black");
    textSize(30);
    text("WELCOME TO THE FOOTBALL PREMIER LEAGUE",windowWidth/2-300,50);
   fill("red");
    text("PRESS ENTER KEY TO START THE GAME",windowWidth/2-300,400);


     
  }
  if(keyDown("ENTER")){

  
   Gamestate="start";

  }

  if(Gamestate==="start"){
   
    background("green"); 
    fill("white");
    text("PRESS SPACE KEY TO SERVE THE BALL",windowWidth/2-100,windowHeight/2-150);
    text("USE UP, DOWN, LEFT, RIGHT ARROW KEYS TO MOVE AND K TO KICK",windowWidth/2-200,windowHeight/2+150);
    if(keyDown("space")){
  
      ball.velocityX=4;
      ball.velocityY=4;
      
    Gamestate="play";
    
     }
     drawSprites();
 
}
if(Gamestate==="play"){
  background("green"); 
  fill("white");
  text("COMPUTER SCORE:  "+ Cscore,10,windowHeight/2-50);
  text("PLAYER SCORE:  "+ Pscore,10,windowHeight/2+50)
  player1.x=ball.x;
  ball.bounceOff(player1);
  ball.bounceOff(player2);
  ball.bounceOff(topB);
  ball.bounceOff(bottomB);
  ball.bounceOff(leftB);
  ball.bounceOff(rightB);  
  
 
  if(keyWentDown("k")){
 
  player2.changeAnimation("kicking",player2kickimg);
 
  }
 
  if(keyWentUp("k")){
 
   player2.changeAnimation("standing",player2standingimg);
  
 
   }
 
  if(keyDown(LEFT_ARROW)){
 
   player2.x=player2.x-5;
 
  }
 
  if(keyDown(RIGHT_ARROW)){
 
   player2.x=player2.x+5;
   
  }
 
  if(keyDown(UP_ARROW)){
 
   player2.y=player2.y-5;
   
  }
 
  if(keyDown(DOWN_ARROW)){
 
   player2.y=player2.y+5;
   
  }
 
  if(ball.bounceOff(Goalpost1)){
 
    Pscore=Pscore+1;
 
 
  }
 
  if(ball.bounceOff(Goalpost2)){
 
   Cscore=Cscore+1;
   
 
 }
 
 if(Cscore>0&&Cscore<2){
  
   ball.velocityX= ball.velocityX*1.001;
   ball.velocityY= ball.velocityY*1.001;
   
 
 
 }
 
 strokeWeight(3);
 fill("white");
 circle(windowWidth/2,windowHeight/2,200)
    
 fill("grey");
 circle(windowWidth/2,windowHeight/2,30);

 if(Cscore===5 || Pscore===5){

 Gamestate="END";


 }
 
 
   drawSprites() 


}
if(Gamestate==="END"){

fill("Black");
textSize(30);
text("GAMEOVER!!! THANKS FOR PLAYING",windowWidth/2-200,windowHeight/2-100);


}
}

