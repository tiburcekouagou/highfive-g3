/**
 * Bonus 2 de Calculaprompt : document.write
 */
alert("Welcome 🤗")
const Nombre1 = Number(window.prompt(" Nombre1:")) ;
const operator = window.prompt("Operateur");
const Nombre2 = Number(window.prompt(" Nombre2:")) ;

if((isNaN(Nombre1) || isNaN(Nombre2))){
    document.write("Vous avez saisi des mauvais nombres 😡 ; vérifiez et reessayez 👉👉 <br>");
}


    switch (operator) {
        case ("+"):
            document.write("result = ", Nombre1 + Nombre2)
            break;
        case ("-"):
            document.write("result = ", Nombre1 - Nombre2)
            break;
        case ("*"):
            document.write("result = ", Nombre1 * Nombre2)
            break;
        case ("/"):
            document.write("result = ", Nombre1 / Nombre2)
            break;
    
        default:
            document.write("L'operateur entré n'est pas pris en charge");
            break;
    }