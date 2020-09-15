class Rope {
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            stiffness : 3 ,
            lenghth : 2 ,
        }
        this.bodyA = body1;
        this.bodyB = body2;
        this.joint = Matter.Constraint.create(options);
        World.add(world,this.joint);
    }

    display(){
        push();
        strokeWeight(4);
        line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y);
        pop();
    }
}