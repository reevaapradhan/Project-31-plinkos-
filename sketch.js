const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var divisionHeight = 300;

var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 793, 480, 10);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 25; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 55; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);

  drawSprites();
  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10),10,10));
  }
  for (var i=0; i<divisions.length; i=i+1){
    divisions[i].display();
  }
  for (var i=0; i<plinkos.length; i=i+1){
    plinkos[i].display();
  }
  for (var i=0; i<particles.length; i=i+1){
    particles[i].display();
  }
  
}