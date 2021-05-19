$(document).ready(function(){
    
    let w = $('.images:last-child').length;

    $('.left').click (function(){
        $('.slider-first:first-child').animate(
            {marginLeft: '-w'},
            'fast', function() {
            $('.this').preppendTo($(this).parent().css({marginRight: 0}));
        });
     });
    //  $('.right').click (function(){
    //     $('.slider-first:last-child').animate(
    //         {marginRight: '0px'},
    //         'slow', function() {
    //         $('.this').appendTo($().parent().css({marginLeft: 0}));
    //     });
    //  });
});
// $(document).ready(function(){
    
//     let w = $('.slides').width() / show;
//     let l = $('.images').length;

//     $('.images').width(w);
//     $('.slides').width(w * l);s
    

    
//     $('.left').click(function(){
//         function slides() {
//             $('.images:first-child').animate({
//                 marginLeft: -w 
//             }, 'slow', function () {
//                 $(this).appendTo($(this).parent()).css({marginLeft: 0});
//             });
//         };
//     });
//     $('.right').click(function(){
//         function slides() {
//             $('.images:last-child').animate({
//                 marginRight: +w 
//             }, 'slow', function () {
//                 $(this).appendTo($(this).parent()).css({marginRight: 0});
//             });
//         }
//     });
// });