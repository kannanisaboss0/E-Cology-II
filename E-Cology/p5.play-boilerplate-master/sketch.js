var form;
var gameState=0;
var head;
function preload(){

}

function setup() {
  createCanvas(1800,800);
  createSprite(600,300,50,50);

   form=new Form();
   head=new Head(900,100,50,50);
    
  
}

function draw() {
  
    background("green");
    fill("brown");
    if(World.frameCount%100===60){
    this.bullet = rect(900, random(100, 700), 100, 10);
    }
  
   
   
      
      
    form.display();
    head.display();
  
}
