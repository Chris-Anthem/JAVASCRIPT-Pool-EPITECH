$(document).ready(function ()
{
    // une variable par cellule, à chaque cellule son ID HTML
    var A = $("#a"); var B = $("#b"); var C = $("#c"); var D = $("#d");
    var E = $("#e"); var F = $("#f"); var G = $("#g"); var H = $("#h");
    var I = $("#i"); var J = $("#j"); var K = $("#k"); var L = $("#l");
    var M = $("#m"); var N = $("#n"); var O = $("#o"); var P = $("#p");

    //Création d'un tableau 
    var tab = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P];
    var i=0; 

    $(document).keyup(function(e)
    {
        console.log(e);
        $("body").find("div").eq(2).addClass("blue");

        //conditions déclenchées à chaque pression sur la touche "gauche" ou "4"
        if (e.keyCode == 37 || e.keyCode == 100)
        {
        // alert("Gauche ou 4");
            let gauche = 0;
            while (gauche < 4) {
                if (tab[i] == tab[i+1] ||tab[i+1]== tab[i+2] ||  tab[i+2] ==  tab[i+3] || (tab[i+1] == null && tab[i] ==  tab[i+2]) || ( tab[i+2] == null && tab[i+1] ==  tab[i+3] ) || (tab[i+1] == null ==  tab[i+2] && tab[i] ==  tab[i+3] ) || (( tab[i+2] !=  tab[i+3]  && tab[i] == tab[i+1]) && ( tab[i+2] ==  tab[i+3]  && tab[i] != tab[i+1])) || (( tab[i+2] !=  tab[i+3]  && tab[i] == tab[i+1]) || ( tab[i+2] ==  tab[i+3]  && tab[i]  != tab[i+1])))
                    //additions à faire 

                gauche++; // va jusqu'à la fin de la ligne
                i = i + 5; // passe à la ligne suivante
            }
            
        }
        //conditions déclenchées à chaque pression sur la touche "droite" ou "6"
        if (e.keyCode == 39 || e.keyCode == 102) {
        //  alert("6 ou droite");

            let droite = 0;
            while (droite < 4) {
                if (tab[i] == tab[i+1] ||tab[i+1]== tab[i+2] ||  tab[i+2] ==  tab[i+3] || (tab[i+1] == null && tab[i] ==  tab[i+2]) || ( tab[i+2] == null && tab[i+1] ==  tab[i+3] ) || (tab[i+1] == null ==  tab[i+2] && tab[i] ==  tab[i+3] ) || (( tab[i+2] !=  tab[i+3]  && tab[i] == tab[i+1]) && ( tab[i+2] ==  tab[i+3]  && tab[i] != tab[i+1])) || (( tab[i+2] !=  tab[i+3]  && tab[i] == tab[i+1]) || ( tab[i+2] ==  tab[i+3]  && tab[i]  != tab[i+1])))
                    //additions à faire 

                droite++; // va jusqu'à la fin de la ligne
                i = i + 5; // passe à la ligne suivante

            }
        }
        // conditions déclenchées à chaque pression sur la touche "haut" ou "8"
        if (e.keyCode == 38 || e.keyCode == 104) {
        // alert("8 ou haut");

            let haut = 0;
            while (haut < 4) {
                if (tab[i] == tab[i+5] ||tab[i+5]== tab[i+9] ||  tab[i+9] ==  tab[i+13] || (tab[i+5] == null && tab[i] ==  tab[i+9]) || ( tab[i+9] == null && tab[i+5] ==  tab[i+13] ) || (tab[i+5] == null ==  tab[i+9] && tab[i] ==  tab[i+13] ) || (( tab[i+9] !=  tab[i+13]  && tab[i] == tab[i+5]) && ( tab[i+9] ==  tab[i+13]  && tab[i] != tab[i+5])) || (( tab[i+9] !=  tab[i+13]  && tab[i] == tab[i+5]) || ( tab[i+9] ==  tab[i+13]  && tab[i]  != tab[i+5])))
                     //additions à faire 

                haut++; // vajusqu'à la fin de la colonne
                i = i + 5; // passe à la colonne suivante
        }
        //conditions déclenchées à chaque pression sur la touche "bas" ou "2"
        if (e.keyCode == 40 || e.keyCode == 98){
        // alert("2 ou bas");

        let bas = 0;
        while (bas < 4) {
            if (tab[i] == tab[i+5] ||tab[i+5]== tab[i+9] ||  tab[i+9] ==  tab[i+13] || (tab[i+5] == null && tab[i] ==  tab[i+9]) || ( tab[i+9] == null && tab[i+5] ==  tab[i+13] ) || (tab[i+5] == null ==  tab[i+9] && tab[i] ==  tab[i+13] ) || (( tab[i+9] !=  tab[i+13]  && tab[i] == tab[i+5]) && ( tab[i+9] ==  tab[i+13]  && tab[i] != tab[i+5])) || (( tab[i+9] !=  tab[i+13]  && tab[i] == tab[i+5]) || ( tab[i+9] ==  tab[i+13]  && tab[i]  != tab[i+5])))
                 //additions à faire 

            bas++; // va jusqu'à la fin de la colonne
            i = i + 5; // passe à la colonne suivante
    }

        }
    };

function generate_case()        
{
   // $("#a").text(value);
    var value =  2* (Math.floor((Math.random() * 2) + 1));
    var elem =    (Math.floor((Math.random() * 16 ) +1 )); 
    if  (elem == 1) { $("#a").text(value); } if  (elem == 2) { $("#b").text(value); }
    if  (elem == 3) { $("#c").text(value); } if  (elem == 4) { $("#d").text(value); }
    if  (elem == 5) { $("#e").text(value); } if  (elem == 6) { $("#f").text(value); }
    if  (elem == 7) { $("#g").text(value); } if  (elem == 8) { $("#h").text(value); }
    if  (elem == 9) { $("#i").text(value); } if  (elem == 10){ $("#j").text(value); }
    if  (elem == 11){ $("#k").text(value); } if  (elem == 12){ $("#l").text(value); }
    if  (elem == 13){ $("#m").text(value); } if  (elem == 14){ $("#n").text(value); }
    if  (elem == 15){ $("#o").text(value); } if  (elem == 16){ $("#p").text(value); }
} 

generate_case()
generate_case()
 // génération aléatoire de deux cases pleines (2 ou 4)

});