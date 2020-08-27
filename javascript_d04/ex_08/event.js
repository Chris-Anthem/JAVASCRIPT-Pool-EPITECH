// EXERCICE
// 08 (1PT)
// ______
// _____
// File to hand in: ex_08/event.js
// ex_08/index.html
// As you wave your hand it’s here, then it’s not, then again it’s here
// This file must contain a function which assigns a “click” event on the “button” element of the page.
// The action of the event must make the element with id “menu” appear or disappear.

$(function(){
    $("button").on("click",function(){
    $("#menu").toggle();
});


});