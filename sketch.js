
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


	Engine.run(engine);
	roof = new Roof(380,120,500,50);
	
	bobObject1 = new Bob(180,550,50 )
	bobObject2 = new Bob(280,550,50)
	bobObject3 = new Bob(380,550,50)
	bobObject4 = new Bob(480,550,50)
	bobObject5 = new Bob(580,550,50)

	rope1 = new Rope(bobObject1.body,roof.body,-200,0)
	rope2 = new Rope(bobObject2.body,roof.body,-100,0)
	rope3 = new Rope(bobObject3.body,roof.body,0,0)
	rope4 = new Rope(bobObject4.body,roof.body,+100,0)
	rope5 = new Rope(bobObject5.body,roof.body,+200,0)
	
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0});	
	}
}


