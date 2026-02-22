function cubeNumber() {
    const input = prompt('Введите число:');
    const num = Number(input);

    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    }

    return `${num} в кубе равняется ${num ** 3}`;
}