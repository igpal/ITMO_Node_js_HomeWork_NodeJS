let http = require('http'),
    fs = require('fs');
let dataFile = 'data.txt';

fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) {
        console.log('Ошибка чтения файла');
    } else {
        //console.log(data);
        //console.log(typeof(data));
        writeFiles(data, fs);
    }
});

function writeFiles(data, fs) {

    let dataArr = data.split(' '),
        arr1 = [],
        arr2 = [];

    dataArr.forEach(element => {

        if (element % 2 == 0) {
            arr1.push(element);
        }
        arr2.push(Math.pow((+element), 3));
    });


    fs.writeFile('out-1.txt', arr1.toString(), (err) => {
        if (err) {
            console.log('Что-то пошло не так');
        }

    });
    fs.writeFile('out-2.txt', arr2.toString(), (err) => {
        if (err) {
            console.log('Что-то пошло не так');
        }
    });
}