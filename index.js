//for loop//

const cars = ['Honda', 'Toyota', 'Ford', 'Subaru'];
cars.shift();
cars.unshift('Hyundai');
cars.pop();
cars.pop();
cars.push('Mercedes','Ford', 'Audi');
console.log(cars)




//while loop//


const phrase = "There once was a donkey named Eeyore."
let count = 0;

for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] === "e") {
    count++
  }
}

console.log(count)
 

//const number = [1,3, 5, 2, 4];

//for(let i = 0; i < number.length; i++) {
//console.log(number[i]);

const inputArray = 'hello';
    let vowelsarray = [a, e, i, o, u];
    let vowel count = 0;

for (let i = 0; i < word.length; i++) {
    if (word.includes([]))function vowelsAndConsonants(s) {
        const vowels = 'aeiou';
        var consonants = [];
        for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
        console.log(s[i])
        } else {
        consonants += s[i] + '\n';
        }
        }