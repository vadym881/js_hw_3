let userInput = prompt('Введіть рік: ')
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
