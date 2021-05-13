let ball = $('.ball'),
    field = $('.field');

$(ball).on('click', function() {
  let ballPosition = ball.position(),
  ballTopBorder = ballPosition.top,
  ballBottomBorder = ballPosition.top + ball.height(),
  maxLimitX = Math.floor(field.width()) - Math.ceil(ball.width()),
  maxLimitY = Math.floor(field.height()) - Math.ceil(ball.height()),
  minLimit = 0,
  targetBallY = getRandomNumber(minLimit, maxLimitY),
  gateTopBorder = Math.floor(field.height() / 2 - (field.height() * 0.13) / 2),
  gateBottomBorder = Math.ceil(field.height() / 2 + (field.height() * 0.13) / 2);

  if(ballPosition.left === minLimit) {
    $(this).animate({left: maxLimitX, top: targetBallY}, '400');
    goal();
  } else if(ballPosition.left === maxLimitX) {
    $(this).animate({left: minLimit, top: targetBallY}, '400');
    goal();
  }

  function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  }

  function goal() {
    if((targetBallY + ball.height() / 2) > gateTopBorder && (targetBallY + ball.height() / 2) < gateBottomBorder) {
      setTimeout(() => {
        alert("Гооол!");
      }, 1000) ;
    }
  }
});

$(field).on("click", function(event) {
  // console.log("Line X - " + event.clientX);
  console.log("Line Y - " + event.clientY);
});