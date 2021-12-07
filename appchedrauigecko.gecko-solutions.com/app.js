// toogle anim cards


let tog = document.querySelector('.tog');
let menunuevo = document.querySelector('.menunuevo');



tog.onclick=function(){

  menunuevo.classList.toggle('active')
  document.querySelector('.fa-plus').style.display="none";
  document.querySelector('.fa-times').style.display="block";
 

}


let tog1 = document.querySelector('.tog1');
let menunuevo1 = document.querySelector('.menunuevo1');



tog1.onclick=function(){

  menunuevo1.classList.toggle('active')
}

