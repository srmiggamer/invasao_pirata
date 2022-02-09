// renomeando os modulos da biblioteca
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var angle=20;
var cannonball
// carregando imagem e animaçoes 
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
 
  canvas = createCanvas(1200, 600);
  
  // criando motor fisico e adicionando ao mundo 
  engine = Engine.create();
  world = engine.world;
  
  //propiedade de um objeto estatico
  var options = {
    isStatic: true
  }

angleMode(DEGREES)
angle=15
 // criando o corpo e adicionando ao mundo
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
  
  cannon=new Cannon(180,110,130,100,angle)
  cannonball=new CannonBall(cannon.x,cannon.y)
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  //atualizando o motor fisico
  Engine.update(engine);

  // desenhando os objetos na tela
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push(); // salvar a informaçao 
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  // atualizar a informaçao 

cannon.display()
cannonball.display()








}
