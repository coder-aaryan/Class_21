function isTouching(object1,object2){
    if(object2.x-object1.x<object1.width/2+object2.width/2&&
      object1.x-object2.x<object1.width/2+object2.width/2
      &&object1.y-object2.y<object1.height/2+object2.height/2
      &&object2.y-object1.y<object1.height/2+object2.height/2){
    green1.shapeColor = "red";
    green2.shapeColor = "red";
    }
    else {
    green1.shapeColor = "green";
    green2.shapeColor = "green";
    }
    
    }
    function bounce(object1,object2) {
      if(object2.x-object1.x<object1.width/2+object2.width/2&&
        object1.x-object2.x<object1.width/2+object2.width/2){
          object1.velocityX = -object1.velocityX;
          object2.velocityX = -object2.velocityX;
        }
        if(object1.y-object2.y<object1.height/2+object2.height/2
          &&object2.y-object1.y<object1.height/2+object2.height/2) {
    object1.velocityY = -object1.velocityY;
    object2.velocityY = -object2.velocityY;
    
        }
    }