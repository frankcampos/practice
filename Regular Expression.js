let mytext = 'my name is frank walberto Parada Campos';
let myName= /frank/; //literal match
let findMyname = myName.test(mytext);
console.log(findMyname);


// OR operator, alternation operator
// match one or more patterns of characters wanted

let moreWords= /frank| walberto| Campos/; // add more word to regular expression variable MoreWords.
let completedName = moreWords.test(mytext);
console.log(completedName);

//Ignore case while matching
let greenting = 'HeLLo';
let greetingRegex =/hello/i;// even if a work has a diferent case, It will match 
let  checkCompat = greetingRegex.test(greenting);
console.log(checkCompat);

// method match()
let myStr = 'love is powerful';
let myRegex = /love/i;
let myMatch = myStr.match(myRegex);
console.log(myMatch);

