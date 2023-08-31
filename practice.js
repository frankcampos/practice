let  frank = { name: 'frank', age :38, daughter : true, car: 'tacoma'};
console.log(frank.age); // with the dot notation I can access to value of object's attribute 

delete  frank.car;

console.log(frank);
// another way to access to an objet property is with [] notation. 
// [] notation is more flexible than dot notation because it can use a property name or a variable with the property name within
console.log(frank['age']);
let edad = 'age'; // edad is age in spanish
console.log(frank[edad]); // using the variable edad

const colors =['yellow','black','blue'];
delete colors[2];
console.log(colors);

// object function to avoid mutation in our Object, or protect the values of our object
Object.freeze(frank);
delete  frank.age;


// rest parameter, allow to represent indefinite numbers of arguments as an array 
 function  sovereignCompanyEmployee(...employees){
    return employees
 }

 // all employees of 2023
 const employees2023 = sovereignCompanyEmployee('frank','jose','chiki','chuy');
 console.log(employees2023);