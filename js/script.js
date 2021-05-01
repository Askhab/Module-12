let ball = $('.ball'),
    ballWidth = ball.width(),
    ballHeight = ball.height(),
    field = $('.field'),
    fieldWidth = field.width(),
    fieldHeight = field.height();
    
$(ball).on('click', function() {
    let randomHeight = Math.floor(Math.random() * (fieldHeight + 1));
    console.log(randomHeight);
    $(this).animate({left: fieldWidth - ballWidth, top: randomHeight}, '400');
});