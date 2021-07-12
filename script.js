$(".home").click(()=>{
  $("html, body").animate({
    scrollTop : 0
  },800);
});
$(".about").click(()=>{
  const position = $('#about').offset().top;
  $("html, body").animate({
    scrollTop : position
  },800);
});
$(".works").click(()=>{
  const position = $('#works').offset().top;
  $("html, body").animate({
    scrollTop : position
  },800);
});
$(".contact").click(()=>{
  const position = $('#contact').offset().top;
  $("html, body").animate({
    scrollTop : position
  },800);
});
$('.nav_toggle').on('click', function () {
  $('.nav_toggle, .nav').toggleClass('show');
});

$(".menu-bar").click(()=> {
  $(".open").fadeIn();
  $(".menu-bar").fadeOut();
});

$(".cross").click(()=> {
  $(".open").fadeOut();
  $(".menu-bar").fadeIn();
});

$(".home").click(()=> {
  $(".open").hide();
  $(".menu-bar").show();
});
$(".about").click(()=> {
  $(".open").hide();
  $(".menu-bar").show();
});
$(".works").click(()=> {
  $(".open").hide();
  $(".menu-bar").show();
});
$(".contact").click(()=> {
  $(".open").hide();
  $(".menu-bar").show();
});