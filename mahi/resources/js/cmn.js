//to-top 
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? toTop.classList.add("active") : toTop.classList.remove("active");//show the to-top btn if the user scrolls 100 in Y axis
});
   //menubar and mobile menu functionalities
var getmenuoverlay = document.getElementById("getMenuOverlay"),
menu_bars = document.getElementById("mobileBars");
menu_bars.addEventListener("click", function () {
(getmenuoverlay.style.display = "flex"), (getmenuoverlay.style.width = "100%");
});
var getMenuCloseBtn = document.getElementById("closeMenuBtn");
//closing manue while user click any item
function closeNave() {
getmenuoverlay.style.display = "none";
}


$(document).ready(function () {
  $(".track-2nd-section").waypoint(function (e) {
      "down" == e ? $("#get_nav").addClass("sticky") : $("#get_nav").removeClass("sticky");//show or hide sticky menu
              // When the user scrolls the page, execute this function 
              window.onscroll = function() {myFunction()};
      
              function myFunction() {
                document.getElementById('myPContain').style.visibility="visible"
                var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var scrolled = (winScroll / height) * 100;//get the percentage
                document.getElementById("myBar").style.width = scrolled + "%"; //add % sign with the value

              }
  });
})


    //DETECT STATUS and show SNACKBAR
window.addEventListener('load', function() {
    var status = document.getElementById("status");  
    function updateOnlineStatus(event) {
      var condition = navigator.onLine ? "online" : "offline";  //find status
    }
    window.addEventListener('online', ()=>{
      var x = document.getElementById("snackbar");
      condition="Back Online";
      status.innerHTML = condition;
      x.classList.add("show","online");
      x.style.backgroundColor="#1da350";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);//show and hide snackbar after 3 sec
    });
    window.addEventListener('offline', ()=>{
      var x = document.getElementById("snackbar");
      condition="Currently Offline"
      status.innerHTML = condition;
      x.classList.add("show","offline");
      x.style.backgroundColor="#d9534f";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);//show and hide snackbar after 3 sec
    });;
  });