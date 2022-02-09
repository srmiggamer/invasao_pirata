class Cannon {
  // vai ser o local onde vai definir as propiedades do objeto
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.Cannon_up=loadImage("assets/canon.png")
    this.Cannon_down=loadImage("assets/cannonBase.png")

  
  
  
  
  }
  display(){
     
    if(keyIsDown(RIGHT_ARROW)){
       this.angle+=1;
      }

      if(keyIsDown(LEFT_ARROW)){
        this.angle-=1;
      }
     
      push()
      translate (this.x,this.y)
      rotate (CENTER)
    // codigo para criar o topo do canhao
    imageMode(CENTER)
   image(this.Cannon_up,0, 0, this.width, this.height)
    pop()
    // codigo para criar a base do canhao 
    image(this.Cannon_down,70,20,200,200) 
    noFill()

  }
}
