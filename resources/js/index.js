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
       
    },5000);
}

//////popup

var getPopUp = document.getElementById('popup');
var getDoneBtn = document.getElementById('done_btn');
getDoneBtn.addEventListener("click",()=>{
    getPopUp.style.display="none";
    getWebContent.classList.remove("allwrap")
    // getPloader.style.display="none";
})
 //automatic show popup
//  window.onload=function(){
//     setTimeout(() => {
//         getPopUp.style.display="block";

//         //set time : 2 seconds
//     }, 2000);

// }


