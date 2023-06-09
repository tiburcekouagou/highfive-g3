/**
 * Discount
 */


// let msg = window.prompt("Dites « Bonjour » :");

// while (msg !== "Bonjour") {
//   msg = window.prompt("Dites « Bonjour » :");
// }

// document.write(msg);



// for (let i = 0; i < 5; ++i){
//     document.write(i.toString())
// }



// const userAge = window.prompt("Quel est votre âge ?");

// let msg;
// if (Number(userAge) >= 18) {
//   msg = "Tu es majeur ! Bienvenue."
// } else {
//   msg = null;
// }

// if (msg !== null) {
//   document.write(msg);
// }


// const x = "5";
// const y = Number(x);


// function add(x, y) {
//     const su = x * y;
//     return su;
//   }
//   const result = add(4, 7);
//   console.log(result);

//   document.write(result);

const orders = [
    {id: 2340, customer: 101, product: 20, timestamp: "1591243565", price: "12.00"},
    {id: 2341, customer: 10, product: 12, timestamp: "1591603575", price: "32.50"},
    {id: 2342, customer: 123, product: 8, timestamp: "1592106089", price: "125.99"},
    {id: 2343, customer: 50, product: 21, timestamp: "1592824991", price: "39.95"},
    {id: 2344, customer: 45, product: 4, timestamp: "1593749455", price: "210.00"},
    {id: 2345, customer: 10, product: 45, timestamp: "1593955298", price: "25.45"},
    {id: 2347, customer: 27, product: 20, timestamp: "1595092774", price: "12.00"},
    {id: 2348, customer: 29, product: 14, timestamp: "1595383340", price: "89.10"},
    {id: 2346, customer: 27, product: 45, timestamp: "1594827411", price: "25.45"},
    {id: 2348, customer: 101, product: 20, timestamp: "1596032960", price: "12.00"},
    {id: 2349, customer: 145, product: 20, timestamp: "1596684542", price: "12.00"},
    {id: 2350, customer: 7, product: 68, timestamp: "1597220038", price: "32.85"},
    {id: 2351, customer: 90, product: 4, timestamp: "1598565765", price: "46.99"},
    {id: 2351, customer: 67, product: 8, timestamp: "1599135151", price: "125.99"}
  ];
  // let initialeDate =  Date("2020/06/01");
  // let finDate =  Date("2020/06/31");
  // console.log(initialeDate);
let date = new Date (2020,06,01);
let finDate = new Date ("2020/06/01");
date = date.getTime();
finDate = finDate.getTime();
console.log(date, finDate);

for (let i = 0; i < array.length; i++) {
  let bonus = " orders[i].price * 0.2 "
  console.log(bonus)
}
https://github.com/tiburcekouagou/highfive-g3.git