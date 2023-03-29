"use strict";

// Задание 2.
// Напишите функцию, которая принимает в качестве аргументов
// строку и объект, а затем проверяет, есть ли у переданного
// объекта свойство с данным именем.
// Функция должна возвращать true или false.

function checkProperty(string, object) {
    return string in object;
}

const obj = {
    prop1: "a",
    prop2: "b",
    prop3: "c",
};

console.log(checkProperty("prop1", obj));
console.log(checkProperty("prop5", obj));
