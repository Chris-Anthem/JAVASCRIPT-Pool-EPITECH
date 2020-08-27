// EXERCICE 02 (3PTS)
// _____
// File to hand in: ex_02/index.html
// ex_02/style.css
// ex_02/ex_02.js
// Define a few CSS classes:
// • A “note” class, putting the border of the element in blue
// • An “email” class, putting the border of the element in green
// • A “todo” class, putting the border of the element in red
// It should now be possible to select one of these 3 types (note, email, todo) when validating the input. You’re
// free on the way you implement this, and you can add more style to your css. However if an input of type
// “email” is created, the element displayed with the content must possess the class CSS “email”. It will work
// the same way for the 2 other types.
// Note: You may need to add some different checks to validate the inputs depending on the type.

$(function()
{

  $("button").click(function()
  {
    var valeur = $("input").val();
    anonymous(valeur);
  });
  function anonymous(valeur)
  {
    if($(".selectclass").val() === 'note')
    {
      $("ul").append("<li class='note'>"+valeur+"</li>");
    }

    else if($(".selectclass").val() === 'mail')
    {
      $("input").attr('type')=='email';
      $("ul").append("<li class='email'>"+valeur+"</li>");
    }

    else if($(".selectclass").val() === 'todo')
    {
      $("ul").append("<li class='todo'>"+valeur+"</li>");
    }
    else
    {
      $("ul").append("<li>"+valeur+"</li>");
    }
  }
  
});
