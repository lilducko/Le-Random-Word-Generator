// const varray = [1,2,3,4];
// const stuff = ['dennis', 21, true, 'bill']; //boolean = true or false statement

const words = ['billy', 'bobby', 'cletus', 'jones', 'bill', 'gates']
//DOM = Document Object Model
//The DOM helps JK communicate with the html and css

let button = document.querySelector('.word-button')

//Function = a reasonable block of code
const newWordFunction = () => {
    let number = Math.floor(Math.random() * words.length);
    let word = words[number];
    document.querySelector('.random-word').textContent = word;
}

button.addEventListener('click', newWordFunction);