let targets = [];
let walker;
let counter = 1;
let ww;
let wh;

let size = 25;

function setup()
{
  ww = 800;
  wh = 600;
  createCanvas(ww, wh);
  
  walker = new Walker(windowWidth / 2, windowHeight / 2);
}

function mousePressed()
{
  add_target(mouseX, mouseY);
}

function draw()
{
  background(51);
  stroke(255);
  
  walker.update();
  
  for(let t of targets)
  {
    t.draw();
  }
  
  walker.draw();
}

function add_target(x, y)
{
  if(x == -1) { x = random(size / 2, ww - (size / 2)); }
  if(y == -1) { y = random(size / 2, wh - (size / 2)); }
  
  let t = new Target(x, y, counter);
  
  targets.push(t);
  counter++;
}