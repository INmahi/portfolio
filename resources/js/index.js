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
    });
    //mixitup
    var mixer = mixitup('.services_container');
});

//preloader
var getPopUp = document.getElementById('popup');
var getDoneBtn = document.getElementById('done_btn');
var getWebContent = document.getElementById('web_content');
var getPloader = document.getElementById('loading');
function runPreloader(){
    getPloader.style.display="none";
    document.body.style.background="#c7c7c7bd";
    // setTimeout(()=>{
    //     getPopUp.style.display="block";
    //     if(getPopUp.style.display="block"){
    //        getWebContent.classList.add("allwrap");
    //     }   
    // },6000);
}
getWebContent.addEventListener("click",()=>{
    getPopUp.style.display="none";
    getWebContent.classList.remove("allwrap");
});

//////Mobile menu//////
    //OPENIG MENU
    var getmenuoverlay = document.getElementById('getMenuOverlay');
    var menu_bars= document.getElementById('mobileBars');
    menu_bars.addEventListener("click",function(){
        getmenuoverlay.style.display="flex";
        getmenuoverlay.style.width="100%";
    });
    // CLOSING MENU
        //when user clicks any item
    // var mobileMenuItem =document.querySelectorAll(".mobileMenulist");
    //     mobileMenuItem.addEventListener("click",function(){
    //         getmenuoverlay.style.display="none";
    // });
        //when user clicks the close btn
    var getMenuCloseBtn = document.getElementById('closeMenuBtn');
function closeNave(){
    getmenuoverlay.style.display="none";
}



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
    getWebContent.classList.remove("allwrap");
    // getPloader.style.display="none";
});
//// autotype




