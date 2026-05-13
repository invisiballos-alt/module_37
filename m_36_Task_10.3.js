function calc_age() {
    const name = prompt('Введите ваше имя');
    const b_date = +prompt('Введите ваш год рождения');
    
    if (Number.isNaN(b_date)) {
        alert('Год должен быть числом');
        return;
    }
    
    const currentYear = new Date().getFullYear();
    const age = currentYear - b_date;
    alert(`${name}: ${age}`);
}

calc_age();