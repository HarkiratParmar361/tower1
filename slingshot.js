class Slingshot{
    constructor(bodyAo, pointBo){
        var options = {
            bodyA:bodyAo,
            pointB: pointBo,
            stiffness: 0.04,
            length: 10
        }
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    display(){
        if(this.Slingshot.bodyA!=null){
            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.Slingshot.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);   
        }
    } 
    fly(){
        this.Slingshot.bodyA=null 
    }