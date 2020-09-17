
$("#chatbox").click(function(){
  $(".chat-popup").css("display","block");
  $("#icon").css("display","none");
  
})

$("#close-popup").click(function(){
  $(".chat-popup").css("display","none");
  $("#icon").css("display","block");
  $(".item1").css("display","none");
  $(".item2").css("display","none");
  $(".questions").css("display","none");
  
})

// $('.quest-div')
//     .each(function(index){
//         var _this = this;
//         setTimeout( function(){ $(_this).fadeIn('slow'); }, 1000*index );
//     });


$(".open-button").click(function(){
    $('.item1')
    .each(function(index){
        var _this = this;
        setTimeout( function(){ $(_this).fadeIn('slow'); }, 500*index );
    })

    $(".item2")
  .each(function(index){
      var _this = this;
      setTimeout( function(){ $(_this).fadeIn('slow'); }, 3500*index );
    })

    $(".questions")
    .each(function(index){
        var _this = this;
        setTimeout( function(){ $(_this).fadeIn('slow'); }, 900*index );
      })

  })


  


// if($("item1:last-child"))

$(document).ready(function(){
  $('.item1:last-child').each(function(){

    if ( $(this).css('display') == 'block')
    {
      alert("hey");
    }  
  });
})
  
  


