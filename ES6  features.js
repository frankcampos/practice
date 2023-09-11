const myCar ={ brand :'Ram',
model: {year:2012,
    color: 'blue',
    motor:"v8"}

};

// Destructuring Assignment 
// extract properties of the object into variables 


const {brand, model:{year,color,motor} }= myCar; // no need of '=' sing 
console.log(brand,year,color,motor);

const myShoppingList = ['water', 'shampoo', 'chicken', 'motoroil'];
//extracting values from an array into variable
const [water, shampoo, chicken] = myShoppingList;
console.log(water,shampoo,chicken);
//new change

