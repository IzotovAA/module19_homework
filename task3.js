"use strict";

// Задание 3.
// Напишите функцию, которая создает пустой объект, но без прототипа.

function createObject() {
    return Object.create(null);
}

const obj = createObject();
const obj1 = {};

console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(obj1));
