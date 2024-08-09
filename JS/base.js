// alert("js dans le fichier base.js");


console.log("affichage dans la console");
document.write("Bonjour Didier, bienvenue a POLES");

/*variable: est une espace mémoire qui va permettre de stocker une valeur pour la reutilisé si 
besoin.cette valeur peut changer, d'ou le nom 'variable'
// Déclaration
*/
let prenom;  //Déclaration d'une variable
var nombre;  // Déclaration avec le mot-clé 'var'

// let prenom;
var nombre;

// Affectation : donner ube valeur a aune variable
prenom = "Didier";
nombre = "ceci est du text parce que le nom de la variable ne change pas sa valeur";

//Déclaration - affection
let jour = "lundi"
 document.write("<h2> nous sommes ");
 document.write(jour);
 document.write("</h2>");

//  expression :  en programmation, une expression est tout ce qui a une valeur. donc 
// -une variable est une expression
//  - 5 est une expression
// - 2 * 3 est une expresssion (qui vaut 6)


// une expression a un type. les langages de programmation ne gére pas les textes et les valeurs
//  numérique de la meme facon

// types : les types simples (ou primitifs ou scalaires) sont les suivant:
// - string : chaine de caractéres (délimité par des "" guillements ou des '' apostrophes)
// number : numérique, soit un nombre entier, soit un nombre reel
// boolean: booléen. c'est un type qui ne peut avoir que 2 valeurs : true (=vrai) et false (=faux)

 prenom ="fred";   // type string
 nombre = 5.2;    //type number
 let vf = true   // type boolean

 /*POUR CONNAITRE le type d'une expression, on peut utiliser l'operation typeof*/
 console.log("prenom", prenom, typeof prenom);
 console.log("nombre", nombre, typeof nombre) ;
 console.log("vf", vf, typeof vf);

 let nombre2 = "5.2";

 document.write("la variable nombre2 est de type ");
 document.write(typeof nombre2);
 document.write("et vaut");
 document.write(nombre2);
 document.write("<br>");

//  operateurs arithemitiques
nombre = 2 + 3;
nombre = 2 - 3;
nombre = 2 * 3;
nombre = 2 / 3;

console.log(nombre);
nombre = nombre * 3;
console.log(nombre);

// operateur de concatenation : coller un string derriere un autre string
// opérateur : +

prenom = "Di" + "dier";
console.log(prenom);

document.write("Bonjour " + prenom + ", bienvenue au Pole S<br>");

console.log(nombre - prenom);

/* Si vous faites un calcul qui ne peut pas donner un resultat numérique (ex: 2 - "Bonjour"), le résultat est de type numérique,
    NaN = Not A Number
*/

nombre = 5;

nombre2 = nombre - "2";
console.log("nombre2", typeof nombre2, nombre2);

prenom = "100";

nombre2 = prenom * nombre;
console.log(nombre2);

nombre2 = prenom + nombre;
console.log(nombre2);

nombre2 = parseInt(prenom) + nombre;
console.log("nombre2 après parseInt", nombre2);

prenom = "100.5";
nombre2 = prenom + nombre;
console.log("1.nombre2", nombre2);

prenom = "100.5";
nombre2 = prenom + nombre;
console.log("2.nombre2", nombre2);

prenom = "100.5";
nombre2 = prenom - nombre;
console.log("3.nombre2", nombre2);

/*
NOMMAGE DES VARIABLES
    on peut utiliser n'importe quelle lettre, chiffre et les caractères _ et $
    le nom d'une variable ne peut pas commencer par un chiffre
    js est sensible à la casse (=case sensitive) : différence entre MAJUSCULES et minuscules

    CONVENTION (accord entre développeurs pour le nommage des variales, ce ne sont pas des règles, donc pas obligatoires)
        - casse camelCase : nombreDeVoiture
        - casse snake_case : nombre_de_voiture
        - casse kebab-case : nombre-de-voiture
        - casse PascalCase : NombreDeVoiture
*/

let a;
let A;


