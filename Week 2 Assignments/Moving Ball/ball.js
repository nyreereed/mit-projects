//Set global variable that would contain the position, velocity and the html element "ball"
var velocity = 100;
var positionX = 0;
var ball = document.getElementById('ball');
var reverse = false;
var positionY = 0;

//write a function that can change the position of the html element "ball"
function moveBall() {
  positionX = positionX + velocity;
ball.style.left = positionX + 'px';
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;

  if(reverse = false){
    positionX = positionX + velocity;
    positionY = positionY + velocity;
  } else { positionX = positionX - velocity;
            positionY = positionY - velocity;
    }
    while(positionX > Xmax || positionX = Xmin){
      reverse = !false;
      while(positionY > Ymax || positionY = Ymin){
      reverse = !false;

    }

  }
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);