//index->倒數計時
window.onload=function(){
  var timer=null;
  var show=document.getElementById("showtime");
  function show_date_time(){   
    var target=new Date("2021/10/16");  
    var today=new Date(); 
    var timeold=(target.getTime()-today.getTime());   
    var sectimeold=timeold/1000   
    var secondsold=Math.floor(sectimeold);   
    var msPerDay=24*60*60*1000   
    var e_daysold=timeold/msPerDay   
    var daysold=Math.floor(e_daysold);   
    var e_hrsold=(e_daysold-daysold)*24;   
    var hrsold=Math.floor(e_hrsold);   
    var e_minsold=(e_hrsold-hrsold)*60;   
    var minsold=Math.floor((e_hrsold-hrsold)*60);   
    var seconds=Math.floor((e_minsold-minsold)*60);
    if(daysold<0){   
      
      clearInterval(timer);
    }   
    else{   
      if (daysold<10) {daysold="0"+daysold}   
      if (hrsold<10) {hrsold="0"+hrsold}   
      if (minsold<10) {minsold="0"+minsold}   
      if (seconds<10) {seconds="0"+seconds}     
      show.innerHTML="剩餘時間"+hrsold+"小時"+minsold+"分"+seconds+"秒";     
    }   
  }   
  timer=setInterval(show_date_time,1000);
}  
/*最新房源*/
let index = 0;   
window.addEventListener("load", function(){
    //---------------------------btnRight.onclick
    document.getElementById("btnRight").onclick = function(){
        index++;
        document.getElementById("btnLeft").disabled = false; //可點按
        if(index == 3){
            document.getElementById("btnRight").disabled = true;
        }
        let wrapper = document.getElementsByClassName("wrap1")[0];
        wrapper.style.left = -300 * index + "px";
    }
    //---------------------------btnLeft.onclick
    document.getElementById("btnLeft").onclick = function(){
        index--;
        document.getElementById("btnRight").disabled = false;//可點按
        if(index == 0){
            document.getElementById("btnLeft").disabled = true;
        }
        let wrapper = document.getElementsByClassName("wrap1")[0];
        wrapper.style.left = -300 * index + "px";
    }
})
/*result-->篩選條件*/
function condition() {
  document.getElementById("myDropdown").style.display="block";

}
function dele() {
  document.getElementById("myDropdown").style.display="none";

}
/*result-->sliderbar*/
var slider = document.getElementById("myRange");
var output = document.getElementById("price");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML =this.value;
}

 /*host-->login*/
 function login(){
 
  var user=document.getElementById("user").value;
  var password=document.getElementById("code").value;
  if(user=="test"&&password==123){
    window.alert("登入成功");
  }
  else if(user=="test"){
    window.alert("密碼錯誤");
  }
  else if(password="123")
   window.alert("帳號錯誤");

}
/*host->*/
function clikcdrop() {
  document.getElementById("dropdown").style.display="block";
  document.getElementById("btnb").style.display="block";
}

function closedrop(){
  document.getElementById("dropdown").style.display="none";
  document.getElementById("btnb").style.display="none";
}
/*travel->*/
function clikcdrop2() {
  document.getElementById("fff").style.display="block";

}
/*discount展開收*/
function c1() {
  document.getElementById("a1").style.display="block";
  // document.getElementById("a1").style.display="none";
}
function c2() {

  document.getElementById("a1").style.display="none";
}

/*room*/
