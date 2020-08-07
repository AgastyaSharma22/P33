var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];

var turn=0;
var plinkos = [];
var divisions=[];
var score=0;
var gameState="play";
var divisionHeight=300;

  

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
 
  
  
   
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
       
  }
 


function draw() {
  background("black");
  textSize(20);
  console.log(mouseX,mouseY);
  text("Score : "+score,20,30);
  text("500",40,520);
  text("500",120,520);
  text("500",200,520);
  text("500",280,520);
  text("500",360,520);
  text("100",440,520);
  text("100",520,520);
  text("100",600,520);
  text("200",680,520);
  text("200",760,520);

  Engine.update(engine);  
   for (var j = 0; j < plinkos.length; j++) {
     
     plinkos[j].display();
     
   }
   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
    }
  for (var l = 0; l < particles.length; l++) {
   
     particles[l].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState!=="end"){
    particle=new Particle(mouseX,10,10,10);
    if(particle!=null){
      particle.display();
      if(particle.body.position.y>380){
        if(particle.body.position.x>400){
            score=score+500;
            particle=null;
            if(turn>=5){
              gameState="end";
              text("GAME OVER",400,400);
             }
        }
      }
    }
   }
  }