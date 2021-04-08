
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   box = new Box(400, 150, 400, 30);
   ball1 = new Ball(400, 450, 130);
   ball2 = new Ball(330, 450, 130);
   ball3 = new Ball(260, 450, 130);
   ball4 = new Ball(470, 450, 130);
   ball5 = new Ball(540, 450, 130);

   chain1 = new Chain({x: 260, y: 150}, ball3.body);
   chain2 = new Chain({x: 330, y: 150}, ball2.body);
   chain3 = new Chain({x: 400, y: 150}, ball1.body);
   chain4 = new Chain({x: 470, y: 150}, ball4.body);
   chain5 = new Chain({x: 540, y: 150}, ball5.body);

ball5.velocityX = 0.5

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  box.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}



