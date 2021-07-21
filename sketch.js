var bg,bg_img,balloonGroup;

var jaganath,jaganath_img
var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var chakra,chakra_img
function preload(){
  
  backgroundImage = loadImage("Ratha.jpg");
  //jaganath_img=loadImage("jaganath.png")
  arrowImage=loadImage("jaganath.png")
  bowImage = loadImage("temple.png");
  red_balloonImage = loadImage("covid1.png");
  green_balloonImage = loadImage("covid2.png");
  pink_balloonImage = loadImage("covid5.png");
  blue_balloonImage = loadImage("covid4.png");
  bg_img=loadImage("sunrise.jpg")
  chakra_img=loadImage("sudarsan chakara.png")
}



function setup() {
  createCanvas(500,500);
  
  //creating background
  background = createSprite(0,250,500,500);
  background.addImage(backgroundImage);
  background.scale = 1.3
  
  // creating bow to shoot arrow
  bow = createSprite(399,155,50,50);
  bow.addImage(bowImage); 
  bow.scale = 1.5;
  
   // var jaganath=createSprite(390,300,25,25)
 // jaganath.addImage(jaganath_img)
 // jaganath.scale=0.5
   
 chakra=createSprite(297,259,10,10)
  chakra.addImage(chakra_img)
  chakra.scale=0.1
  chakra.velocityX=2
   chakra.velocityY=-2
  chakra.scale=0.6
 edges=createEdgeSprites()
  
  


  
  
  
  redB= new Group()
  pinkB= new Group()
  blueB=new Group()
  greenB=new Group()
  arrowGroup=new Group()
  balloonGroup=new Group()
}

function draw() {

  chakra.bounceOff(edges)
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
if(frameCount>300){
  bow.visible=true;
  
}else{
  bow.visible=false
}
  
  
//  if(frameCount>401){
 //   bg=createSprite(251,210,500,500)
  //  bg.addImage(bg_img)
  //  bg.scale=2.5
  //}


// if(chakra.isTouching(balloonGroup)){
 //}
  
  
  // release arrow when space key is pressed
  if (frameCount>360) {
    arrowGroup.visible=true;
    createArrow();
    chakra.visible=true
  
    }else{
      arrowGroup.visible=false;
      chakra.visible=false
    }


  //if(chakra.isTouching(redB)){
     //redB.visible=false
    //greenB.visible=false
   // blueB.visible=false
   // pinkB.visible=false
    // }
  
  
  
  
  
  
 // if(arrowGroup.isTouching(redB)){
    
  // redB.destroyEach()
 //   arrowGroup.destroyEach();
 
 // }
  
  
 // if(arrowGroup.isTouching(greenB)){
   // greenB.destroyEach()
  
    //arrowGroup.destroyEach();
  //}
  
   
  //if(arrowGroup.isTouching(blueB)){
   //blueB.destroyEach()
  //  arrowGroup.destroyEach();
   
  //}
   
 // if(arrowGroup.isTouching(pinkB)){
 //  pinkB.destroyEach()
  //  arrowGroup.destroyEach();  
  //}
  
  
 
  
  
  
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }


  
  drawSprites();
    
  fill(255)
  text("x"+mouseX+",y"+mouseY,40,50)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.9;
  balloonGroup.add(red)
  return red
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.9;
  balloonGroup.add(blue)
  return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.9;
  balloonGroup.add(green)
  return green;   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.3
  balloonGroup.add(pink)
  return pink;
}


// Creating  arrows for bow
  function createArrow() {
arrow= createSprite(415,235, 60, 10);
  arrow.addImage(arrowImage);
//  arrow.x = 360;
 // arrow.y=bow.y;
//  arrow.velocityX = -4;
//  arrow.lifetime = 100;
  arrow.scale = 0.5;
   arrowGroup.add(arrow)
  return arrow;}

function remove(){
  if(balloonGroup.isTouching(chakra)){
    balloonGroup.visible=false
  }
}


 