var fairy;
var star , starImage;
var fairyImage1 , fairyImage2 ;
var backgroundB;
var sound;

function preload()
{
   //preload the images here
   
   fairyImage1=loadImage("images/fairy.png");
   fairyImage2=loadAnimation("images/fairy1.png","images/fairy2.png");
   
   sound=loadSound("sound/joyMusic.mp3");

   starImage=loadImage("images/star.png");
   
   backgroundB=loadImage("images/starnight.png");



}

function setup() {
  createCanvas(800, 750);
  



fairy=createSprite(100,500,15,15);
fairy.addImage(fairyImage1);
fairy.scale=0.2;



star=createSprite(600,200,10,10);
star.addImage(starImage);
star.scale=0.3;



if(fairy.x < 600){


  fairy.velocityX=0;
  


}







}




function draw() {
  background(backgroundB);

  sound.play();


  down();

  left();

  right();

drawSprites();
}

function left(){

if(keyCode === LEFT_ARROW){

  fairy.velocityX = -6;

  fairy.addAnimation("fairyRunning", fairyImage2 );
  fairy.changeAnimation("fairyRunning",fairyImage2 );





}



}

function right(){

  if(keyCode === RIGHT_ARROW){

    fairy.velocityX = 6;
  
    fairy.addAnimation("fairyRunning", fairyImage2 );
    fairy.changeAnimation("fairyRunning",fairyImage2 );
  
  
  
  
  
  }
  
  



}

function down(){

  if(keyCode === DOWN_ARROW){

    star.velocityY = 5;


  }



}










