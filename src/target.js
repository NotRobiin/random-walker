class Target
{
  constructor(x, y, number)
  {
    this.pos = createVector(x, y);
    this.n = number;
    
    let s = target_size / 2;
    
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
    fill(target_color[0], target_color[1], target_color[2]);
    ellipse(this.pos.x, this.pos.y, target_size);
    pop();
    
    push();
    noStroke();
    fill(255);
    textSize(map(this.n, 0, 600, target_size * 0.5, target_size * 0.25));
    text(this.n, this.pos.x - (target_size / 3), this.pos.y);
    pop();
  }
}