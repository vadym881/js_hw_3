let userInput = prompt('Введіть число: ')
if (userInput % 3 === 0 && userInput % 5 === 0) {
    console.log('FizzBuzz');
} else if (userInput % 3 === 0) {
    console.log('Fizz');
} else if (userInput % 5 === 0) {
    console.log('Buzz');
}
