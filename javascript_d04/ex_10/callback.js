// EXERCICE
// _
// _____
// 10 (2PTS)
// _____
// File to hand in: ex_10/callback.js
// ex_10/index.html
// Amber alert
// This file must contain a function which selects the elements of class “test” in the page, and makes them disappear.
// In addition, an alert must be sent after the disappearance of the element with the message “The paragraph is now
// hidden.”"

$(function(){
    $('.test').hide();
    alert('The paragraph is now hidden.')
});