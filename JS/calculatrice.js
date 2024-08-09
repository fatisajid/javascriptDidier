let formulaire = document.querySelector("form");
let inputNombre1 = document.getElementsByName("nombre1")[0];
let inputNombre2 = document.querySelector("[name='nombre2']");
let selectOperateur = document.querySelector("[name ='operateur']");
let inputResultat = document.querySelector("[name = 'resultat']");

formulaire.addEventListener("submit", function (eventSubmit) {
    /* Le paramétr de l'écouteur d'événement (nommé ici eventSubmit) est de type Event.
    cet objet représente l'événement Submit, avec toutes les informations liées à cet événement.
    La méthode 'preventDefault' permet d'annuler l'action par défaut qui est déclechée
    par cet événement
    */
    eventSubmit.preventDefault(); //ici, l'action par défaut est la soumission du formulire
    let nb1 = Number(inputNombre1.value);
    /*La propriété 'value' d'une balise 'input' contient la valeur tapée dans l'input par l'utilisateur */
    let nb2 = Number(inputNombre2.value);
    let op = selectOperateur.value;
    console.log(nb1, typeof nb1, nb2);
    let calcul;
    console.log(op);
    switch (op) {
        case "+":
            calcul += nb2;
            break;

        case "-":
            calcul -= nb2;
            break;

        case "*":
            calcul *= nb2;
            break;

        case "/":
            calcul /= nb2;
            break;

        default:
            calcul = NaN;
    }

    inputResultat.value = calcul;
});