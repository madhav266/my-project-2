class Log {
    constructor(x,y,width,height){
this.x=x
this.y=y
this.width=width
this.height=height
this.body=createSprite(this.x,this.y,this.width,this.height)
this.body.velocityY=-1
    }
    display(){
        drawSprites()
    }
}