const age = +prompt('Введите ваш возраст:');

if (Number.isNaN(age)) {
    alert('Ошибка: введите числа в оба поля');
} else {

    let maxLoan = 0;

    if (age < 18) {
        alert("Кредит не выдается");
    } else {
        if (age >= 18 && age <= 21) maxLoan = 50000;
        else if (age >= 22 && age <= 35) maxLoan = 400000;
        else if (age >= 36 && age <= 65) maxLoan = 1000000;

        const sum = +prompt(`Мы можем Вам выдать максимум ${maxLoan}
        Введите сумму кратную 1000`);

        if (!sum) {
            alert('Видимо, Вам кредит не нужен. Всего доброго!');
        }
        else if (sum > maxLoan) {
            alert(`Ошибка: запрашиваемая сумма превышает ваш лимит в ${maxLoan}`);
        } else {
            let suggestedLoan = Math.floor(sum / 1000) * 1000;
            if (sum !== suggestedLoan)
                alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${suggestedLoan}`);
        }
    }
}