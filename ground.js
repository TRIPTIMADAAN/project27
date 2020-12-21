class Ground 
{
    constructor(y)
    {
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(width/2,y,width,30,option )
        World.add(world,this.body)
    }
    display()
    {
        rectMode(CENTER)
         rect(this.body.position.x,this.body.position.y,width,30) 
    }
}