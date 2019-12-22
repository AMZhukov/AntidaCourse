'use strict';

const f = {data: [
        { score: 10, name: 'Bob' , age: 17},
        { score: 11, name: 'Gor' , age: 19},
        { score: 12, name: 'Ter' , age: 20},
        { score: 13, name: 'Wa' , age: 21},
        { score: 14, name: 'An' , age: 22},
    ]};
// вернёт сумму всех очков
const smartFunct = (obj) => {
    let scoreScope = null;
    for (let value of obj) {
        scoreScope += value.score;
    }
    return scoreScope;
};
console.log('вернёт сумму всех очков', smartFunct(f.data));

// вернёт только массив с участниками старше 18
const filterOnly18Old = (obj) => {
    return obj.filter(item => item.age >= 18)
};
console.log(' вернёт только массив с участниками старше 18', filterOnly18Old(f.data));

// вернёт только  массив с участниками с именем, начинающимся на B
const filterNameInitialB = (obj) => {
    return obj.filter(item => item.name[0] === 'B');
};
console.log('вернёт только  массив с участниками с именем, начинающимся на B', filterNameInitialB(f.data));

// вернёт массив со строками вида: “Bob - 18: 10” используя метод toString, который предварительно добавлен в изначальный объект
const transferData = (arr) => {
    let dateToString = [];
    console.log(arr);
    arr.forEach(a => {
        a.toString = () => `${a.name} - ${a.age}: ${a.score}`;
    });
    for (let value of arr) {
        dateToString.push(String(value));
    }
    return dateToString;
};
console.log('вернёт массив со строками вида: “Bob - 18: 10”', transferData(f.data));

//  вернёт массив чисел в виде строк, суммы очков участников, сгруппированных по возрасту
const summScoreOld = (obj) => {
    let scoreOld = new Map;
    for (let value of obj) {
        //if (!scoreOld[value.age)) scoreOld.set(value.age, 0);
        scoreOld[value.age] = +value.score;
    }
    return scoreOld;
};
console.log('суммы очков участников, сгруппированных по возрасту', summScoreOld(f.data));
