function startGame1() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess;

    while (guess !== secretNumber) {
        guess = Number(prompt('Введите число от 1 до 100'));

      if (guess > secretNumber) alert('Загаданное число меньше');
      else if (guess < secretNumber) alert('Загаданное число больше');
    }

    alert('Вы угадали!');
}