const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("images/gamingbackground2.png");
  heroImg= loadImage("images/Superhero-01.png");
  monsterImg= loadImage("images/Monster-01.png");
  bg2= loadImage("images/gamingbackground1.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  hero.image(heroImg);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
  monster.image(monsterImg);

  box1 = createSprite(600, 100, 70, 70);
  box1.shapeColor= "red";
  box2 = createSprite(900, 100, 70, 70);
  box2.shapeColor= "red";
  box3 = createSprite(900, 100, 70, 70);
  box3.shapeColor = "red";
  box4 = createSprite(900, 100, 70, 70);
  box4.shapeColor= "red";

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: MouseX, y: MouseY});
}

async function getTime() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();
  console.log(response.log); 
  
  async function getBgImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
        var responseJSON = await response.json();
    
    var datetime = responseJSON.datetime; 
    var hour= datetime.slice(11,13)
  
    if(hour>= 06 && hour<= 19){
      bg = "images/gamingbackground2.jpeg";
    }
  
  else{
    bg = "images/gamingbackground1.jpeg"; 
  }
}
backgroundImage = loadImage(bg); 
console.log(bg)
}