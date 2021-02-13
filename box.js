class Box{
    constructor(x,y,w,h){
        this.body=Bodies.rectangle(x,y,w,h)
        //physics engine body, physics engine will take care of rotation
        World.add(world,this.body)
        this.width=w
        this.height=h
    }

    display(){
        var pos=this.body.position
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("green")
        rotate(angle);
        angleMode(RADIANS)
        rect(0,0,this.width,this.height)
        pop()
    }
}
//0,0 -> pos.x, pos.y
//pos.x,pos.y -> 0,0