/**
 * Discount : Bonus 1
 */
let code = window.prompt("Entrez le code magique pour l'accès à la liste des béneficiires du bonus 🤗👉👉");

while (code < "12" || code > "12") {

    if (code < "12") {
        alert("No No 😡");
        code = window.prompt(" Ajouter votre nombre")
    }

    else{
        alert("No No 😡");
        code = window.prompt(" Diminuez votre nombre")
    }

}

let date = new Date();
console.log(date)

console.log("Super👏 Rendez-vous au plus vite que possible dans nos centres locaux si vous êtes selectionné");

const orders = [
    { id: 2340, customer: 101, product: 20, timestamp: "1591243565", price: "12.00" },
    { id: 2341, customer: 10, product: 12, timestamp: "1591603575", price: "32.50" },
    { id: 2342, customer: 123, product: 8, timestamp: "1592106089", price: "125.99" },
    { id: 2343, customer: 50, product: 21, timestamp: "1592824991", price: "39.95" },
    { id: 2344, customer: 45, product: 4, timestamp: "1593749455", price: "210.00" },
    { id: 2345, customer: 10, product: 45, timestamp: "1593955298", price: "25.45" },
    { id: 2347, customer: 27, product: 20, timestamp: "1595092774", price: "12.00" },
    { id: 2348, customer: 29, product: 14, timestamp: "1595383340", price: "89.10" },
    { id: 2346, customer: 27, product: 45, timestamp: "1594827411", price: "25.45" },
    { id: 2348, customer: 101, product: 20, timestamp: "1596032960", price: "12.00" },
    { id: 2349, customer: 145, product: 20, timestamp: "1596684542", price: "12.00" },
    { id: 2350, customer: 7, product: 68, timestamp: "1597220038", price: "32.85" },
    { id: 2351, customer: 90, product: 4, timestamp: "1598565765", price: "46.99" },
    { id: 2351, customer: 67, product: 8, timestamp: "1599135151", price: "125.99" },
]




// let initialeDate = "1593561600000 / 1000";
// let finalDate = "1596153600000 / 1000";


let initialeDate = Date.UTC(2020, 6, 1, 23, 59, 59, 999);
let finalDate = Date.parse(2020-7-31T23:59:59:999);

function mise_a_jour(table) {
    for (let i = 0; i < orders.length; i++) {
        const el = orders[i]
        if (el.timestamp >= initialeDate && el.timestamp <= finalDate) {
            console.log("Bonjours chers(es) clients(es) ", el.id, "Il vous ait accordez un Bonus de 20% ",
            "Vous aurez à payer ", (el.price - (el.price * "0.02")), " au lieu de ", el.price);
        }
    }
    return;
}

mise_a_jour(orders);





