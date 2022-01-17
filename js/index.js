//Iteration 1: Names and Input

const hacker1 = 'Leni';
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = 'Karla';
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

//Bonus 1

const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula ac sapien sed viverra. Morbi hendrerit fringilla eros sed cursus. Cras eu commodo mi. Aliquam posuere tincidunt nibh id ornare. Morbi tincidunt dolor sit amet urna commodo, aliquet vestibulum est rutrum. Nam ut tristique justo. Cras ut consequat dolor. Curabitur et ligula orci. Morbi in lacinia nunc. Vestibulum interdum bibendum orci eu viverra. Duis faucibus sollicitudin luctus. Cras eleifend convallis libero, ut feugiat mi vehicula ut. Integer pellentesque semper neque. Morbi vel lobortis nibh, vitae feugiat turpis.

Morbi tortor enim, suscipit dictum risus quis, dignissim bibendum risus. Maecenas auctor facilisis felis, venenatis condimentum elit imperdiet id. Vivamus enim lacus, commodo quis fringilla sed, hendrerit id justo. Vestibulum eget tincidunt ipsum, in tincidunt elit. Suspendisse in felis accumsan, rhoncus ipsum eget, interdum erat. Curabitur vel est pretium, facilisis orci id, efficitur ligula. Ut scelerisque est sit amet leo accumsan, at mollis tellus varius. Donec accumsan rutrum nulla ut hendrerit. Sed id turpis lorem. Nunc rutrum dapibus venenatis. Curabitur tincidunt nulla quis tellus fringilla, ut hendrerit justo porta. Quisque condimentum commodo vulputate. Nulla sed mattis massa. Praesent vel nisl imperdiet, tincidunt sapien ut, tempor ligula. Praesent bibendum lorem ipsum, a scelerisque lacus scelerisque et. Sed pellentesque arcu ante, at tristique turpis pharetra a.

Pellentesque dictum nibh sed nisi vehicula blandit. Vestibulum elementum quam quis velit laoreet, quis pulvinar tellus sagittis. Vestibulum auctor fringilla blandit. Integer porta, velit nec porttitor pellentesque, nisl turpis viverra nibh, quis ullamcorper ipsum metus ut odio. Sed vitae lobortis mauris. Cras in risus eu lectus auctor hendrerit. Curabitur facilisis ornare quam ac commodo. Etiam pharetra maximus risus nec mattis. Sed imperdiet sem a odio aliquet facilisis. Cras a ante vitae mi pharetra scelerisque. Aliquam sed nulla magna. Praesent ut sapien ac diam elementum vestibulum. Morbi fermentum imperdiet ligula, non pretium tellus condimentum vitae. Fusce posuere porttitor semper. Morbi id velit ut sapien sodales porttitor.`

//function only works in case author uses spaces/breaks correctly: one space or break after each punctuation mark...

function countingWords(text) {
  let wordCounter = 1;
  for (let i = 0; i < text.length; i++) {
    if ((text[i] === ' ') || (text[i] === "\n")) {
      if ((text[i-1] !== ' ') && (text[i-1] !== "\n") && (i !== text.length-1)) { //to avoid counting in case of multiple spaces/breaks and spaces/breaks as last character
        wordCounter++;
      }
    }
  }
  return wordCounter;
}

console.log(countingWords(loremIpsumText));

//counts "et" also when it is part of a word

function countingEt(text) {
    let etCounter = 0;
    const testText = text.toLowerCase();
    for (let i = 0; i < text.length-1; i++){
      if (testText[i] !== "e") {
        continue;
      } else if ((testText[i] === "e") && (testText[i+1] === "t")) {
          etCounter++;
          }
    }
    return etCounter;
  }
  
console.log(countingEt(loremIpsumText));

//Bonus 2

//returns true also when phrase is < 3 characters - "mathematical" definition of a palindrome 

phraseToCheck = "Was it a car or a cat I saw?"

function isPalindrome(phrase) {
  
  let testPhrase = phrase.toLowerCase() //to lower case 
    .replace(/[.,/#!$%^&*;:{}=-_`~()]/g, '') //removes all punctuation with a regex
    .replace(/\s/g, ''); //and removes all spaces with a regex
  
  let phraseBeginning = '';
  let phraseEndReverse = '';
  
  for (let i = 0; i < testPhrase.length/2; i++) {
    phraseBeginning += testPhrase[i];
    phraseEndReverse += testPhrase[testPhrase.length - 1 - i];
  } 
  
  if (phraseBeginning === phraseEndReverse) {
    return "This is a palindrome!";
  } else {
    return "This isn't a palindrome."
  }
}

console.log(isPalindrome(phraseToCheck));

