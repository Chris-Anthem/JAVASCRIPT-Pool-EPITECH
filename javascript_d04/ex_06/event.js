// Exercice 06
// 1pt
// File to hand in:
// ex_06/event.js
// ex_06/index.html
// Make them aware of your power
// This file must contain a function which assigns a “click” event on the first “button” element of the page.
// The action of the event must make all paragraphs of the page disappear.


$(function(){
    $("button").on("click",function(){
    $("p").hide();
    });
});