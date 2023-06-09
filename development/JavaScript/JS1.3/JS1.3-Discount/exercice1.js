// Votre code ici
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
  
  // La date du 01/07/2020 en milliseconde
  const debJui = Date.parse("july 1, 2020");
  
  // La date du 31/07/2020 en milliseconde
  const finJui = Date.parse("july 31, 2020");
  
  // Récupérons les dates du tableau
  for (let x = 0; x < orders.length; x++) {
  
    let timestamp = orders[x].timestamp;
    let price = orders[x].price;
  
    // Conversion en milliseconde
    let millestamp = timestamp * 1000;
  
    // Conversion en date littéraire
    let millestamp1 = new Date(millestamp);
  
    // Condition de réduction
    if (Number(millestamp) >= debJui && Number(millestamp) <= finJui) {
  
      console.log("\n\nLa date littéraire est : " + millestamp1 + "   " + "\n\nle prix est : " + price);
      
      console.log("\nLa date en milliseconde est : " + Number(timestamp) + " " + "\n\nle prix est : " + orders[x].price);
      
      
      console.log("\nCalcul à effectuer : " + orders[x].price + " - " + orders[x].price + " * " + 20 + " / " + 100);
  
      
      console.log("\nRésultat attendu : " + (orders[x].price - orders[x].price * 20 / 100).toFixed(2));
      
      console.log("\nLe client après réduction devra payé : " + (orders[x].price - orders[x].price * 20 / 100).toFixed(2) );
  
      // document.getElementById("list").innerHTML = (millestamp1 + "   " + price);
    }
  
  }
  