class Target
{
  constructor(x, y, number)
  {
    this.pos = createVector(x, y);
    this.n = number;
    
    let s = size / 2;
    
    if(this.pos.x < s || this.pos.x > ww - s ||
       this.pos.y < s || this.pos.y > wh - s)
    {
      this.pos = createVector(
        random(s, ww - s),
        random(s, wh - s)
      );
      
      console.log(`Bad target position provided. New is: x: ${this.pos.x} y: ${this.pos.y}`);
    }
  }
  
  draw()
  {
    push();
    noStroke();
    fill(30, 130, 30);
    ellipse(this.pos.x, this.pos.y, size);
    pop();
    
    push();
    noStroke();
    fill(255);
    textSize(map(this.n, 0, 600, size * 0.5, size * 0.25));
    text(this.n, this.pos.x - (size / 3), this.pos.y);
    pop();
  }
}