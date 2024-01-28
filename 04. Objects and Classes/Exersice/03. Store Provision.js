function storeAvailability(products, order) {

let productsAvailability = {};
let productsAndOrder = [products, order];

    for (let i = 0; i < productsAndOrder.length; i++) {

    for (let index = 1; index < productsAndOrder[i].length; index += 2) {
        
          let productName = productsAndOrder[i][index - 1];
          let quantity = Number(productsAndOrder[i][index]);

        if (productsAvailability.hasOwnProperty(productName)) {
            productsAvailability[productName] += Number(quantity);
        }
        else{
            productsAvailability[productName] = Number(quantity);
        }
    }
}

for (const key in productsAvailability) {
    console.log(`${key} -> ${productsAvailability[key]}`);
}
}

storeAvailability(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
                  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);