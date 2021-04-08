class Ball {
constructor(x, y, diameter) {
var options = {
 'resitution': 0.8,
 'friction': 1.0,
 'desity':1.0,
 isStatic: true
}
this.body = Bodies.circle(x, y, diameter, options);
this.diameter = diameter;
World.add(world, this.body)
}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.diameter/2, this.diameter/2)
    pop();
}
}