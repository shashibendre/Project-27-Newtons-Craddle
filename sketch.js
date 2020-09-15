
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,50,300,30);

	bob1 = new Bob(300,250,40,40);
	bob2 = new Bob(344,250,40,40);
	bob3 = new Bob(388,250,40,40);
	bob4 = new Bob(432,250,40,40);
	bob5 = new Bob(476,250,40,40);

	rope1 = new Rope(roof.body,bob1.body);
	rope2 = new Rope(roof.body,bob2.body);
	rope3 = new Rope(roof.body,bob3.body);
	rope4 = new Rope(roof.body,bob4.body);
	rope5 = new Rope(roof.body,bob5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



