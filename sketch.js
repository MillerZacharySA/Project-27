const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chain1,chain2,chain3,chain4,chain5;
var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,400,20);

	bob1 = new Bob(240,500,80);
	bob2 = new Bob(320,500,80);
	bob3 = new Bob(400,500,80);
	bob4 = new Bob(480,500,80);
	bob5 = new Bob(560,500,80);

	chain1 = new Chain(bob1.body,roof.body,-160);
	chain2 = new Chain(bob2.body,roof.body,-80);
	chain3 = new Chain(bob3.body,roof.body,0);
	chain4 = new Chain(bob4.body,roof.body,80);
	chain5 = new Chain(bob5.body,roof.body,160);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-300})
	}
}

