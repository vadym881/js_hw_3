// Дебаг потрібно проводити за допомогою команди: node НазваФайлу.js (в моєму випадку: node hw3_2.js)
const readline = require('readline');
const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rline.question('Введіть рік: ', (input) => {
    const userInput = Number(input);
    if (userInput % 4 === 0) {
        if (userInput % 100 === 0) {
            if (userInput % 400 === 0) {
                console.log(userInput + ' рік - високосний.');
            } else {
                console.log(userInput + ' рік - не є високосним.');
            }
        } else {
            console.log(userInput + ' рік - високосний.');
        }
    } else {
        console.log(userInput + ' рік - не є високосним.');
    }

    rline.close();
});
