// EXERCICE
// 11 (2PTS)
// ______
// _____
// File to hand in: ex_11/append.js
// ex_11/index.html
// Fill the void
// You will now add an input with the id “listItem” in your page. And a button. You must then add a function which
// will be called every time a click happens on this button with the input you just created as parameter.
// This function must add a div after this element, which will contain the value of the element passed as parameter.

$(document).ready(function()
{
  $("button").click(function()
  {
    var blabla = $("#listItem").val();
    anonymous(blabla);
  });
  function anonymous(blabla)
  {
  $("BODY").append("<div>"+blabla+"</div>");
}
});