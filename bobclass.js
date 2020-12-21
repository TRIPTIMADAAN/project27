class Bob
{
    constructor(x,y,r)
    {
       var options={
        restitution : 0.8,
        friction : 1.5,
        density : 0.5
       }
       this.body = Bodies.circle(x,y,r,options)
       World.add(world,this.body)
       
       this.h=r
   }
     display(){
        
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.h,this.h)
         
        }
     

}