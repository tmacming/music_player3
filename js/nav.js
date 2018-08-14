/**
 * Created by ÑÏº£Ã÷ on 2018/8/4.
 */
var menu = document.getElementById("menu");
var nav_img = document.getElementById("nav_img");
var x=true;
nav_img.onclick = function(){
    if(x){
      menu.style.setProperty('display','block');
      x = false;
    }else{
    menu.style.setProperty('display','none');
      x = true;
    }
};

