/**
 * Calculawrite
 */


alert("Welcome 🤗")
let Nombre1 = Number(window.prompt(" Nombre1:"));
let operator = window.prompt("Operateur");
let Nombre2 = Number(window.prompt(" Nombre2:"));

while (isNaN(Nombre1) || isNaN(Nombre2)) {
    alert(" Vous avez saisi des mauvais nombres 😡 Réessayez encore l'operation 👉👉 ")
    Nombre1 = window.prompt(" Nombre1:");
    operator = window.prompt("Operateur");
    Nombre2 = window.prompt(" Nombre2:");

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


// document.write("Calcul : " + Nombre1 , operator , Nombre2 );

// document.write(Nombre1, operator, Nombre2, "=" )

// if (operator === "+") {
//     document.write("<br> Resultat : " + Nombre1 + Nombre2 );
// }
// if (operator === "-") {    
//     document.write(" <br> Resultat : " + Nombre1 - Nombre2);
// }
// if (operator === "*") { 
//     document.write(" <br> Resultat : " + Nombre1 * Nombre2);
// }
// if (operator === "/") {
//     document.write(" <br> Resultat : " , Nombre1 / Nombre2);
// }

