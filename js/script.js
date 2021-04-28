let ballWidth = $('.ball').innerWidth();
  console.log(`Ball width - ${ballWidth}`);
let ballHeight = $('.ball').innerHeight();
  console.log(`Ball height - ${ballHeight}`);

let fieldWidth = $('.field').innerWidth();
  console.log(`Field width - ${fieldWidth}`);
let fieldHeight = $('.field').innerHeight();
  console.log(`Field height - ${fieldHeight}`);

$('.ball').on('click', function(event) {
  let lineX = event.pageX;
  let lineY = event.pageY;
  
  $(this).animate({left:'+=250px'}, 'fast');
  $(this).animate({top:'+=50px'}, 'slow');
  
  let text = `Field width = ${fieldWidth} - Field height = ${fieldHeight}
  \nBall position-X = ${lineX} - Ball position-Y = ${lineY}`;
  
  $('.coords').text(text);

  if(lineX < fieldWidth || lineX > fieldWidth) {
    console.info(`Ball out of the field`);
  }
});