$(window).bind("load", function() {
  $("#cover").fadeOut(200);
  $("header").fadeIn(200);
});


$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });
  
  //Show share button
  if ("share" in navigator) {
    $(".share_website").show();
  }
});


//TRIGGER WHEN BUTTON NOT CLICKED
$(document).mouseup(function(e) {
  var jelos_sec = $(".options_pane");
  var other_sec = $(".get_in_touch");
  // if the target of the click isn't the container nor a descendant of the container
  if (!jelos_sec.is(e.target) && jelos_sec.has(e.target).length === 0){
    jelos_sec.fadeOut(200);
    get_in_touch.fadeOut(100);
  }
});


function container_switch(){
  $("#front_page").fadeOut(200);
  $(".main_container").fadeIn(400);
}

$(".jounal_btn").click(function() {
  container_switch();
});

$(".close_about").click(function() {
  $(".main_container").hide(500);
  $(".header").show(200);
});

$(".get_in_touch_btn").click(function() {
  /*
  $(".journal").hide();
  $(".options_pane").show(100);
  $(".get_in_touch").show(300);
  */
});

$(".jounal_btn").click(function() {
  $(".get_in_touch").hide();
  $(".options_pane").show(100);
  $(".journal").show(300);
});

/*
$(".share_website").click(function() {
  navigator
    .share({
      title: "What Web Can Do Today?",
      text:        "",
      url: "https://odinaka.dev/"
    })
    .then(() => console.log("Successful share"))
    .catch(error => console.log("Error sharing:", error));
});
*/
