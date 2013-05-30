var count_page2 = 0;

$(document).ready(function(){

  // $("#start").css({ opacity: 0.5 });
  $("#start").fadeOut(0);
  $("#start_text").fadeOut(0);
  $(".next_page_button").fadeOut(0);
  setTimeout(function(){
    $("#start").fadeIn(4000);
    $("#start_text").fadeIn(4000);
  },100);
  setTimeout(function(){
    $(".next_page_button").fadeIn(4000);
  },4000);


  // the code block below makes scrolling smooth
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().delay(1000).animate({
      'scrollTop': $target.offset().top
      }, 1200, 'swing', function () {
        window.location.hash = target;
    });
  });

  // code block below animates the menu buttons
  $(".hidden_link").click(function(){
    $("#face_photo").animate({
      marginTop: '-27.5%',
      width: '-50px',
      height: '-50px'
    }, 1000, 'swing');
    $(".navigation").animate({
      marginLeft: '43%',
      marginTop: '-27.5%'
    }, 1000, 'swing');
    $('#face_photo').css('position', 'fixed');
    $('.navigation').css('position', 'fixed');
    setTimeout(function(){
      $('.navigation').css('background-color', '#E8E8E8').fadeIn(2000);
    }, 1000);
  });


  $('.navigation').waypoint(function() {
    console.log("working");
  });

  // $('#second_page').mouseenter(function () {
  //   $(this).removeClass('hidden');
  //   console.log("mouseenter");
  //   // $('#second_page').hide().fadeIn(2000);
  // });

  $('#second_page').waypoint(function(direction) {
    console.log(direction);
    if (direction === "down" && count_page2 === 0) {
      $('#second_page').removeClass('hidden');
      $('#second_page').hide().fadeIn(2000);
      count_page2 += 1;
    }
  });

});