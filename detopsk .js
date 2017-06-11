$('.devices .device').on('click',function(){
  var $active = $('.devices .active'),
      $frame = $('body');
  if ( $(this).hasClass('desk') ) {
    $active.removeClass('active');
    $(this).addClass('active');
    $frame.css({ width: '100%' });
  } else if ( $(this).hasClass('tablet') ) {
    $active.removeClass('active');
    $(this).addClass('active');
    $frame.css({ width: '788px' });
  } else if ( $(this).hasClass('tablet-land') ) {
    $active.removeClass('active');
    $(this).addClass('active');
    $frame.css({ width: '1040px' });
  } else if ( $(this).hasClass('phone') ) {
    $active.removeClass('active');
    $(this).addClass('active');
    $frame.css({ width: '340px' });
  } else if ( $(this).hasClass('phone-land') ) {
    $active.removeClass('active');
    $(this).addClass('active');
    $frame.css({ width: '500px' });
  }
});
