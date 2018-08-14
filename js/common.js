$('.gallery_wrapper').magnificPopup({
 delegate: 'a',
 type: 'image',
 tLoading: 'Загрузка изображения #%curr%...',
 gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
 }

 });
$('.block').magnificPopup({
 delegate: 'a',
 type: 'image',
 tLoading: 'Загрузка изображения #%curr%...',
 gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
 }

 });

// TweenMax.fromTo('.baner_wrapper', 3, {
//  opacity: 0 // from state
// }, {
//  opacity: 1 // to end state
// });

$(".catalog_products").on("click","a", function (event) {
  
        event.preventDefault();
        var id  = $(this).attr('href'),
       
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
     
        $('a').removeClass('active_products');
        $(this).addClass('active_products');
});

$('.button').on('click', function(){
    $('.contact_form').removeClass('none');
    $('.overlay').removeClass('none');
});
$('.form_close').on('click', function(){
     $('.contact_form').addClass('none');
    $('.overlay').addClass('none');

});

jQuery(document).ready(function(){
    jQuery.goup();
});