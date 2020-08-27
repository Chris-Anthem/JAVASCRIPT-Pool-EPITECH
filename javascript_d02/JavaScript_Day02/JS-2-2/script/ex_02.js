// Exercise 2 (2 Pts)
// Make sure that with each click in the white box, a counter displays the number of clicks in this block.
// 
// <!DOCTYPE html>
{/* <html> */}
{/* <head> */}
  {/* <meta charset="UTF-8"> */}
  {/* <title>Exercise 2</title> */}
  {/* <link rel="stylesheet" href="style/style.css"> */}
{/* </head> */}
{/* <body> */}
  {/* <div class="wrapper"> */}
    {/* <div class="exercice"> */}
      {/* <header> */}
          {/* 2 (2 Pts) */}
      {/* </header> */}
      {/* <section> */}
        {/* <p> */}
          {/* Make sure that with each click in the white box, a counter displays the number of clicks in this block. */}
        {/* </p> */}
      {/* </section> */}
      {/* <footer> */}
        {/* <div> */}
        {/* </div> */}
      {/* </footer> */}
    {/* </div> */}
    {/* <nav> */}
      {/* <a href="ex_01.html" class="btn prev"> */}
        {/* &larr; Previous Exercise */}
      {/* </a> */}
      {/* <a href="ex_03.html" class="btn next"> */}
        {/* Next Exercise &rarr; */}
      {/* </a> */}
    {/* </nav> */}
  {/* </div> */}
  {/* <script src="ex_02.js"></script> */}
{/* </body> */}
{/* </html> */}


let footer = document.getElementsByTagName("footer")[0]; //Chemin vers le footer
let div = footer.getElementsByTagName("div")[0]; //Chemin vers la 1ère div du footer

window.onload = function text() // Ecrit dans du HTML au chargement de la page
{
	div.innerHTML = "How many times can you click in ten seconds ? Ready... 3... 2... 1... GO !!! ";
};


let button = div;
let click = 0;

button.onclick = function count() //compte chaque clic, puis les additionne au fur et à mesure
{
  click += 1;
  button.innerHTML = "you clicked  " + click + " time(s)";
};
