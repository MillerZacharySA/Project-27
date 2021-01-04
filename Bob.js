class Bob{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8
        }
        
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x,y,r/2,options);

        World.add(world,this.body)
    }
    display(){
        var posx = this.body.position.x;
        var posy = this.body.position.y;
        push();
        translate(posx,posy);
        rectMode(CENTER) 
        strokeWeight(3); 
        fill(255,0,255); 
        ellipse(0,0,this.r, this.r);
        pop();
    }
}