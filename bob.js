class Bob {
    constructor(x, y,width,height ) {
      var options = {
          isStatic : true,
          'restitution':0.9,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 40;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("purple");
      fill('purple');
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  