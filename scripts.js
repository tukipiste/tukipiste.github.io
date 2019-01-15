/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function topMenu() {
    document.getElementById("topDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var topDropdown = document.getElementById("topDropdown");
      if (topDropdown.classList.contains('show')) {
        topDropdown.classList.remove('show');
      }
    }
  }

/* button swap div content */  
$("#buttons a").click(function() {
    var id = $(this).attr("id");
    $("#pages div").css("display", "none");
    $("#pages div#" + id + "").css("display", "block");
});
$("#pages div:not(#1)").css("display", "none");