function ecrireLigne(texte) {
    document.write(texte + "<br>");
}

function ecrire(texte) {
    document.write(texte);
}

function addition (nb1, nb2){
    // return parseFloat(nb1) + parseInt(nb2);
    return Number(nb1) + Number(nb2);
    console.log("instruction apés le 'return' ne sera jamais exécutée");

}



// exo1: supérieur

// 1er solution

function superieur(a,b) {
    if(a > b){
        return true;
    }else {
        return false;
    }
   
}
 
// 2éme solution

function superieur(a,b) {
    return a > b ;
}

// exo2: plusGrand

// 1er solution

function plusGrand(x,y){
  if (x > y){
    return x;
  }else{
    return y; 
  } 
}

// 2eme solution

function plusGrand(x,y){
    if (x > y){
      return x;
    }
      return y; 
  }

//   3eme solution
function plusGrand(x,y){
    return x > y ? x : y ;
}

// exo3: dernierValeur(tableau)

function dernierValeur(tableau) {
    return tableau[ tableau.length - 1 ];
}

function indiceDernierValeur(tableau) {
    return tableau.length - 1;
}

// exo4 

function plusPetit(tableau) {
    let plusPetiteValeur = tableau[0];
    for(const valeur of tableau) {
        console.log("valeur =", valeur, "plusPetiteValeur=", plusPetiteValeur);
        if( valeur < plusPetiteValeur ) {
            plusPetiteValeur = valeur;
        }
    }
    return plusPetiteValeur;
}

// 

// function (n){
//     if (n === 1){
//         return 1;
//     }
// }





