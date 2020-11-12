
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var ground,ball;



function setup() {
	createCanvas(1000, 500);



	engine = Engine.create();
	world = engine.world;

	ground = new Ground (500,480,1000,5);

	bin1 = new Bin (750,475,110,10);
	bin2 = new Bin (700,430,10,100);
	bin3 = new Bin (800,430,10,100); 

	ball = new Ball (100,100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ball.display();
  bin1.display();
  bin2.display();
   bin3.display();
   ground.display();
 
 


  drawSprites();
 
}
function keyPressed(){

	if(keyCode === UP_ARROW){

    	Matter.Body.applyForce(ball.body, ball.body.position, {x:65, y:-85});
	
	}

}


