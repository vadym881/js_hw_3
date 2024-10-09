// Дебаг потрібно проводити за допомогою команди: node НазваФайлу.js (в моєму випадку: node FizzBuzz.js)
const readline = require('readline');
const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rline.question('Введіть число: ', (input) => {
const userInput = Number(input);
if (userInput % 3 === 0 && userInput % 5 === 0) {
    console.log('FizzBuzz');
} else if (userInput % 3 === 0) {
    console.log('Fizz');
} else if (userInput % 5 === 0) {
    console.log('Buzz');
}
rline.close()
});
