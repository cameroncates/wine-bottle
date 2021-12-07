// toogle anim cards


let tog = document.querySelector('.tog-0');
let menunuevo = document.querySelector('.menunuevo-0');

let tog1 = document.querySelector('.tog1');
let menunuevo1 = document.querySelector('.menunuevo1'); 

let tog3 = document.querySelector('.tog-2');
let menunuevo3 = document.querySelector('.menunuevo-2');


tog.onclick=function(){

  menunuevo.classList.toggle('active')
  menunuevo1.classList.remove('active')
  menunuevo3.classList.remove('active')
  document.querySelector('.fa-plus').style.display="none";
  document.querySelector('.fa-times').style.display="block";
 

}




tog1.onclick=function(){

  menunuevo1.classList.toggle('active')
  menunuevo.classList.remove('active')
  menunuevo3.classList.remove('active')
}





tog3.onclick=function(){

  menunuevo3.classList.toggle('active')
  menunuevo.classList.remove('active')
  menunuevo1.classList.remove('active')
}
