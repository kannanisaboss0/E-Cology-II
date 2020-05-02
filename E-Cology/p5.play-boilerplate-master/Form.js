class Form{
    constructor(){
        // this.title=createElement('h1');
         this.space=createElement('h1');
         this.choice=createElement('h1');
         this.animal=createElement('h2');
         this.plant=createElement('h2');
         this.titleImg=loadImage("ECOLOGY.png");
         this.animalChoice=loadImage("ANIMAL.png");
         this.plantChoice=loadImage("Untitled.png");
         this.lead1=createElement('h1');
         this.option=loadImage("CHOICE.png")

    }

    display(){
        if(gameState===0){
        //this.title.html("E-Cology");
       // this.title.position(900,100);  
        this.space.position(400,700);
       ///imageMode(CENTER);
        image(this.titleImg,0,0,1800,800);
        
        this.space.html("Press Space to play");
        }
        if(keyDown("space")){
            gameState=1;
           
        }
        if(gameState===1){ 
            this.choice.html("Which one do you want to save?");
            this.choice.position(650,100); 
           
            this.space.hide();
            this.animal.html("Animal(press A)");
            this.animal.position(125,600);
            this.plant.html("Plant(press P)");
            this.plant.position(1400,600);
            background(34,177,76);
            imageMode(CENTER);
            image(this.animalChoice,200,400,700,450);
            imageMode(CENTER);
            image(this.plantChoice,1475,400,700,450);
            imageMode(CENTER);
            image(this.option,800,400,700,450);
           
        
        
        }
        if(keyDown("P")){
            gameState=1.1;
        }
        if(gameState===1.1){
            this.choice.hide();
            this.plant.hide();
            this.animal.hide(); 
            this.lead1.html("Hold W to defend yourself from the woodcutters");
            this.lead1.position(550,100);
            background("green");
            this.tree=rect(800,300,200,200);
            rectMode(CENTER); 
            for(var i=0;i<1;i++){
                  if(keyDown("w")){
                    this.bullet=ellipse(mouseX,mouseY,50,50);
                    this.lead1.hide();
                // this.bullet.position.x=mouseX;
            }
            
        }
        
       
            
            
           
            
       
        
 
 
        
        
        }}}
