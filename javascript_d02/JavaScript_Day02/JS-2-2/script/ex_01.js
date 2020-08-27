// Exercice 1 
// -- 2pts
// Implement an anonymous function which replaces the content of the white box by "Hello World !" and returns nothing.

// <!DOCTYPE html>
{/* <html> */}
{/* <head> */}
  {/* <meta charset="UTF-8"> */}
  {/* <title>Exercise 1</title> */}
  {/* <link rel="stylesheet" href="style/style.css"> */}
{/* </head> */}
{/* <body> */}
  {/* <div class="wrapper"> */}
    {/* <div class="exercice"> */}
      {/* <header> */}
          {/* 1 (2 Pts) */}
      {/* </header> */}
      {/* <section> */}
        {/* <p> */}
          {/* Implement an anonymous function which replaces the content of the white box by "Hello World !" and returns nothing. */}
        {/* </p> */}
      {/* </section> */}
      {/* <footer> */}
        {/* <div> */}
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}
        {/* </div> */}
      {/* </footer> */}
    {/* </div> */}
    {/* <nav> */}
      {/* <a href="ex_02.html" class="btn next"> */}
        {/* Next Exercise &rarr; */}
      {/* </a> */}
    {/* </nav> */}
  {/* </div> */}
  {/* <script src="ex_01.js"></script> */}
{/* </body> */}
{/* </html> */}


window.onload = function() //attend que le navigateur ait chargé la page HTML avant de lancer le script
{
	let footer = document.getElementsByTagName("footer")[0]; //Chemin vers le footer
	let div = footer.getElementsByTagName("div")[0]; //Chemin vers la div du footer
	div.innerHTML = "Hello World !"; // Ecrit dans du HTML
};
