"use strict";


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randomize(){
    var textarea = document.getElementById("rand").value;
    var arrarea = [];
    arrarea = textarea.split(" ");
    console.log(arrarea);
    arrarea = shuffle(arrarea);
    console.log(arrarea);
    var displayarea = document.getElementById("display");
    var temp = ""; 
    for(var i = 0; i < arrarea.length; i++){
        temp += arrarea[i] + " ";
    }
     
    displayarea.innerHTML = temp;
}

function addEventListeners(){
    var elrand = document.getElementById("rand");
    var elrandb = document.getElementById("randb");
    if(document.addEventListener){
        elrandb.addEventListener("click", randomize, false);
    } else{
        elrandb.attachEvent("onload", randomize);
    }
}

if(window.addEventListener){
    window.addEventListener("load", addEventListeners, false);
} else{
    window.attachEvent("onload", addEventListeners);
}