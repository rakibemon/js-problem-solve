// JavaScript program to convert Seer into Mon

function seerToMon(seer) {
    // Check input parameter's type number or not
    if (typeof (seer) != 'number') {
        return "Error !!! Please enter a Number type parameter";
    }
    // Check input mapameter is positive or negative
    else if (seer < 0) {
        return "Error !!! Please Enter a Positive Parameter";
    }
    // Conversion seer into Mon
    else {
        const convertedIntoMon = seer / 40;
        const toFixed = Number(convertedIntoMon.toFixed(2));
        return toFixed;
    }
}
// Output check

/* const Mon = seerToMon(40);
console.log(Mon); */

// JavaScript program to calculated totalSales of a Store

function totalSales(tShirtQuantity, pantQuantity, shoeQuantity) {

    // Check input parameter's type number or not
    let typeOftShirt = typeof (tShirtQuantity);
    let typeOfPant = typeof (pantQuantity);
    let typeOftShoe = typeof (shoeQuantity);

    if ((typeOftShirt && typeOfPant && typeOftShoe) == 'number') {

        // Check input mapameter is positive or negative
        if (tShirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
            return "Error !!! Please Enter Positive Parameter for all";
        }
        // Unit price of every product
        const tShirtUnitPrice = 100;
        const pantUnitPrice = 200;
        const shoeUnitPrice = 500;
        // Calculate total price for every single product
        let shirtTotalPrice = tShirtQuantity * tShirtUnitPrice;
        let pantTotalPrice = pantQuantity * pantUnitPrice;
        let shoeTotalPrice = shoeQuantity * shoeUnitPrice;

        // Calculate total price of all product
        let totalPrice = (shirtTotalPrice + pantTotalPrice + shoeTotalPrice);
        return totalPrice;

    }


    else {
        return "Error !!! Please enter Number type parameter for all";
    }
}
// Output check

/* const price = totalSales(4, 3, 2);
console.log(price); */

// JavaScript program to calculated Delivery cost of shipping

function deliveryCost(tShirtQuantityForShip) {
    // Check input parameter's type number or not
    if (typeof (tShirtQuantityForShip) != 'number') {
        return "Error !!! Please enter a Number type parameter";
    }
    // Check input mapameter is positive or negative
    else if (tShirtQuantityForShip <= 0) {
        return "Error !!! Please Enter a Positive Parameter grater that 0";
    }
    // Unit price of shipping cost for tShirt
    else {
        const perUnitShippingCostForFirst100 = 100;
        const perUnitShippingCostForSecond100 = 80;
        const perUnitShippingCostForRest = 50;
        // If the Quantity is less than 100
        if (tShirtQuantityForShip <= 100) {
            let shippingCost = tShirtQuantityForShip * perUnitShippingCostForFirst100;
            return shippingCost;
        }
        // If the Quantity is grater than 100 but less than 200
        else if (tShirtQuantityForShip <= 200) {
            let shippingCostForFirst100 = 100 * perUnitShippingCostForFirst100;
            let restQuantity = tShirtQuantityForShip - 100;
            let shippingCostForRest = restQuantity * perUnitShippingCostForSecond100;
            // Total Shipping Cost
            let shippingCost = shippingCostForFirst100 + shippingCostForRest;
            return shippingCost;

        }
        // If the Quantity is grater than 200
        else {
            let shippingCostForFirst100 = 100 * perUnitShippingCostForFirst100;
            let shippingCostForSecond100 = 100 * perUnitShippingCostForSecond100;
            let restQuantity = tShirtQuantityForShip - 200;
            let shippingCostForRest = restQuantity * perUnitShippingCostForRest;
            // Total Shipping Cost
            let shippingCost = shippingCostForFirst100 + shippingCostForSecond100 + shippingCostForRest;
            return shippingCost;

        }
    }
}
// Output check
/* const cost = deliveryCost(101);
console.log(cost); */


// JavaScript program to find Array a element[element will be string type] with lenght of 5

function perfectFriend(friendNames) {

    // Check the friend names is string or not
    for (const friendName of friendNames) {
        if (typeof (friendName) != "string") {
            return "Error !!! typeOf Friend Name should be String";
        }
    }
    // check which length of friend name is equals to 5
    for (const friendName of friendNames) {
        if (friendName.length == 5) {
            return friendName;
        }
    }
    // If don't have any friend with 5 length string
    return "Sorry Dude !! You don't have any perfect friend";
}
// Output check
/* const names = ["Emon", "Raj", "Avro", "Rakib", "Nsar", "6"];
const displayName = perfectFriend(names);
console.log(displayName); */