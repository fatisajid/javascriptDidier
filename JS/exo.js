// Déclarez une variable nommée 'test' et affectez la valeur "ceci est un string"
let test;
test = "ceci un string";

// Concatenez le texte suivant ", mais cette variable peut contenir un numérique"
// dans la variable test

test += ", mais cette variable peut contenir un numérique";


// déclarez une variable "calcul" et affectez lui la valeur 
// de la somme de 4 + 5

let calcul;
calcul = 4 + 5;

// ou
// let calcul = 4+5;



/* 
	- déclarez la variable "test1", affectez la valeur de 
    	la variable calcul + la variable test
 	- affichez, dans la console, le type de la variable test1   
*/

let test1 = calcul + test;
console.log(typeof test1);

/* 4. déclarez les variables suivantes :
		nb1 = 5;
        nb2 = "10";
		Affectez le résultat de l'addition de nb1 et nb2 dans la variable calcul
*/
let nb1 = 5;
let nb2 = "10";
calcul = nb1 + Number(nb2);
console.log(calcul);

/* 5.
	a. déclarez un tableau nommé nbEntiers avec les valeurs 4, 12, 14
    b. affichez la 2ième valeur du tableau
    c. faites la somme des valeurs du tableau (en utilisant les indices)
    d. faites la soustraction des valeurs du tableau (en utilisant une boucle for)
    e. remplacez la 1ère valeur du tableau par 7
    f. soustraire la valeur de la variable 'calcul' à la 2ième valeur du tableau (donc après la 2ième valeur du tableau doit être modifiée)
    g. ajoutez la valeur 5 au tableau
    h. affichez la taille du tableau */


    // a
    let nbEntiers = [4, 12, 14];

    // b
    console.log(nbEntiers[1]);

    // c

   let resultatSomme = nbEntiers[0] + nbEntiers[1] + nbEntiers[2];
   console.log(resultatSomme);

   // d
   let resultat = nbEntiers[0];
   for(let i = 1; i < nbEntiers.length; i++) {
    resultat -= nbEntiers[i]; 
   }
   console.log(resultat);

   /* explication

	 resultat = 4
i=1  resultat = 4 - 12   	=> resultat = -8
i=2  resultat = -8 - 14		=> resutlat = -22

*/


nbEntiers = [ 7, 10, -5, 123, -10, 13.5 ];
// même exercice avec des multiplications
resultat = 1;
for(let i = 0; i < nbEntiers.length; i++){
    resultat *= nbEntiers[i];
}
console.log(resultat);

// e

nbEntiers = [4, 12, 14];
nbEntiers[0] = 7;
// nbEntiers.splice(0, 1, 7); 0 c 1er indice, 1 ca veu dire 1 element, 7 la valeur que je veux remplacer la 1ere valeur
console.log(nbEntiers);

// f
nbEntiers[1] -= calcul;

// g
nbEntiers.push(5);
// nbEntiers[ nbEntiers ] = 5;

// h
console.log( nbEntiers.length );

// 6. affichez tous les nombres de 5 a 12










   

