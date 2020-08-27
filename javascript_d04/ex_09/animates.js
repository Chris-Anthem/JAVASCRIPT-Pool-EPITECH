// EXERCICE
// 09 (2PTS)
// ______
// _____
// File to hand in: ex_09/animates.js
// ex_09/index.html
// One shall levitate as you change the scenery
// This file must contain a function which assigns a “click” event on the element with class “platypus”.
// The action of the event must move the element with class “platypus” 150 pixels to the right, 200 pixels to the bottom
// and set the background color of the element to green.

$(function(){
    $('.platypus').on('click',function(){
    $('.platypus').css('background-color','green');
    $('.platypus').animate({marginLeft:'150px',marginTop:'200px'});
    })});