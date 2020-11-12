class Ball {
  constructor(x,y,radius) {
    var options = {
      isStatic : false, 
      'restitution':0.3,
        'friction':0.5,
        'density':0.8
          }
    this.body = Bodies.circle(x, y, 25, options);
    
    World.add(world, this.body);

    this.image = loadImage("paper.png")
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push ();
    translate(pos.x,pos.y)
    rotate (angle)
    //ellipseMode(CENTER);
    fill("lightblue");
    //ellipse(0,0, this.radius,);
    imageMode(CENTER)
    image(this.image,0,0,70,70);
    
    pop();
  }
};
