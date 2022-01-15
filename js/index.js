//Iteration 1: Names and Input

const hacker1 = 'Anna';
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = 'AAma';
console.log(`The navigator's name is ${hacker2}.`);


//Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

//Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals

hacker1Upper = hacker1.toUpperCase();

let hacker1Space = '';
for (let i = 0; i < hacker1.length; i++) {
  hacker1Space += hacker1Upper[i]+' ';
}
console.log(hacker1Space);

//3.2 Print all the characters of the navigator's name, in reverse order.

let hacker2Reverse ='';
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2.toLocaleLowerCase()[i];
}
console.log(hacker2Reverse);

//3.3 Depending on the lexicographic order of the strings,...

if (hacker1.toLowerCase() === hacker2.toLowerCase()){
  console.log('What?! You both have the same name?');
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()){
    console.log('Yo, the navigator goes first definitely.');
  } else {
    console.log('The driver\'s name goes first.');
}