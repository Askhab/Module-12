let ball = $('.ball'),
    field = $('.field');
    

function getRandomNumber(attribute) {
  let randomNumber = Math.floor(Math.random() * (attribute + 1));
  console.log(randomNumber);
  return randomNumber;
}

$(ball).on('click', function() {
  let ballPosition = ball.position(),
  maxLimitX = Math.floor(field.width()) - Math.ceil(ball.width()),
  maxLimitY = Math.floor(field.height()) - Math.ceil(ball.height()),
  minLimit = 0,
  randomHeight = getRandomNumber(maxLimitY),
  gateTopBorder = Math.ceil(field.height()) - Math.ceil(ball.height()),
  gateBottomBorder = Math.floor(field.height() / 2 + (field.height() * 0.13) / 2);

  if(ballPosition.left === minLimit) {
    $(this).animate({left: maxLimitX, top: randomHeight}, '400');
    goal();
  } else if(ballPosition.left === maxLimitX) {
    $(this).animate({left: minLimit, top: randomHeight}, '400');
    goal();
  }

  function goal() {
    if(ballPosition.top <= gateTopBorder && ballPosition.top >= gateBottomBorder) {
      alert("Гооол!");
    }
  }
});