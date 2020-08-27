// Exercice 07
// 2pts
// File to hand in:
// ex_07/event.js
// ex_07/index.html
// Make them all pale and vanish as you pronounce the words
// This file must contain a function which assigns an “on” event to all paragraphs of the page.
// Three actions must be assigned to this event.
// When the mouse enters a paragraph, the background color of the paragraph must become light gray.
// When the mouse leaves the paragraph, the background color must revert to white.
// And finally, when you click on the paragraph, its text must disappear.


$(function(){
    $("p").on("click",function(){
    $("p").hide();
});


$("p").on("mouseenter",function(){
    $("p").css('background-color','lightgrey');
})

$("p").on("mouseleave",function(){
    $("p").css('background-color','white');
})

});