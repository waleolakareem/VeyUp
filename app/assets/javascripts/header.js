$(document).on("turbolinks:load", function(){
  goin()
  checked()
  // clickoncoco()

//   $(window).resize(function () {
//     var viewportWidth = $(window).width();
//     if (viewportWidth < 420) {
//             $(".input-lg").removeClass("input-lg").addClass("input-sm");
//             $(".btn-lg").removeClass("btn-lg").addClass("btn-sm");
//     }else{
//             $(".input-sm").removeClass("input-sm").addClass("input-lg");
//             $(".btn-sm").removeClass("btn-sm").addClass("btn-lg");

//     }
// });


});

var goin = function(){
  $("#coco").on("click",function(e){
    var className = $('#navcol-1').attr('class')
    if (className.includes('in')) {
      $('#navcol-1').removeClass('in');
    } else {
      $('#navcol-1').addClass('in');
    }

  })
}


var checked = function(){
  var i = 3
  var rating = $('.rator').first().text()
  console.log(rating);
  var rate = parseFloat(rating);
  console.log(rate);
  while(i < rate){
    $('.fa-star').addClass("checked")
    i++
  }
}
