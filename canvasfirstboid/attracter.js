'use strict'

class Attractor extends Boid{
  constructor(m, location){
    super(m, location);
    this.context = this.main.context;
    this.radius = 10;
    this.color = "blue";
  }
  update(){
    this.vel.add(this.acc);
    this.vel.normalize()*22;
    this.loc.add(this.vel);
    if(this.radius-- < 3) this.radius = 15;
  }
}
