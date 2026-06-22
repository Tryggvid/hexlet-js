import getBirthYear from './src/index.js';

console.log('Сколько вам лет?');
const age = 18; // В реальности получаем из ввода пользователя
const birthYear = getBirthYear(age);
console.log(`Ваш год рождения: ${birthYear}`);
