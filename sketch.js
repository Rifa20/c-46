var oliver, oliverImg;
var girl, girlImg;
var speechBubble, speechBubbleImg;
var professor, professorImg;
var classroom, classroomImg;
var button, buttongImg;



function preload(){
  oliverImg = loadAnimation ("oliver1.png","oliver2.png","oliver3.png","oliver4.png","oliver5.png","oliver6.png","oliver7.png","oliver8.png");
  girlImg = loadImage("girl.png");
  bgSchoolImg = loadImage("bgg.jpg");
  speechBubbleImg = loadImage("speech bubble.png");
  professorImg = loadImage("professor.png");
  classroomImg = loadImage("classroom bg.jpg");

  oliverStopImg = loadAnimation("oliver4.png");
  
  
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  bgSchool = createSprite(400,200);
  bgSchool.addImage("bg",bgSchoolImg);
  bgSchool.scale = 1.5;

  classroom = createSprite(width/2-200,height/2);
  classroom.addImage("bg",classroomImg);
  classroom.scale = 2.5;
  classroom.visible = false;
  professor = createSprite(500,400);
  professor.addImage("img",professorImg);
  professor.visible = false;
  professor.scale = 0.4;

button = createSprite(800,400);
speechBubble = createSprite(professor.x+150,professor.y-200);
speechBubble.addImage("img",speechBubbleImg);
speechBubble.visible = false;
speechBubble.scale=0.5;



 

 oliver = createSprite(400, 300, 50, 50);
oliver.addAnimation("oliverImg",oliverImg);
oliver.addAnimation("oliverStop",oliverStopImg);
oliver.velocityX = 1;  

  
 
  

  

}

function draw() {
  background(255,255,255);
  drawSprites();
    camera.position.x = oliver.x;

  if(keyDown(RIGHT_ARROW)){
    oliver.x+=05;

  }

  if(keyDown(LEFT_ARROW)){
    oliver.x-=05;

  }

  if(mousePressedOver(button)){
    classroom.visible = true;
    professor.visible = true;
    bgSchool.visible = false;
    button.visible = false;
    oliver.velocityX =0;
    oliver.velocityY =0;
    oliver.changeAnimation("oliverStop");
    speechBubble.visible = true;

  }
  

  
 
}







 
