/**
 * Bonus 1 de Calculaprompt : gestion des erreurs
 */
alert("Welcome 🤗")
const Nombre1 = Number(window.prompt(" Nombre1:")) ;
const operator = window.prompt("Operateur");
const Nombre2 = Number(window.prompt(" Nombre2:")) ;

if((isNaN(Nombre1) || isNaN(Nombre2))){
    console.log("Vous avez saisi des mauvais nombres 😡 ; vérifiez et reessayez 👉👉 <br>");
}


    switch (operator) {
        case ("+"):
            console.log("result = ", Nombre1 + Nombre2)
            break;
        case ("-"):
            console.log("result = ", Nombre1 - Nombre2)
            break;
        case ("*"):
            console.log("result = ", Nombre1 * Nombre2)
            break;
        case ("/"):
            console.log("result = ", Nombre1 / Nombre2)
            break;
    
        default:
            console.log("L'operateur entré n'est pas pris en charge");
            break;
    }