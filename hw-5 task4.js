
function askAge() {
  let age = Number(prompt('Сколько тебе лет?'));

  if (age < 0) {
    console.log('Вы ввели неправильное значение');
  } else if (age <= 12) {
    console.log('Привет, друг!');
  } else {
    console.log('Добро пожаловать!');
  }
}