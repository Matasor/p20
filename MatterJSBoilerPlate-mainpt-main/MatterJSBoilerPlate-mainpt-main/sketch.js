
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options={
	isStatic:true
	} 
	solo=Bodies.rectangle(600,580,1200,2,plane_options);
	World.add(world,solo);

	var object_options={
		restituition:0.5,
		friction:0.02,
		frictionAir:0
	}

	var object_options2={
		restituition:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	
	var object_options3={
		restituition:0.01,
		friction:1,
		frictionAir:0.3
	}

	object=Bodies.circle(220,10,10,object_options);
	World.add(world,object);

	object2=Bodies.rectangle(110,50,10,10,object_options2);
	World.add(world,object2);

	object3=Bodies.rectangle(350,50,10,10,object_options3);
	World.add(world,object3);

	fill("brown");

	Engine.run(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS)
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("green");
  
  rect(solo.position.x,solo.position.y,1200,2)
  ellipse(object.position.x,object.position.y,30)
  rect(object2.position.x,object2.position.y,50,50)
  rect(object3.position.x,object3.position.y,100,50)
}



