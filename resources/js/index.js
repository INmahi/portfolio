//preloader
var getPopUp = document.getElementById('popup');
var getDoneBtn = document.getElementById('done_btn');
var getWebContent = document.getElementById('web_content');
var getPloader = document.getElementById('loading');
function runPreloader(){
    getPloader.style.display="none";
    document.body.style.background="#c7c7c7bd";
    setTimeout(()=>{
        getPopUp.style.display="block";
        if(getPopUp.style.display="block"){
           getWebContent.classList.add("allwrap");
        }   
    },6000);
}
getWebContent.addEventListener("click",()=>{
    getPopUp.style.display="none";
    getWebContent.classList.remove("allwrap")
})
// jquery
$(document).ready(function(){
    //sticky navbar
    $('.track-2nd-section').waypoint(function(direction){
        if(direction=="down"){
            $('#get_nav').addClass('sticky');
        }
        else{
            $('#get_nav').removeClass('sticky');
        }
    })
    //mixitup
    var mixer = mixitup('.services_container');
});
///backtotop
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? toTop.classList.add("active") : toTop.classList.remove("active");
});
////popup close
var getPopUp = document.getElementById('popup');
var getDoneBtn = document.getElementById('done_btn');
getDoneBtn.addEventListener("click",()=>{
    getPopUp.style.display="none";
    getWebContent.classList.remove("allwrap")
    // getPloader.style.display="none";
})
//// autotype




