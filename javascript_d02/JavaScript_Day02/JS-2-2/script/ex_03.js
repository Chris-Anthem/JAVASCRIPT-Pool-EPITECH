// Exercise 3 (2 Pts)
// Make a dialog box appear, prompting "What's your name ?" when one clicks on the white block.
// If no name is filled, the box must keep displaying until a name is filled.
// Once a name is filled, make a confirmation box appear, displaying "Are you sure that *name* is your name ?"
// If the name is confirmed, an alert box with the content "Hello *name* !" must be displayed. That content will also be displayed in the white box.
// 
// <!DOCTYPE html>
{/* <html> */}
{/* <head> */}
  {/* <meta charset="UTF-8"> */}
  {/* <title>Exercise 3</title> */}
  {/* <link rel="stylesheet" href="style/style.css"> */}
{/* </head> */}
{/* <body> */}
  {/* <div class="wrapper"> */}
    {/* <div class="exercice"> */}
      {/* <header> */}
          {/* 3 (2 Pts) */}
      {/* </header> */}
      {/* <section> */}
        {/* <p> */}
          {/* Make a dialog box appear, prompting "<em>What's your name ?</em>" when one clicks on the white block. */}
        {/* </p> */}
        {/* <p> */}
          {/* If no name is filled, the box must keep displaying until a name is filled. */}
        {/* </p> */}
        {/* <p> */}
          {/* Once a name is filled, make a confirmation box appear, displaying "<em>Are you sure that <strong>*name*</strong> is your name ?</em>" */}
        {/* </p> */}
        {/* <p> */}
          {/* If the name is confirmed, an alert box with the content "<em>Hello <strong>*name*</strong> !</em>" must be displayed. That content will also be displayed in the white box. */}
        {/* </p> */}
      {/* </section> */}
      {/* <footer> */}
        {/* <div></div> */}
      {/* </footer> */}
    {/* </div> */}
    {/* <nav> */}
      {/* <a href="ex_02.html" class="btn prev"> */}
        {/* &larr; Previous Exercise */}
      {/* </a> */}
      {/* <a href="ex_04.html" class="btn next"> */}
        {/* Next Exercise &rarr; */}
      {/* </a> */}
    {/* </nav> */}
  {/* </div> */}
  {/* <script src="ex_03.js"></script> */}
{/* </body> */}
{/* </html> */}


let footer = document.getElementsByTagName("footer")[0]; //Chemin vers le footer
let div = footer.getElementsByTagName("div")[0];  //Chemin vers la 1ère div du footer
let button = div;

button.onclick = function question() //Fonction visant à demander le nom du visiteur
{
    let name = "" // Création de la variable name
    while(name === "") // tant que Name est vide affiche le prompteur "What's your name ?"
    {
        name = window.prompt("What's your name ?");
    }
    if (name) //Si il y a quelque chose dans le prompteur : afficher un second prompteur de confirmation
    {
		let confirm = window.confirm("Are you sure that "+name+" is your name ?");
        if (confirm) //une fois confirmé, afficher "Hello, suivi du nom"
        {
			alert("Hello "+name+" !");
			div.innerHTML = "Hello "+name+" !";
		}
    }

};


