


// Start Boid class  +++++++++++++++++++++++++++++++++++++++++++++++++++++
class Boid {
  //  Boid constructor
  constructor(m, location) {
    this.color = this.getColor();
    // declare instance variables for Boid
    this.main = m;
    this.loc = location;
    this.vel = vector2d(Math.random()*10 - 5, Math.random()*10 - 5);
    this.context = this.main.context;
    this.radius = Math.floor(Math.random()*5+5);
    //create all initial items
    this.init();
  }

  init(){

  }

  getColor(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    return "rgb("+r+", "+g+", "+b+")";
  }

  run() { // update this
    //console.log("Inside boid run");
    this.update();
    this.render();
  }
  update() { // render or draw this to canvas
    this.checkEdges();
    this.loc.x+=this.vel.x;
    this.loc.y+=this.vel.y;
  }
  render() { // render or draw this to canvas
    //console.log("loc.x = " + this.loc.x);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.beginPath();
    this.context.arc(this.loc.x, this.loc.y, this.radius, 0, 2 * Math.PI, false);
    this.context.stroke();
  }

  checkEdges(){
    //console.log("loc.x = " + this.loc.x);
    if(this.loc.x > 1000 ||this.loc.x < 10) this.vel.x *= -1;
    if(this.loc.y > 750 ||this.loc.y < 10) this.vel.y *= -1;

  }
}
