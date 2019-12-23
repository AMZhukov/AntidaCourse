/** Task #1. We need to position functions correctly */

'use strict';
const print1 = () => console.log('каждый');
const print2 = () => console.log('охотник');
const print3 = () => console.log('желает');
const print4 = () => console.log('знать');
const print5 = () => console.log('где');
const print6 = () => console.log('сидит');
const print7 = () => console.log('фазан');

const func1 = () => {
    print3();
};

const func2 = () => {
    func1();

    setTimeout(() => {
        print7()
    }, 100);
};

const func3 = () => {
    setTimeout(() => {
        func2();
        print4()
    }, 25);

    print2();
};

setTimeout(() => {
    print5();

    setTimeout(() => {
        print6()
    }, 75);
}, 50);

print1();

func3();

/** Task #2. Create to function constructor */
setTimeout(() => {
    function Square (width = 0, height = 0,  unit = 'см.') {
        this.width = width;
        this.height = height;
        this.unit = unit;
        this.information = () => `\n ширина: ${this.width} ${this.unit}, высота: ${this.height} ${this.unit}`;
    }

    const square = new Square(100, 100, 'см.');

    function getArea() {
        return `${this.width * this.height} ${this.unit}2`;
    }

    function getPerimeter() {
        return `${(this.width + this.height) * 2} ${this.unit}`;
    }

    console.log(square.information());
    console.log(getArea.call(square));
    console.log(getPerimeter.call(square));
}, 200);


setTimeout(() => {

    /**
     * реализовать функцию-конструктор копилки
     * - номер счета - 3-х значное число, начиная с 1
     * - если номер меньше трехзначного числа, слева заполняем нулями
     * - состояние счета при создании, учитывается в транзакциях
     */
    function MoneyBox(boxNum, boxBalance) {
        this.boxNum = ((boxNum) => {
            if (boxNum < 0 || boxNum > 999) {
                throw "Need run MoneyBox with diapason parameter from 0 to 999";
            }
            boxNum = String(boxNum);
            return '0'.repeat(3 - boxNum.length) + boxNum;
        })(boxNum || Math.round(Math.random() * 1000));
        this.boxBalance = boxBalance || 0;
        this.transactions = [];
    }

    /**  * реализовать получение информации о состоянии копилки */
    function getMoneyboxInfo () {
        return '*** \n' + `Номер:${this.boxNum} \n` + `На счету: ${this.boxBalance} \n` +
            `Транзакции: ${this.transactions.join(', ') || '—'} \n` + `***`;
    }

    /**  * реализовать добавление в копилку  */
    function addToMoneybox(amount) {
        this.boxBalance += amount;
        this.transactions.push(amount);
    }

    /**  * реализовать изъятие из копилки */

    function takeFromMoneybox(amount) {
        this.boxBalance -= amount;
        this.transactions.push(-amount);
    }

    const moneybox1 = new MoneyBox(100);
    const moneybox2 = new MoneyBox;


    const add100ToMoneybox1 = addToMoneybox.bind(moneybox1, 100);
    const addToMoneybox2 = addToMoneybox.bind(moneybox2);
    const take250FromMoneybox2 = takeFromMoneybox.bind(moneybox2, 250);
    const take10FromMoneybox1 = takeFromMoneybox.bind(moneybox1, 10);

    const moneybox1Info = getMoneyboxInfo.bind(moneybox1);
    const moneybox2Info = getMoneyboxInfo.bind(moneybox2);

    /** используя addToMoneybox и takeFromMoneybox определи следующие функции */

    add100ToMoneybox1();    // добавит 100 в moneybox1
    addToMoneybox2(500);    // добавит 500 в moneybox2
    take250FromMoneybox2(); // изымает 250 из moneybox2
    take10FromMoneybox1();  // изымает 10 из moneybox1

    console.log(moneybox1Info());
    console.log(moneybox2Info());
}, 250);
