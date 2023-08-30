let  frank = { name: 'frank', age :38, daughter : true, car: 'tacoma'};
console.log(frank.age); // with the dot notation I can acess to value of object's atribute 

delete  frank.car;

console.log(frank);
// anotehr way to acces to an objet property is wiht [] notation. 
// [] notation is more flexible than dot notation bacasues it can use a propery name or a varibale with the property name within
console.log(frank['age']);
let edad = 'age'; // edad is age in spanish
console.log(frank[edad]); // using the variable edad

const colors =['yellow','black','blue'];
delete colors[2];
console.log(colors);

// object fuction to avoid mutation in our Object, or protect the values of our object
Object.freeze(frank);
delete  frank.age;
