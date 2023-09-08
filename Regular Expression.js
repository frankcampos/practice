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

// global  search flag 'g'
let twinkleStar = "Twinkle, twinkle, twinklE little star"; // a string with the same words
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex); 
console.log(result);

// wildcard period match some part of the pattern, it's very helpful if you don't know who it is a word spelled
let partlybaseSimilar = 'frank';
let partlybaseSimilar2 ='francisco';
let partlybaseSimilar3 = 'franchesco';
let partlybaseSimilarRegex = /fran./;
let resultbaseSimilar = partlybaseSimilarRegex.test(partlybaseSimilar2); // test method belong to Regular Expression
console.log(resultbaseSimilar);

//character classes match single pattern with multiple possibilities 
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let resultChacarterClaseses = quoteSample.match(vowelRegex); // Change this line
console.log(resultChacarterClaseses);

// the hyped '-' allows to range a group of characters
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // the 'g' is the global flag, it's including all characters of the alphabet, and the fla 'i' included all cases.
let result2 = quoteSample2.match(alphabetRegex); 
console.log(result2);
//checking
