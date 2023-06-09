/**
 * Créer ici le projet « Calculaprompt ».
 */

const Nombre1 = Number(window.prompt(" Nombre1:")) ;
const operator = window.prompt("Operateur");
const Nombre2 = Number(window.prompt(" Nombre2:")) ;
console.log("Calcul : " + Nombre1 , operator , Nombre2);


if (operator === "+") {
    console.log("Resultat : " + Nombre1 + Nombre2 );
}
if (operator === "-") {    
    console.log("Resultat : " + Nombre1 - Nombre2);
}
if (operator === "*") { 
    console.log("Resultat : " + Nombre1 * Nombre2);
}
if (operator === "/") {
    console.log("Resultat : " , Nombre1 / Nombre2);
}








