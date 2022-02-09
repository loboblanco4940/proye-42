class Drops{
 constructor(x,y){
    var options ={
        isStatic:false,
        restitution:1,
        friction:0.1,
    }

this.rain = Bodies.circle(x, y,5,options);
}
 update(){
     if(this.rain.position.y > height){
         Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
     }
 }
 
}





    

 