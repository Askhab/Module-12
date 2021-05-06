let ball = $('.ball'),
    ballWidth = ball.width(),
    ballHeight = ball.height(),
    field = $('.field'),
    fieldWidth = field.width(),
    fieldHeight = field.height(),
    goal = $('.goal');

console.info(goal.position());
    
$(ball).on('click', function() {
  let ballPosition = ball.position(),
      randomHeight = getRandomNumber(fieldHeight);

  if(ballPosition.left === 0) {
    $(this).animate({left: fieldWidth - ballWidth, top: randomHeight}, '400');
  } else if(ballPosition.left === fieldWidth - ballWidth) {
    $(this).animate({left: fieldWidth - fieldWidth, top: randomHeight}, '400');
  }
});

function getRandomNumber(attribute) {
  let randomNumber = Math.floor(Math.random() * (attribute + 1 - ballHeight));
  if(randomNumber >= 0) {
    return randomNumber;
  }
}