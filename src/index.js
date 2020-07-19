//import cipher from './cipher.js';

//console.log(cipher);

//Funcionalidad de botón inicio

function showMenu() {
    document.getElementById("desktop1").style.display= "none";
    document.getElementById("desktop2").style.display= "block";
}
function back() {
    document.getElementById("desktop1").style.display= "block";
    document.getElementById("desktop2").style.display= "none";
}
function next1() {
    document.getElementById("desktop2").style.display= "none";
    document.getElementById("desktop3").style.display= "block";
}
function back1() {
    document.getElementById("desktop2").style.display= "block";
    document.getElementById("desktop3").style.display= "none";
}
function next2() {
    document.getElementById("desktop2").style.display= "none";
    document.getElementById("desktop4").style.display= "block";
}
function back2() {
    document.getElementById("desktop2").style.display= "block";
    document.getElementById("desktop4").style.display= "none";
}
function showHelp() {
    document.getElementById("desktop2").style.display= "none";
    document.getElementById("desktop5").style.display= "block";
}
function back3() {
    document.getElementById("desktop2").style.display= "block";
    document.getElementById("desktop5").style.display= "none";
}

