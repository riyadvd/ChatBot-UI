// $("#chatbox").click(function(){
//   $(".chat-popup").css("display","block");
//   $(".open-button").css("display", "none");
// })

$("#chatbox").click(function(){
  $(".chat-popup").toggle();
  $("#icon").toggle();
})

$("#close-popup").click(function(){
  $(".chat-popup").toggle();
  $("#icon").toggle();
})

