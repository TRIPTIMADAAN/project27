
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5,ground,chain,chain2,chain3,chain4,chain5,line1,line2,line3,line4,line5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
     engine = Engine.create();
	world = engine.world;
    bob1=new Bob(300,550,25)
	bob2=new Bob(400,550,25)
	bob3=new Bob(500,550,25)
	bob4=new Bob(600,540,25)
	bob5=new Bob(700,520,25)
  ground= new Ground(150)
  chain=new Chain(bob1.body,ground.body,-50*2,0)
  chain2=new Chain(bob2.body,ground.body,-50*1,0)
  chain3=new Chain(bob3.body,ground.body,0,0)
  chain5=new Chain(bob4.body,ground.body,50*1,0)
  chain4=new Chain(bob5.body,ground.body,50*2,0)
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  chain.display()
  chain5.display()
  chain2.display()
  chain3.display()
  chain4.display()
  ground.display()
  drawSprites();
  if (keyCode === UP_ARROW) 
	{
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:150,y:0})
    }
}



