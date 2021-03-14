$("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".menu-content").toggleClass("open");
});

$('#top-btn').click(function () {
  $('html,body').animate({
    scrollTop: 0
  }, 700);
});