class Walker
{
  constructor(x, y)
  {
    this.pos = createVector(x, y);
    this.target = null;
    
    this.speed = 0;
    this.speedMultiplier = 2.0;
    this.maxSpeed = 20;
    
    this.history = [];
    this.historyMax = 25;
    
    this.newTargets = [1, 3];
  }
  
  draw()
  {
    let prev;
    let pos;
    let a;
    let c;
    
    for(let i = 0; i < this.history.length; i++)
    {
      pos = this.history[i][0];
      c = this.history[i][1];
      
      if(!prev)
      {
        prev = pos;
        
        continue;
      }
      
      a = map(i, 0, this.history.length, 25, 150);
      
      stroke(c[0], c[1], c[2], a);
      line(pos.x, pos.y, prev.x, prev.y);
      fill(c[0], c[1], c[2]);
      circle(pos.x, pos.y, 3);
      
      prev = pos;
    }
    
    if(prev)
    {
      stroke(255, 255, 255, 255);
      line(prev.x, prev.y, this.pos.x, this.pos.y);
    }
    
    push();
    stroke(50);
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, size * 1.5);
    pop();
    
    push();
    noStroke();
    fill(255);
    textSize(10);
    text(`Speed: ${int(this.speed)} (max: ${this.maxSpeed})`, 0, 10);
    text(`Target: ${this.target ? this.target.n : "-"}`, 0, 20);
    pop();
    
  }
  
  update()
  {
    this.pickTarget();
    
    if(!this.target)
    {
      return;
    }
    
    let tpos = this.target.pos;
    let dst = dist(tpos.x, tpos.y, this.pos.x, this.pos.y);

    if(dst <= size)
    {
      let data = [tpos, [random(255), random(255), random(255)]];
      
      this.history.push(data);

      if(this.history.length > this.historyMax)
      {
        this.history.shift();
      }
      
      targets.shift();

      this.target = null; 
      this.pickTarget();
      this.speed = 0;
    }
    
    if(!this.target)
    {
      return;
    }
    
    let t = createVector(this.target.pos.x, this.target.pos.y);
    let tp = this.target.pos;
    let sp = this.pos;
    let d = dist(tp.x, tp.y, sp.x, sp.y);
    let s = map(d, 25, 0, 3.5, 1.0);
    
    this.speed = s * this.speedMultiplier;
    
    if(this.speed > this.maxSpeed)
    {
      this.speed = this.maxSpeed;
    }
    
    t.sub(sp);
    t.normalize();
    t.mult(this.speed);
    
    this.pos.add(t);
  }
  
  pickTarget()
  {
    if(this.target)
    {
      return;
    }
    
    if(targets.length == 0)
    {
      let amt = random(this.newTargets[0], this.newTargets[1]);
      
      for(let i = 0; i < amt; i++)
      {
        add_target(-1, -1);
      }
      
      return;
    }
    
    this.target = targets[0];
  }
}