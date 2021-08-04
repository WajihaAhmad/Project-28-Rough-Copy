
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ground1;
var paper; 
var paper1;
var dustbin;
var dustbin1;
var slingshot1;
var slingshot;
function preload()
{

}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(500,480,width,40)
	paper1 = new Paper(200,50,50)
	dustbin1 = new Dustbin(845,400,900,400)
	slingshot1 = new SlingShot(paper.body,{x:180, y:50});
	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  paper1.display();
  dustbin1.display();
  slingshot1.display();

}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();

 }






