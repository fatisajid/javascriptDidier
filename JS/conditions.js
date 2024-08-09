let nb = prompt("Tapez un nombre, svp :");
if ( nb > 10 ) {
    document.write("nb est supérieur a 10<br>");
}
document.write("code suivant la structure IF <br>");


if(nb < 10){
    document.write("<p>nb est inferieur a 10 </p>");
    
}else {
    document.write("<p>donc nb est supérieura 10 ?</p> ");

}
document.write("code suivant la structure IF ELSE <br>");


if( nb < 10 ) {
    document.write("<p> vous n'avez pas la moyenne : recalé(e)</p>");

}else if (nb > 10 ){
    document.write("<p> vous avez plus que la moyenne : mention</p>");
    }else {
        document.write("<p> vous avez pile la moyenne : ratrappage</p>");
    }

    if ( 5 == "5"){
        document.write("le numérique est égal a la chaine");
    } else {
        document.write("le numérique est différent de la chaine");
    }
    document.write("<hr>");


    if(5 === "5") {
        document.write("le numérique est strictement égal a la chaine");
    }else{
        document.write("le numérique est strictement différent a la chaine");
    }
    document.write("<hr>");

    if (nb){
        document.write("nb est vari <br>");
    }else{
        document.write("nb est faux <br>"); 
    }




    let n = 5 - "sdfqsf";

    // isNaN est une fonction qui est vrai si n vaut NotANumber. donc isNaN est faux si n'est un nombre
    if (isNaN(n) ) {
        document.write("n n'est pas un nombre (NaN)");
    
    }else{
        document.write("n est un nombre");

    }

    // 
    let identifiant = prompt("tapez votre identifiant de connexion");
    let mdp = prompt("tapez votre mot de passe");

    // identifiant == admin et mdp == 12345
    if (identiant == "admin") {
        if( mdp == "12345"){
            document.write("bravo, vous etes connecté <br>");
        } else {
            document.write("le mot de passe ne correspond pas <br>");
        } 
    }else {
            document.write("cet idenntifiant n'existe pas <br>");
        }
   
        
        // 
        if( identifiant == "admin" && mdp == "12345") {
            document.write("bravo, vous etes connecté <br>");
        } else {
            document.write("identifiant et/ou mot de passe incorrect<br>");

        }

        // 
        let vacances = confirm("Etes-vous en vacances ?");
        let weekEnd = confirm("Est-ce le week-end ?");

        if( vacances || weekEnd) {
            document.write("il faut se reposer... ou faire du JS, c'est mieux 😁<br>");
        }else {
            document.write("Au travail !!! <br>");
        }

// switch

let jour = prompt("quel jour jour sommes-nous ?");
switch(jour) {
    case "lundi":
    document.write("c'est dur de se levez");
    break;

    case "mercredi":
        document.write("milieu de semaine, courage !");
        break;

    case "vendredi":
        document.write("dernière journée de travail");
        break;
        
        case "mardi":
            document.write("c'est encore plus dur de se lever");
            break;

    default:
        document.write("WEEK-END !!!!!");
}