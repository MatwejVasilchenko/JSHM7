let drink = prompt("what do you want from drinks?");
let price;

switch (drink) {
    case "Coffi":
        price = 7;
        break;
    case "Juice":
        price = 8;
        break;
    case "Tea":
        price = 4;
        break;
    default:
        price = 0;

}
console.log(`your price is ${price}`)