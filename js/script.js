let ball = $('.ball'),
    field = $('.field');
    

function getRandomNumber(attribute) {
  let randomNumber = Math.floor(Math.random() * (attribute + 1));
  return randomNumber;
}

$(ball).on('click', function() {
  let ballPosition = ball.position(),
  ballTopBorder = ballPosition.top,
  ballBottomBorder = ballPosition.top + ball.height(),
  maxLimitX = Math.floor(field.width()) - Math.ceil(ball.width()),
  maxLimitY = Math.floor(field.height()) - Math.ceil(ball.height()),
  minLimit = 0,
  randomHeight = getRandomNumber(maxLimitY),
  gateTopBorder = Math.floor(field.height() / 2 - (field.height() * 0.13) / 2),
  gateBottomBorder = Math.floor(field.height() / 2 + (field.height() * 0.13) / 2);

  if(ballPosition.left === minLimit) {
    $(this).animate({left: maxLimitX, top: randomHeight}, '400');
    goal();
  } else if(ballPosition.left === maxLimitX) {
    $(this).animate({left: minLimit, top: randomHeight}, '400');
    goal();
  }

  function goal() {
    
    console.log("Верхняя граница ворот - " + gateTopBorder);
    console.log("Нижняя граница ворот - " + gateBottomBorder);

    if(ballTopBorder > gateTopBorder && ballTopBorder < gateBottomBorder) {
      setTimeout(() => {
        console.warn("--------------");
        console.log("Верхняя граница мяча - " + ballTopBorder);
        console.log("Нижняя граница мяча - " + ballBottomBorder);
        alert("Гооол!");
      }, 1000) ;
    }
  }
});

$(field).on("click", function(event) {
  // console.log("Line X - " + event.clientX);
  console.log("Line Y - " + event.clientY);
});