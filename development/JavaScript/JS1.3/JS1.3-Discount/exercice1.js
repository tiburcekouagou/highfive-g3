// Votre code ici

/*
Discount
*/

/*
Décalarition des variables concernant l'intervalle des dates
*/
let firstDate = String(Date.UTC(2020, 06, 01));

let lastDate = String(Date.UTC(2020, 06, 31));

/*
Création de la fonction permettant de convertir et de calcul le price en tenant compte du pourcentage de réduction
*/
function caculOfReductionPrice(reductionOfPrice) {

    for (let i = 0; i < reductionOfPrice.length; i++) {

        reductionOfPrice[i].timestamp = reductionOfPrice[i].timestamp * 1000;

        if (reductionOfPrice[i].timestamp >= firstDate && reductionOfPrice[i].timestamp <= lastDate) {

            reductionOfPrice[i].price = reductionOfPrice[i].price - (reductionOfPrice[i].price * 0.2);

            document.write("<strong> La liste de la réduction du price avec un pourcentage de 20% en juillet 2020: " + reductionOfPrice[i].price + "</strong><br><br>");
        }
    }
}

/*
Le tableau avec clé orders 
*/

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
    { id: 2351, customer: 67, product: 8, timestamp: "1599135151", price: "125.99" }
];

/*
Appel de la fonction qui permis de calculer la réduction sur le prix
*/

caculOfReductionPrice(orders);

// fin
