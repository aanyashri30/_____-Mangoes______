class Mangoes {
    constructor(x, y,){
      var options = {
        'restitution':0,
        'friction':1.0,
        'isStatic':true
    }
      this.image = loadImage("mangoed.png");
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 50;
      this.body = Bodies.rectangle(this.x,this.y,50,50,options);
    World.add(world,this.body)
     // this.Visibility = 255;

     var options={
       isStatic:true,
       restitution:0,
       friction:1,
     }
    }
  display()
  {
   var pos =this.body.position;
   
    push();
    translate(pos.x, pos.y);
    //rectMode(CENTER);
    strokeWeight(4);
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width,this.height);
    pop();
  }
}