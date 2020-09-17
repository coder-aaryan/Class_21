var green1, green2, orange1, red1, pink1, blue1,edges;

function setup() {
  createCanvas(800,400);
  green1 = createSprite(200,200,50,50);
  green1.shapeColor = "green";
  green2 = createSprite(300,300,50,50);
  green2.shapeColor = "green";
  orange1 = createSprite(0,100,50,50);
  orange1.shapeColor = "orange";
  orange1.velocityX = 4;
  red1 = createSprite(400,350,50,50);
  red1.shapeColor = "red";
  red1.velocityY = -4;
  pink1 = createSprite(400,0,50,50);
  pink1.shapeColor = "pink";
  pink1.velocityY = 4;
  blue1 = createSprite(800,100,50,50);
  blue1.shapeColor = "blue";
  blue1.velocityX = -4;
  edges = createEdgeSprites();
}

function draw() {
  background(0,0,0);
  green2.x = mouseX;
  green2.y = mouseY;
  isTouching(green1,green2);
  bounce(blue1,orange1);
bounce(pink1,red1);
red1.bounceOff(edges);
blue1.bounceOff(edges);
pink1.bounceOff(edges);
orange1.bounceOff(edges);
  drawSprites();
}
