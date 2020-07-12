let targets = [];
let walker;
let counter = 1;

function setup()
{
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
  if(x == -1) { x = random(target_size / 2, ww - (target_size / 2)); }
  if(y == -1) { y = random(target_size / 2, wh - (target_size / 2)); }
  
  let t = new Target(x, y, counter);
  
  targets.push(t);
  counter++;
}