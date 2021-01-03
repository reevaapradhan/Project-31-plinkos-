const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var particle;

var divisionHeight=300;

var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,793,480,10);
  particle = new Particle(200,5);

  }

function draw() {
  background(0, 0, 0);
  Engine.update(engine);
  
  drawSprites();
  ground.display();
  particle.display();

  for (var k=0; k <=width; k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }


  for(var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  for(var j = -10; j <=width-20; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for(var j = -30; j <=width-30; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }
}