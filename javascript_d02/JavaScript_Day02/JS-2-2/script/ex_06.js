// Exercise 6 (2 Pts)
// Implement the JavaScript code correctly so that the following code :
// var mage = new Hero("amadeus", "mage", 10, 3);
// var warrior = new Hero("pontius", "warrior", 1, 8);
// mage.toString();
// warrior.toString();
// makes the following message appear in the white box :
// "I am Amadeus the mage, I have 10 intelligence points and 3 strength points"
// "I am Pontius the warrior, I have 1 intelligence point and 8 strength points"
// 
// <!DOCTYPE html>
{/* <html> */}
{/* <head> */}
  {/* <meta charset="UTF-8"> */}
  {/* <title>Exercise 6</title> */}
  {/* <link rel="stylesheet" href="style/style.css"> */}
{/* </head> */}
{/* <body> */}
  {/* <div class="wrapper"> */}
    {/* <div class="exercice"> */}
      {/* <header> */}
          {/* 6 (2 Pts) */}
      {/* </header> */}
      {/* <section> */}
        {/* <p> */}
          {/* Implement the JavaScript code correctly so that the following code : */}
        {/* </p> */}
        {/* <pre> */}
          {/* var mage = new Hero("amadeus", "mage", 10, 3); */}
          {/* var warrior = new Hero("pontius", "warrior", 1, 8); */}
          {/* mage.toString(); */}
          {/* warrior.toString(); */}
        {/* </pre> */}
        {/* <p> */}
          {/* makes the following message appear in the white box : */}
        {/* </p> */}
        {/* <br> */}
        {/* <p> */}
          {/* "I am Amadeus the mage, I have 10 intelligence points and 3 strength points" <br> */}
          {/* "I am Pontius the warrior, I have 1 intelligence point and 8 strength points" */}
        {/* </p> */}
      {/* </section> */}
      {/* <footer> */}
        {/* <div> */}
        {/* </div> */}
      {/* </footer> */}
    {/* </div> */}
    {/* <nav> */}
      {/* <a href="ex_05.html" class="btn prev"> */}
        {/* &larr; Previous Exercise */}
      {/* </a> */}
      {/* <a href="ex_07.html" class="btn next"> */}
        {/* Next Exercise &rarr; */}
      {/* </a> */}
    {/* </nav> */}
  {/* </div> */}
  {/* <script src="script/ex_06.js"></script> */}
{/* </body> */}
{/* </html> */}



let footer = document.getElementsByTagName("footer")[0]; //Chemin vers le footer
let div = footer.getElementsByTagName("div")[0];//Chemin vers la 1ère div du footer
let str = ""; //creation d'une 

 function Hero(name, type, intelligence, strength) //Création de la classe Héro
 {
	this.heroName = name; //HeroName
	this.heroType = type; //Type du Héro
	this.heroIntelligence = intelligence; //Niveau d'intelligence
	this.heroStrength = strength; // Niveau de force

	let ptIntelligence = "point"; //Point d'intelligence au singulier
	let ptStrength = "point"; //Point de force au singulier

	let Nameis = ucFirst(this.heroName);  //Création de la variable servant à la fonction visant à écrire la première lettre en majuscule

    if (this.heroIntelligence > 1) // Points d'intelligence au pluriel 
    {
		ptIntell = "points";
	}

    if (this.heroStrength > 1) //Points de force au pluriel
    {
		ptStrength = "points";
	}

    //Création de la phrase dite par le héro
	str = str + "I am "+Nameis+" the "+this.heroType+", I have "+this.heroIntelligence+" intelligence "+ptIntelligence+" and "+this.heroStrength+" strength "+ptStrength+"<br />";
    //Inscription de cette phrase dans le HTML
	div.innerHTML = str;
}

//Création du nouveau héro avec ses paramètres (points d'intelligence et points de force)
let mage = new Hero("amadeus", "mage", 10, 3);
let warrior = new Hero("pontius", "warrior", 1, 8);

//Fonction servant à afficher le tout au chargement de la page
window.onload = function() 
{	
	mage.toString();
	warrior.toString();
}

//Création de la function pour écrire la majuscule pour la première lettre du nom du héro, renvoie ça dans la variable Nameis
function ucFirst(string) 
{
    return string.charAt().toUpperCase() + string.slice(1);
}