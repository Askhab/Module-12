let ball = $('.ball'),
    ballWidth = ball.width(),
    ballHeight = ball.height(),
    field = $('.field'),
    fieldWidth = field.width(),
    fieldHeight = field.height();
    
$(ball).on('click', function() {
  let ballOffset = ball.offset(),
      randomHeight = getRandomNumber(fieldHeight);

  console.log(randomHeight);
  console.log(ballOffset);

  $(this).animate({left: fieldWidth - ballWidth, top: randomHeight}, '400');

});

function getRandomNumber(attribute) {
  let randomNumber = Math.floor(Math.random() * (attribute + 1 - ballHeight));
  if(randomNumber >= 0) {
    return randomNumber;
  }
}