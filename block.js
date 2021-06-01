class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image1 = loadImage("block.png")
        World.add(world, this.body);
      }
      display(){
       
        
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        if(this.body.speed < 6){
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image1,0,0,this.width,this.height)
          pop();
      }
      else{
    push();
    World.remove(world,this.body);
    this.visiblity = this.visibility -  5;
    tint(255,this.visiblity);
    pop();
      }
        
        
        
      }
}
