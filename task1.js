"use strict";

// Задание 1.

// Напишите функцию, которая принимает в качестве аргумента объект
// и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

const protObj = {
    protProperty1: "aaa",
    protProperty2: "bbb",
    protProperty3: "ccc",
};

const obj = Object.create(protObj);

obj.prop1 = "a";
obj.prop2 = "b";
obj.prop3 = "c";

function getOwnProperty(object) {
    for (let key in object) {
        if (obj.hasOwnProperty(key)) {
            console.log(`собственное свойство: ${key}: ${obj[key]}`);
        } else console.log(`свойство из прототипа: ${key}: ${obj[key]}`);
    }
}

getOwnProperty(obj);
