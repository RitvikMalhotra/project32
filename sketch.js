const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1;

var bird, slingshot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
   
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
   
    box5 = new Box(810,160,70,70);
    
    bird = new Bird(200,50);

    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
   
        background("black");
    
     
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    box3.display();
    box4.display();
    

    box5.display();
    
    bird.display();
   
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}

