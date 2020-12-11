var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "black";

  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,0);  

  fill(0,0,0);
  textSize(20);
  text("Speed: " + speed,10,50);
  text("Weight: " + weight,300,50);
  text("Damage Sustained: " + car.shapeColor,600,50);

  if(car.shapeColor === "green"){
    fill(0,0,0);
    textSize(50);
    text("Preferred",(width/2)-200,height/2);
  }

  if(car.shapeColor === "blue"){
    fill(0,0,0);
    textSize(50);
    text("Moderate",(width/2)-200,height/2);
  }

  if(car.shapeColor === "red"){
    fill(0,0,0);
    textSize(50);
    text("Not advised",(width/2)-200,height/2);
  }

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;

    var deformation = (0.5*weight*speed*speed)/22500

    if(deformation>180){
      car.shapeColor = "red";
    }

    if(deformation<180 && deformation>100){
      car.shapeColor = "blue"; 
    }

    if(deformation<100){
      car.shapeColor = "green";
    }
    
  }

  drawSprites();
}