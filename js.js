// Task #1.
// We need to measure the duration className and classList.

const a = document.querySelector('.header-container');
console.time('label_first');
for (let i = 0; i < 1000; i++) {
    a.className = 'header-container class1';
    a.className = 'header-container';
}
console.timeEnd('label_first');

console.time('label_second');
for (let i = 0; i < 1000; i++) {
    a.classList.add('class1');
    a.classList.remove('class1');
}
console.timeEnd('label_second');

//Task #2.
//We need to create an object that will contain the table data inside

const viewTableAsObject = (sampleTable) => {
    const table = document.querySelector(sampleTable);
    const tableRow = table.querySelectorAll('tr');
    const objectForTable = {};
    const objectForTableProto = {};
    const tableHead = tableRow[0].querySelectorAll('th');

    for(let key in tableHead) {
        if (tableHead.hasOwnProperty(key)) {
        objectForTableProto[tableHead[key].innerText] = null;
        }
    }

    tableRow.forEach((arr, index) => {
        if (index > 0) {
            let tempTable = tableRow[index].querySelectorAll('td');
            objectForTable[index] = Object.create(objectForTableProto);
            for (let j = 0; j < tempTable.length;) {
                for (let key in objectForTable[index]) {
                    objectForTable[index][key] = tempTable[j].innerText;
                    j += 1;
                }
            }
        }
    });
    return objectForTable;
};
console.log(viewTableAsObject('.table'));


// Task #3.
//











