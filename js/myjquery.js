  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('#menu').pushpin({ bottom: $('.container').offset().top });
  });

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  $(document).ready(function(){
    $('.slider').slider({full_width: true});
  });

  $('.slider').slider('pause');
  $('.slider').slider('start');
  $('.slider').slider('next');
  $('.slider').slider('prev');
