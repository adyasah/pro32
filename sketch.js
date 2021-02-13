const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bgI
var bg

function preload(){
  getBg()
 
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 380, 800, 20);
  box1 = new Box(600,100,50,50);
  box2 = new Box(600,100,50,50);
  box3 = new Box(600,100,50,50);
  box4 = new Box(600,100,50,50);
  box5 = new Box(600,100,50,50);
  box6 = new Box(600,100,50,50);

  box7 = new Box(500,100,50,50);
  box8 = new Box(500,100,50,50);
  box9 = new Box(500,100,50,50);
  box10= new Box(500,100,50,50);
  box11= new Box(500,100,50,50);
  box12= new Box(500,100,50,50);

  box13 = new Box(400,100,50,50);
  box14= new Box(400,100,50,50);
  box15= new Box(400,100,50,50);
  box16= new Box(400,100,50,50);
  box17= new Box(400,100,50,50);
  box18= new Box(400,100,50,50);

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 300, y: 50 });

}

function draw() {
  Engine.update(engine);

  if(bgI){
    background(bgI)
  } 

  ground.display()
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  ball.display();
  rope.display();

}


async function getBg(){
  var responce=await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata")
  var responsJson=await responce.json()
  var dateAndTime=responsJson.datetime
  var hour=dateAndTime.slice(11,13)
      if(hour>6&&hour<18){
       bg="images/morning.webp"
      }
      if(hour>18&&hour<19){
        bg="images/sunSet.jpg"
       }  
       if(hour>19&&hour<6){
        bg="images/night.jpg"
       }
       bgI=loadImage(bg)     
           
}  
function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
} 

     
 