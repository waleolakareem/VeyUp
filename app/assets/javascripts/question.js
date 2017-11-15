$(document).on("turbolinks:load", function(){
  hideCreateSurvey()
  like()
  update()
  // home_animation()
});


var hideCreateSurvey = function(){
  $("#create_survey").click(function(){
    $(this).hide();
  });
};

var like = function(){
  $(".like").click(function(){
    var targetHeart = $(this).parent().find('.fa-heart')
    var heartsInTargetContainer = $(this).closest('.container').find('.fa-heart')

    if (targetHeart.hasClass('yellow')) {
      targetHeart.removeClass('yellow')
    } else {
      heartsInTargetContainer.removeClass('yellow')
      targetHeart.addClass('yellow')
    }

    var update = $(this)
    var url = update.attr("action")
    var method = update.attr("method")

    $.ajax({
      url: url,
      method: method
    }).done(function(res){
     update.parent().find(".vote_count").text(res["votes"])
     $(`#${res.old_answer_id}`).text(res.old_answer_vote_count)
   })
  });
};

var home_animation = function(){
  $( "#home-logo" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 2500, function() {
    $("#question-index").show("slow")
  });
}


var update = function(){
$(".update").on("click", ".col-lg-2", (function(){
  $(this).parent().siblings().children().attr("id","update_need")
  var need_id = $(this).attr("id")
  $("#update_need").attr('id',need_id)
})
)}
