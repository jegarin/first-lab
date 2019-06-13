let hacker1 = 'Rodrigo';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Julia';
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length === hacker2.length) {
  console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);
} else if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
}

// Print all the characters of the driver's name, separated by a space and in capitals 
// console.log(hacker2.split('').join(' ').toUpperCase());
let driver = "";

for (let i = 0; i < hacker1.length; i+= 1){
  driver += hacker1[i].toUpperCase() + ` `;
} 

// Print all the characters of the navigator's name, in reverse order
console.log(driver);

let navigator = "";

for (let x = hacker2.length - 1; x >= 0; x-= 1){
  navigator += hacker2[x];
}

console.log(navigator);

// Depending on the lexicographic order of the strings, print:

if (hacker1.localeCompare(hacker2) === 0) {
  console.log(`What?! You both got the same name?`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  console.log(`The driver's name goes first`);
}

// Ask the user for a new string and check if it's a Palindrome.
let string = prompt(`Escreva uma frase`).toLowerCase();
let cleanString = '';

for (let w = 0; w < string.length; w += 1) {
  if (string[w] === ' ' || string[w] === ',') {
    continue;
  } else{
      cleanString += string[w];
  }
} 

console.log(cleanString);


let stringReverse = '';
for (let y = cleanString.length - 1; y >= 0; y-= 1){
  stringReverse += cleanString[y];
}

if(cleanString === stringReverse) {
  console.log('Oh my God! It is a Palindrome!');
}

// Go to lorem ipsum generator and:

// Make your program count the number of words in the string
let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus metus ac tempus maximus. Curabitur non nibh nec felis tincidunt eleifend vel at tellus. Integer convallis, magna a pretium interdum, libero tellus venenatis libero, at sagittis nisi odio in turpis. Sed rutrum vulputate massa, ut vulputate arcu pretium id. Fusce eleifend elit non ipsum suscipit aliquet id ut augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dolor eget felis cursus pulvinar. Nunc eget ipsum fringilla, efficitur erat vitae, efficitur odio. Morbi aliquam justo risus, nec imperdiet ex cursus porttitor. Nullam interdum semper odio, non posuere eros dapibus sit amet. Mauris sed aliquet massa, eget sodales mi. Donec sed justo ut tortor interdum euismod nec ac leo. Duis vel eros tellus. Aenean sit amet neque eu massa mattis posuere. Nunc efficitur sed dolor ac feugiat. Sed sed libero vel ipsum scelerisque euismod. Duis dui odio, porta in mauris eget, maximus auctor mi. Sed ultricies massa risus. In et turpis at lorem interdum viverra at vitae tortor. Integer a varius quam, eu rutrum nisi. Suspendisse vel enim ornare eros vulputate maximus ut auctor felis. Integer sit amet luctus augue, at dignissim purus. Ut eget ultricies erat, vitae efficitur enim. Etiam nec orci metus. In vel sapien eleifend, auctor ipsum nec, imperdiet augue. Donec efficitur quam magna, sit amet consequat ipsum consectetur at. Phasellus ullamcorper mauris eget bibendum gravida. Ut quis odio elementum, ultricies neque ut, sollicitudin tortor. Ut ullamcorper leo nisl, non molestie odio consectetur vitae. Maecenas eu eleifend mi. Nulla rhoncus, nulla sed hendrerit luctus, sapien quam euismod nunc, quis rhoncus diam purus sit amet augue. Mauris quis felis eros. Sed non libero eu sem luctus viverra. Praesent turpis mi, ultricies sit amet tempor nec, ornare sit amet purus. In non orci hendrerit, gravida mi et, accumsan sapien. Morbi porttitor lobortis eros, eget dapibus velit rutrum lacinia.'
let words = paragraph.split(' ');

console.log(`A quantidade total de palavras é de ${words.length}`);

// Make your program count the number of times the latin word et appears
let countEt = 0;
for (let z = 0; z < words.length; z+= 1) {
  if(words[z] === 'et') {
    countEt += 1;
    
  }
}
console.log(`A quantidade de palavras et na string é de ${countEt} vezes`);