const StrToCheck = 'adsf';
const cleanStr = StrToCheck.toLowerCase().replaceAll(' ', '');
const isPalindrome = cleanStr === cleanStr.split('').reverse().join('');
isPalindrome? 
console.log(`Слово ${StrToCheck} является палиндромом`) :
console.log(`Слово ${StrToCheck} не является палиндромом`);