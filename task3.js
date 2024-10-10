let userAge = prompt('Введіть ваш вік: ')
    let yearWord;
    const lastDigit = userAge % 10;
    const lastTwoDigits = userAge % 100;
    if (lastDigit === 1 && lastTwoDigits !== 11) {
        yearWord = 'рік';
    } else if ((lastDigit === 2 || lastDigit === 3 || lastDigit === 4) && (lastTwoDigits < 12 || lastTwoDigits > 14)) {
        yearWord = 'роки';
    } else {
        yearWord = 'років';
    }

    console.log('Вам ' + userAge + ' ' + yearWord + '.')
