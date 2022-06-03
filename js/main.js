function toggle() {
  $(this).toggleClass("menuToggle");
  $("#list").toggle();
  // 这个搞了很久，解决了在chrome里点list选项跳不了其他页面的问题。
  // 道理很简单：就是ul显示了，但是你在hover的时候却消失了（chrome），所以还要设置hover的同时要显示block才行。
  $("ul").hover(function() {
    if (window.innerWidth <= 600) {
      $(this).css("display", "block");
    }
  });
}

function cancle_toggle() {
  if ($(".menuTrigger").hasClass("menuToggle")) {
    // only when menu is already toggled, then blur out
    $(".menuTrigger").toggleClass("menuToggle");
    $("#list").toggle();
  }
}

$(document).ready(function () {
  // Navicon Menu Toggle Class
  $(".menuTrigger").on("click", toggle);
  // if click the navicon, then resotre navicon and show menu opwindow
  $("#navicon").blur(cancle_toggle);
  // if blur out, then hide menu and restore navicon.
  $(".options").on("click", cancle_toggle);
  // if click any nav options, then hide and restore.

  // 这个不是jQuery的code，是纯纯的JS
  window.addEventListener("resize", function () {
    if (window.innerWidth > 600) {
      var listID = document.getElementById("list");
      listID.style.display = "";
    }
  });
});

// // To display navigation list back when resizing back window width with 600px or more
// $(window).resize(function () {
//   if ($(window).width() > 600) {   // when window resizes back to be larger than 600px
// 	if ($("#list").css("style") == "undefined" || $("#list").css("style") == null) {  // if list is hiding
// 		/* $("#list").removeAttr("display", ""); // 注意这个不行，why? */
// 		$("#list").css("display", "");  // 可以
// 	}
//   }
// });
