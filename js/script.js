let ballCoords = $('.ball').offset();
  console.log(`Ball offset - ${ballCoords.top} : ${ballCoords.left}`);
let fieldCoords = $('.field').offset();
  console.log(`Field offset - ${fieldCoords.top} : ${fieldCoords.left}`);
let fieldHeight = $('.field').innerHeight();
  console.log(`Field height - ${fieldHeight}`);
let fieldWidth = $('.field').innerWidth();
  console.log(`Field width - ${fieldWidth}`);
let ballPosition = $('.ball').position();
  console.log(`Ball position - ${ballPosition.left} : ${ballPosition.left}`);

$('.ball').on('click', function(event) {
  let lineX = event.pageX;
  let lineY = event.pageY;
  $(this).animate({left:'+=250px'}, 'fast');
  $(this).animate({top:'+=50px'}, 'slow');
  // if(ballPosition > ) {
    let text = `Ball top = ${ballCoords.top} - left = ${ballCoords.left}
    \nField height = ${fieldHeight} - Field width = ${fieldWidth}
    \nBall position-Y = ${lineY} - Ball position-X = ${lineX}`;
    
    $('.coords').text(text);
  // }
});

// $('.ball').on('click', function() {

// });