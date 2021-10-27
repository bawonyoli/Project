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
