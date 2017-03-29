 $(document).ready(function(){
  $("#sp_menu_icon").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});