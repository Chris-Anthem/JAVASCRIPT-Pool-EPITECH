// EXERCICE  03 (2PTS)
// _____
// File to hand in: ex_03/index.html
// ex_03/style.css
// ex_03/ex_03.js
// You will now implement a search in the elements created. As of now, you only need to handle a search
// by types. You will implement a search by words in the following exercise. If I search for “email”, only the
// elements being “email” must stay displayed. The others must not be deleted and must be shown again
// when the search is over (Once again you’re free for the implementation).


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
