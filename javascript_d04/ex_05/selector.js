// Exercice 05
// 2pts
// File to hand in:
// ex_05/selector.js
// ex_05/index.html
// He was the first of his kind and then he was not
// This file must contain a function which selects the first element of the first unordered list and makes it disappear.

$(function(){
    $("li:first-child()").fadeTo(9,0.5);
});