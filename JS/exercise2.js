// exo1: supérieur

let nb1 = 15, nb2 = 7;

if( superieur(nb1, nb2) ){
    ecrireLigne(nb1 + " est supérieur a " + nb2);

}
nb1 = 9;
nb2 =  10;

if(superieur(nb1, nb2)) {
    ecrireLigne(nb1 + " est superieur à " + nb2);
}else {
    ecrireLigne(nb1 + " est inférieur ou egal " + nb2);
}

nb1 = 52;
nb2 = 324;

if(superieur(nb1, nb2)) {
    ecrireLigne(nb1 + " est superieur à " + nb2);
}else {
    ecrireLigne(nb1 + " est inférieur ou egal " + nb2);
}

nb1 = 4;
nb2 = 52;

if(superieur(nb1, nb2)) {
    ecrireLigne(nb1 + " est superieur à " + nb2);
}else {
    ecrireLigne(nb1 + " est inférieur ou egal " + nb2);
}

// exo2: plusGrand
ecrire("<hr>");

nb1 = 15; nb2 = 7;
ecrireLigne("la plus grande valeur entre " + nb1 + " et " +  nb2 + " est " + plusGrand(nb1, nb2));

nb1 = 52 ; nb2 = 324;
ecrireLigne("la plus grande valeur entre " + nb1 + " et " +  nb2 + " est " + plusGrand(nb1, nb2));

nb1 = 4 ; nb2 = 52;
ecrireLigne("la plus grande valeur entre " + nb1 + " et " +  nb2 + " est " + plusGrand(nb1, nb2));

nb1 = 9 ; nb2 = 10;
ecrireLigne("la plus grande valeur entre " + nb1 + " et " +  nb2 + " est " + plusGrand(nb1, nb2));


 

 // exo3: derniereValeur(tableau)
 ecrire("<hr>");

 let tableau = [ 4, "32", 65.2, "fin"]
 ecrireLigne("La derniére valeur du tableau est <strong>" + dernierValeur(tableau) + "</strong>");

 let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
 ecrireLigne("La derniére valeur du tableau est <strong>" + dernierValeur(jours) + "</strong>");


// exo4
 ecrire("<hr>");
 let nombres = [ 15, 7, 52, 324, 4, -52, 9, 10 ];
 ecrireLigne("la plus petite valeur du tableau ["+ nombres + "]  est " + plusPetit(nombres));

 let notes = [ 12, 17, 4, 15, 20, 5];
 ecrireLigne("la plus petite valeur du tableau ["+ notes + "]   est "  + plusPetit(notes));

 let jour = [ 12, 17, 4, 15, 20, 5];
 ecrireLigne("la plus petite valeur du tableau ["+ jour + "]   est "  + plusPetit(jour));

