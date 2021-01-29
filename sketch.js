const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bBall, ground, sling, hoop;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  bBall = new Ball(200, 200, 40, 40);
  ground = new Ground(400, 380, 800, 10);
  ground1 = new Ground(624, 250, 70, 5);
  ground2 = new Ground(590, 223, 5, 60);
  ground3 = new Ground(664, 190, 5, 130);
  sling = new SlingShot(bBall.body,{x:185, y:220})
  hoop = new Hoop(660, 250, 0, 0);
  player1 = new Player(120, 270, 0, 0)
  
  Engine.run(engine);
}

function draw() {
  background(0);  
  console.log(getFrameRate());
  player1.display()
  bBall.display();
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  sling.display();
  hoop.display();
 
  fill("white")
  textFont("century gothic")
  noStroke()
  textSize(30)
  text("Basketball Stars!", 400, 35)
}

function mouseDragged(){
  Matter.Body.setPosition(bBall.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
   if(keyCode === 32)
	{
		Matter.Body.setPosition(bBall.body,{x:185, y:220})
		sling.attach(bBall.body);
  }
}