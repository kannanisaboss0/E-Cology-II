class Head{
    constructor(x,y,width,height){
        this.height=height;
        this.width=width;
        this.body=rect(x,y,this.height,this.width)
        this.image=loadImage("ECOLOGY.png");

        
        
    }

    display(){
    
   
     imageMode(CENTER);  
     this.image=rect(this.image,900,100,this.width,this.height); 
        
    }
}