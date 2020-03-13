// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var tank, cannonball, shot, ground;
var ball1, ball2;
var launcherX, launcherY;
var engine, world;
var flag = "start";


function setup() {
    // Setup the canvas, the ground, the tanker, the shooting ball and the bubble balls.
    createCanvas(800,800);

    engine = Engine.create();

    world = engine.World;

    tank = new Tanker(80,100,60,50);

    ground = new Ground(width/2,height-9,width,50);

    ball1 = new Ball(400,50,20);
    ball2 = new Ball(500,70,20);

    cannonball = new CanonBall(20,20);

    shot = new ShootBall(cannonball.body,{x: 70, y:height-200})
}

function draw() {

    background(255);
// Remember to update the Matter Engine and set the background.
    Matter.Engine.update(engine);

    ground.display();
    tank.display();    
    ball1.display();
    ball2.display();
    shot.display();
    cannonball.display();

    if(keyIsDown(UP_ARROW)){
        shot.attach(cannonball.body);
    }

    /*
    if(gameState == "start" && keyIsDown("space")){
        gameState = "play";
    }


    if(gameState=="play"){

        spawnBall();

    if(keyIsDown("a")){
        cannon.velocityX = -4;
    }
    if(keyIsDown("d")){
        cannon.velocityX = 4;
    }

    if(mouseReleased){
        keyReleased();
    }
    

}
*/
}
/*
function spawnBall(){
    if(frameCount%50==0){
        ball = new Ball(750,400,15);
    }
    ball.velocityX = -5;
    ball.velocityY = 5;
    if(ball.x==5||ball.x==795){
        ball.velocityX = ball.velocityX*-1;
    }
    if(ball.y==5||ball.y==795){
        ball.velocityY = ball.velocityY*-1;
    }
    if (ball.position.x - cannon.position.x < ball.width/2 + cannon.width/2
        && cannon.position.x - ball.position.x < ball.width/2 + cannon.width/2) {
            gameState = "start";
}
}
*/
function keyReleased() {
    // Call the shoot method for the cannon.
    
    if(keyCode == DOWN_ARROW){
        flag = "launch";
        shot.shoot();
    }      
        
}

