class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            'restitution':0.3,
            'friction':0.2,
            'density':1.2			
			}
            this.image=loadImage("paper.png")
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			rectMode(CENTER)
            imageMode(CENTER);
			image(this.image, 0,0,this.w,this.h)
			pop()
			
	}

}