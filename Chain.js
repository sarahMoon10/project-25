class Chain {
    constructor(pointA, bodyB){
        var options ={
           pointA: pointA, 
           bodyB: bodyB,
           stiffness: 0.04
        }
        this.pointA = pointA
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    }
    display(){
        var pointA = this.pointA
        var pointB = this.chain.bodyB.position

        push()
        strokeWeight(4)
        stroke("white")
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop();
    }
  
}