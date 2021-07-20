
var bg;
var iss,issImg;
var sp1,sp2,sp3,sp4;
var s;
var hasDocked;
var img,ds;
var block;

function preload(){
bg = loadImage("spacebg.jpg");

img = loadImage("ds.png");

sp1 = loadImage("spacecraft1.png");
sp2 = loadImage("spacecraft2.png");
sp3 = loadImage("spacecraft3.png");
sp4 = loadImage("spacecraft4.png");

issImg = loadImage("iss.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

 s = createSprite(650,600,50,50);
 s.addImage(sp1);
 s.scale = 0.3;

 iss = createSprite(650, 400, 50, 50);
 iss.addImage(issImg);

ds = createSprite(150,150,50,50);
ds.addImage(img);

block = createSprite(587,435,20,5);
block.visible = false;

 hasDocked = false;
}

function draw() {
  background(bg);  

  if(!hasDocked){

    if(keyDown(LEFT_ARROW)){
      s.addImage(sp3);
      s.x = s.x-1;
    }
    if(keyDown(RIGHT_ARROW)){
      s.addImage(sp4);
      s.x = s.x+1 ;
    }
    if(keyDown(UP_ARROW)){
      s.addImage(sp2);
      s.y = s.y-1 ;
    }
    if(keyDown(DOWN_ARROW)){
      s.addImage(sp1);
      s.y = s.y+1 ;
    }

  }

  if(s.isTouching(block)){
    hasDocked = true;
    stroke("black");
    fill ("white");
    textSize(30);
    text("DOCKING SUCCESSFUL!",800,500);

  }
  
  drawSprites();
}