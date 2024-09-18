$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });
  
  /*
  //Show share button
  if ("share" in navigator) {
    $(".share_website").show();
  }
  */
});


//TRIGGER WHEN BUTTON NOT CLICKED
$(document).mouseup(function(e) {
  /*
  var jelos_sec = $(".options_pane");
  var other_sec = $(".get_in_touch");
  // if the target of the click isn't the container nor a descendant of the container
  if (!jelos_sec.is(e.target) && jelos_sec.has(e.target).length === 0){
    jelos_sec.fadeOut(200);
    get_in_touch.fadeOut(100);
  }
  */
});


function container_switch(){
  $("#front_page").fadeOut(200);
  $(".main_container").fadeIn(400);
}


$(".about_btn").click(function() {
  $(".header_below").slideToggle(200);
  $(".projects_board").hide(100);
  $(".about_board").slideToggle(150);
  setTimeout(function(){
    $(".about_board")[0].scrollIntoView({
      behavior: "smooth", // or "auto" or "instant"
      block: "start" // or "end"
    });
  }, 160);
  
});

$(".projects_btn").click(function() {
  $(".header_below").slideToggle(200);
  $(".about_board").hide(100);
  $(".projects_board").slideToggle(150);
  setTimeout(function(){
    $(".projects_board")[0].scrollIntoView({
      behavior: "smooth", // or "auto" or "instant"
      block: "start" // or "end"
    });
  }, 160);
  
});




//FETCH
/*
fetch(url, option);
//optional
let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(data)
}

fetch("https://odicodes.github.io/")
.then((result) => { return result.text(); })
.then((content) => {
  alert(content);
  //document.getElementById("ID").innerHTML = content;
});
*/



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



function openTab(evt, tabName) {

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  tabData = document.getElementById(tabName);
  tabData.style.display = "block";
  tabData.scrollIntoView({behavior: "smooth"});
  evt.currentTarget.className += " active";
} 

document.getElementById("defaultOpen").click();
