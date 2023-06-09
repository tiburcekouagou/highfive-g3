/**
 * Créer ici le projet « Hello You ».
 */

const userYears = window.prompt("Qeul est votre année de naissance ? " );
const currentYears = window.prompt("Qeul est l'année en cours ? ");
const age = currentYears - userYears
const userName = window.prompt("Qeul est votre nom ? ");
const text1 = " Salut "
const text2 =" ! 😀"

document.write(text1 + userName + " tu as " + age + text2)



