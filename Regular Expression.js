let mytext = 'my name is frank walberto Parada Campos';
let name = /frank/; //literal match
let findMyname = name.test(mytext);
console.log(findMyname);


// OR operator, alternation operator
// match one or more patterns of characters wanted

let moreWords= /frank| walberto| Campos/;
let completedName = moreWords.test(mytext);
console.log(completedName);

//new key ssh