// Exercice  5 (2 Pts)
// Make the buttons below work. The + and - button allows respectively to increase or decrease the page's font size.
// The dropdown menu allows to change the background color of the page.
// 
// <!DOCTYPE html>
{/* <html> */}
{/* <head> */}
  {/* <meta charset="UTF-8"> */}
  {/* <title>Exercice 5</title> */}
  {/* <link rel="stylesheet" href="style/style.css"> */}
{/* </head> */}
{/* <body> */}
  {/* <div class="wrapper"> */}
    {/* <div class="exercice"> */}
      {/* <header> */}
          {/* 5 (2 Pts) */}
      {/* </header> */}
      {/* <section> */}
        {/* <p> */}
          {/* Make the buttons below work. The + and - button allows respectively to increase or decrease the page's font size. */}
        {/* </p> */}
        {/* <p> */}
          {/* The dropdown menu allows to change the background color of the page. */}
        {/* </p> */}
      {/* </section> */}
      {/* <footer> */}
        {/* <div> */}
          {/* <button>+</button> */}
          {/* <button>-</button> */}
          {/* <select> */}
            {/* <option value="">Background Color</option> */}
            {/* <option value="#bdc3c7">Defaut</option> */}
            {/* <option value="#1abc9c">Turquoise</option> */}
            {/* <option value="#f1c40f">Sun Flower</option> */}
            {/* <option value="#d35400">Pumpkin</option> */}
            {/* <option value="#e74c3c">Alizarin</option> */}
            {/* <option value="#40d47e">Emerald</option> */}
            {/* <option value="#3498db">Peter River</option> */}
          {/* </select> */}
        {/* </div> */}
      {/* </footer> */}
    {/* </div> */}
    {/* <nav> */}
      {/* <a href="ex_04.html" class="btn prev"> */}
        {/* &larr; Previous Exercise */}
      {/* </a> */}
      {/* <a href="ex_06.html" class="btn next"> */}
        {/* Next Exercise &rarr; */}
      {/* </a> */}
    {/* </nav> */}
  {/* </div> */}
  {/* <script src="ex_05.js"></script> */}
{/* </body> */}
{/* </html> */}



let footer = document.getElementsByTagName("footer")[0]; //Chemin vers le footer
let div = footer.getElementsByTagName("div")[0]; //Chemin vers la 1ère div du footer

let plus = footer.getElementsByTagName("button")[0]; //Chemin vers le 1er bouton du footer
let moins = footer.getElementsByTagName("button")[1]; //Chemin vers le 2nd bouton du footer

let select = footer.getElementsByTagName("select")[0]; //Chemin vers le selecteur du footer

let body = document.getElementsByTagName("body")[0]; //Chemin du body

let color = select.selectedIndex; //relie le bouton de sélection à la fonction color
let style = window.getComputedStyle(document.body, null).getPropertyValue('font-size'); 
let change = parseInt(style); 

plus.onclick = function up () //fonction d'incrémentation pour augmenter la taille de la police du body
{
	change++;
	document.body.style.fontSize = change + 'px';
};

moins.onclick = function down() //fonction de décrémentation pour diminuer la taille de la police du body
{
   change--;
   document.body.style.fontSize = change + 'px';
}

select.onchange = function color() //fonction color reliée au bouton de sélection
{
   let color = select.selectedIndex;
   document.body.style.background = select.options[color].value;
}
