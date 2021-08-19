//to-top 
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? toTop.classList.add("active") : toTop.classList.remove("active");//show the to-top btn if the user scrolls 100 in Y axis
});
   
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