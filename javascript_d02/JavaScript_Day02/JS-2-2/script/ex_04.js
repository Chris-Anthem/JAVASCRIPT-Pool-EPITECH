// Exercise 4 (2 Pts)
// Display in the white box the last 42 characters entered from the keyboard on this page.
// 
// <!DOCTYPE html>
{/* <html> */}
{/* <head> */}
  {/* <meta charset="UTF-8"> */}
  {/* <title>Exercise 4</title> */}
  {/* <link rel="stylesheet" href="style/style.css"> */}
{/* </head> */}
{/* <body> */}
  {/* <div class="wrapper"> */}
    {/* <div class="exercice"> */}
      {/* <header> */}
          {/* 4 (2 Pts) */}
      {/* </header> */}
      {/* <section> */}
        {/* <p> */}
          {/* Display in the white box the last 42 characters entered from the keyboard on this page. */}
        {/* </p> */}
{/*  */}
      {/* </section> */}
      {/* <footer> */}
        {/* <div> */}
        {/* </div> */}
      {/* </footer> */}
    {/* </div> */}
    {/* <nav> */}
      {/* <a href="ex_03.html" class="btn prev"> */}
        {/* &larr; Previous Exercise */}
      {/* </a> */}
      {/* <a href="ex_05.html" class="btn next"> */}
        {/* Next Exercise &rarr; */}
      {/* </a> */}
    {/* </nav> */}
  {/* </div> */}
  {/* <script src="ex_04.js"></script> */}
{/* </body> */}
{/* </html> */}


window.onload = function() //attend que le navigateur ait chargé la page HTML avant de lancer le script
{
    let footer = document.getElementsByTagName("footer")[0]; //Chemin vers le footer
    let div = footer.getElementsByTagName("div")[0]; //Chemin vers la 1ère div du footer
	let str = ""; //Création d'une variable str vide
    document.addEventListener('keypress', function(e) //EventListener attend un événement "keypress"
    {
		str = str + (e.key); //ajoute chaque événement aux précédents
		div.innerHTML = str.slice(-42); //affiche ces événements dans une string en ne gardant que les 42 derniers
	});
};

