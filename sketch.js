const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree1;
var mango,ground;
var stone;
var gameState,detectcollision;
var chain;

function preload()
{
   boy = loadImage("boy.png");
   garden = loadImage("bkimg.jpg");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
    

	//tree1 = createSprite(400,350,200,200);
	
//Create the Bodies Here.
	ground = new Ground(width/2,700,width,20);
   tree1 = new ped(1000,250,400,400);
   mango = new Mangoes(470,200,100,100);
   mango1 = new Mangoes(440,170,100,100);
   mango2 = new Mangoes(570,210,100,100);
   mango3 = new Mangoes(530,145,100,100);
   mango4 = new Mangoes(490,250,100,100);
   mango5 = new Mangoes(420,180,100,100);
   mango6 = new Mangoes(520,190,100,100);
   mango7 = new Mangoes(450,160,100,100);
   stone = new Stone(200,570,100,100);
   chain = new Chain(mango.body,stone.body);
	Engine.run(engine);
  
}


function draw() {
 background(garden);
  image(boy ,200,400,200,300);

  tree1.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  ground.display();
  chain.display();
  detectCollision();
}

function detectCollision(lstone,lmango)
{
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if(distance<=mango.r+stone.r)
{
  Matter.Body.setStaic(lmango.body,false);
}
detectCollision(stone.mango);
detectCcllision(stone.mango2);
detectCollision(stone.mango3);
detectCollision(stone.mango4);
detectCollision(stone.mango5);
detectCollision(stone.mango6);
detectCollision(stone.mango7);
}


function mouseDragged(){
   if (gameState!=="launched"){
       Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
   }
}


function mouseReleased(){
   chain.fly();
   gameState = "launched";
}

function keyPressed(){
   if(keyCode === 32){
      Matter.Body.setPosition(stone.body,{x:235,y:420});
      chain.attach(stone.body);
   }
}
