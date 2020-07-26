import cipher from './cipher.js';

console.log(cipher);

//Funcionalidad de los botones

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7 = document.getElementById("boton7");
const boton8 = document.getElementById("boton8");
const pantalla1 = document.getElementById("desktop1");
const pantalla2 = document.getElementById("desktop2");
const pantalla3 = document.getElementById("desktop3");
const pantalla4 = document.getElementById("desktop4");
const pantalla5 = document.getElementById("desktop5");
const enter1= document.getElementById("enter1");
const enter2= document.getElementById("enter2");

enter1.addEventListener("click", cifrar);
function cifrar() {
   let mensaje =document.getElementById("txt1").value;
   let offset1 = parseInt(document.getElementById("offset1").value);
   cipher.encode(offset1, mensaje);

}

enter2.addEventListener("click", mostrar2);
function mostrar2(){
    let mensaje2 = document.getElementById("txt2").value;
    let offset2 = parseInt(document.getElementById("offset2").value);
    cipher.decode(offset2, mensaje2);

}

 boton1.addEventListener("click", showMenu);
 function showMenu() {
    pantalla1.style.display= "none";
    pantalla2.style.display= "block";
}
 boton2.addEventListener("click",next1);
 function next1() {
    pantalla2.style.display= "none";
    pantalla3.style.display= "block";
}
boton3.addEventListener("click",next2);
function next2() {
   pantalla2.style.display= "none";
   pantalla4.style.display= "block";
}
boton4.addEventListener("click", back);
function back() {
   pantalla2.style.display= "none";
   pantalla1.style.display= "block";
}
boton5.addEventListener("click",showHelp);
function showHelp() {
   pantalla2.style.display= "none";
   pantalla5.style.display= "block";
}
boton6.addEventListener("click",back1);
function back1() {
   pantalla3.style.display= "none";
   pantalla2.style.display= "block";
}
boton7.addEventListener("click",back2);
function back2() {
   pantalla4.style.display= "none";
   pantalla2.style.display= "block";
}
boton8.addEventListener("click",back3);
function back3() {
   pantalla5.style.display= "none";
   pantalla2.style.display= "block";
}

