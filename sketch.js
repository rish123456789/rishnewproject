var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 80, 30);
  fixedRect.shapeColor= "green";

  movingRect = createSprite(600,200,30,80);
  movingRect.shapeColor= "green";

}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

 // console.log(movingRect.x-fixedRect.x);=== 55
 //console.log(movingRect.width/2 + fixedRect.width/2); === 55
 if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 
  && fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2
  &&movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2
  &&fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2){
   movingRect.shapeColor="red";
   fixedRect.shapeColor ="red";
 }
 else{
   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
 }
  drawSprites();
}