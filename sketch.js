var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bottomSprite,rightSprite,leftSprite,bottomBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	bottomSprite=createSprite(width/2,649,200,20);
	leftSprite=createSprite(290,609,20,100);
	rightSprite=createSprite(509,609,20,100);



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.0, isStatic:true});
	World.add(world, packageBody);

	bottomBody = Bodies.rectangle( width/2,649,200,20, {isStatic:true});
	World.add(world, bottomBody);

	bottomSprite.shapeColor=color("red")
	rightSprite.shapeColor=color("red")
	leftSprite.shapeColor=color("red")
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  bottomSprite.x=bottomBody.position.x
  bottomSprite.y=bottomBody.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);

  }
}



