
const dogs =[
{ name: 'Snickers', age: 2},
{name: 'Hugo', age: 8}
];

function makeGreen() {
const p = document.querySelector('.p');
p.style.color ="#BADASS";
p.style.fontSize = "50px";
}

//Regular
console.log('Hello');

//Interpolated
let name = 'Jay';
console.log(`Hi my name is ${name} what is yours?`);

//Styled
console.log('%c I am a styled text', 'color:blue; font-size: 50px');

//warning
console.warn('Oh NOO');

//Error
console.error('Damn');

//Info
console.info('Hippos Kill more humns than lions!');

//Testing
console.assert(1===2, 'That is wrong!');

//clearing
//console.clear(); ***Comment this out so that other answers can be displayed in the console.

//Viewing DOM Elements
console.log(p);
console.dir(p);

//Grouping together
console.group()
console.groupEnd()
//counting
console.count('Blog');

//timing
console.time('fetching data');