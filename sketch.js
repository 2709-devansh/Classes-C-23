const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,300,30,50);
    box2 = new Box(120,200,30,30);
    ground = new createGround(200,400,400,30);
}

function draw(){
    background(20);
    Engine.update(engine);
    box1.display();   
    box2.display();
    ground.display();
}