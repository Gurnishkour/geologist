class Iron { 
	constructor(x,y)
   { 
var options={
    restitution:0.8,
    friction:3,
    density:30
}

        this.body= Bodies.rectangle(x ,y,30, 60, options);
        this.width=30;
        this.height = 60;
	    World.add(world, this.body);
       
   }
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("brown");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.width,this.height);
			pop()
	}

}