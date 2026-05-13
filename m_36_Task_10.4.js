function calc_age() {
    const name = prompt('Введите ваше имя');
    const b_date = +prompt('Введите ваш год рождения');
    
    if (name === '' || Number.isNaN(b_date)) {
        alert('Пустая строка вместо имени или не число вместо года');
        return;
    }
    
    const currentYear = new Date().getFullYear();
    const age = currentYear - b_date;
    switch (true) {
        case ((age >= 10 && age <= 19) || (age % 10 >= 5 && age % 10 <= 9) || (age % 10 == 0)):
            alert(`${name}: ${age} лет`);
            break;

        case (age % 10 == 1):
            alert(`${name}: ${age} год`);
            break;
        case (2 <= age % 10 <= 4):
            alert(`${name}: ${age} годa`);
            break;
    
        default:
            alert(`${name}: ${age}`);
            break;
    }
    
}

calc_age();