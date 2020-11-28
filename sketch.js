var a;
var circles=[];
function preload()
{ polygon_img=loadImage("polygon.png"); }


function setup() {
  createCanvas(800,800);
  stroke(255)

  polygon=Bodies.circle(50,200,20)
 World.add.add(world,polygon)

 Slingshot=new Slingshot(this.polygon,{x:100,y:200});

  Block8=new Block(330,235,30,40);
  Block9=new Block(360,235,30,40);
  Block10=new Block(390,235,30,40);
  Block11=new Block(420,235,30,40);
  Block12=new Block(450,235,30,40);
  //Level3
  Block13=new Block(330,195,30,40);
  Block14=new Block(360,195,30,40);
  Block15=new Block(390,195,30,40);
  //Top
  Block16=new Block(390,155,30,40);
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
imageMode(CENTER) image(polygon_img ,ball.position.x,ball.position.y,40,40);
Block8.display()
Block9.display()
Block10.display()
Block11.display()
Block12.display()
Block13.display()
Block14.display()
Block15.display()
Block16.display()
  
function mouseDragged(){ Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY}); }
  a=a-1;
}

  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 