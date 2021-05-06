let ball = $('.ball'),
    ballWidth = ball.width(),
    ballHeight = ball.height(),
    ballLineX = ball.offset().left,
    ballLineY = ball.offset().top,
    field = $('.field'),
    fieldWidth = field.width(),
    fieldHeight = field.height(),
    goalLeft = $('.leftSide'),
    goalRight = $('.rightSide');

// console.info(ballLineX);
// console.info(ballLineY);
console.info(goalLeft.position().top);
console.info(goalLeft.position().left);
console.info(goalRight.position().top);
console.info(goalRight.position().left);

$(ball).on('click', function() {
  let ballPosition = ball.position(),
  goalLeftPosition = goalLeft.position(),
  goalRightPosition = goalRight.position(),
  randomHeight = getRandomNumber(fieldHeight);

  if(ballPosition.left === 0) {
    $(this).animate({left: fieldWidth - ballWidth, top: randomHeight}, '400');
  } else if(ballPosition.left === fieldWidth - ballWidth) {
    $(this).animate({left: fieldWidth - fieldWidth, top: randomHeight}, '400');
  }

  if(
    (ballPosition.left - ballWidth > goalLeftPosition.left && ballPosition.right - ballHeight > goalLeftPosition.top) ||
    (ballPosition.left - ballWidth > goalRightPosition.left && ballPosition.top - ballHeight > goalRightPosition.top))
  {
    alert(`Гооол!`);
  }
});

function getRandomNumber(attribute) {
  let randomNumber = Math.floor(Math.random() * (attribute + 1 - ballHeight));
  if(randomNumber >= 0) {
    return randomNumber;
  }
}