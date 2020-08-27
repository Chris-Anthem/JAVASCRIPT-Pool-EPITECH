// Exercice 04
// 1pt
// File to hand in:
// ex_04/selector.js
// ex_04/index.html
// Half and half
// This file must contain a function which selects all elements of hyperlink type that do not have the target “_blank”
// attribute, and makes them semitransparent with 50% opacity.


$(function(){
    $("a[target!='_blank']").fadeTo(9,0.5);
});