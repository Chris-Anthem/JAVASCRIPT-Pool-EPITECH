// EXERCICE
// 01 (1PT)
// ______
// _____
// File to hand in: ex_01/index.html
// ex_01/ex_01.js
// Create an input allowing someone to enter a text. Then add it to a bulleted list displayed under the input.

$(document).ready(function()
{
  $("button").click(function()
  {
    var blabla = $("#listItem").val();
    anonymous(blabla);
  });
  function anonymous(blabla)
  {
  $("ul").append("<li>"+blabla+"</ul>");
}
});