"use strict";

// Задание 4.
// Реализуйте следующее консольное приложение подобно примеру,
// который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку.
// Посчитайте потребляемую мощность (передайте аргумент).
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

// объект дом, можно добавлять и удалять устройства,
// можно проверить суммарную потребляему мощность включенных устройств
const home = {
    // объект хранящий перечень добвленных устройств
    homeDevices: {},

    // метод добавления устройств
    addDevice: function (name, power) {
        this.homeDevices[name] = new ConsumptionType(name, power);
        console.log(
            `устройство ${this.homeDevices[name].name} успешно добавленно`
        );
    },

    // метод удаления устройств
    removeDevice: function (name) {
        if (name in this.homeDevices) {
            delete this.homeDevices[name];
            console.log(`Устройство ${name} успешно удалено`);
        } else console.log(`Невозможно удалить, устройство ${name} не найдено`);
    },

    // метод включающий в розетку все устройства
    switchOnAll: function () {
        for (const key in this.homeDevices) {
            this.homeDevices[key].powerStatus = "on";
        }
        console.log("Все устройства включены в розетку");
    },

    // метод выключающий все устройства из розетки
    switchOffAll: function () {
        for (const key in this.homeDevices) {
            this.homeDevices[key].powerStatus = "off";
        }
        console.log("Все устройства отключены от розетки");
    },

    // метод расчитывающий суммарную потребляему мощность всех
    // включённых в розетку устройств
    checkTotalPowCons: function () {
        let sum = 0,
            count = 0;
        for (let key in this.homeDevices) {
            if (this.homeDevices[key].powerStatus === "on") {
                count++;
            }
            sum += this.homeDevices[key].checkPowerConsumption();
        }
        console.log(`На данный момент включены ${count} устройства`);
        console.log(`Суммарная потребляемая мощность устройств: ${sum} Вт`);
    },
};

// функция конструктор бытовой техники
function Appliances(name, power) {
    this.type = "appliances";
    this.name = name;
    this.powerConsumption = power;
    this.powerStatus = "off";
}

// добавляем в прототип метод включения/выключения в/из розетки
Appliances.prototype.powerSwitch = function () {
    if (this.powerStatus === "off") {
        this.powerStatus = "on";
        console.log(this.name + " включен в розетку");
    } else {
        this.powerStatus = "off";
        console.log(this.name + " выключен из розетки");
    }
};

// функция конструктор подкласса бытовой техники по потребляемой мощности
function ConsumptionType(name, power) {
    this.name = name;
    this.powerConsumption = power;
    if (power <= 200) {
        this.consumptionType = "Low power consumption";
    } else this.consumptionType = "High power consumption";
}

// назначаем прототипное наследование потомку от родителя
ConsumptionType.prototype = new Appliances();

// добавляем метод проверки типа потребления мощности (высокий или низкий)
ConsumptionType.prototype.checkConsumptionType = function () {
    console.log(
        `Бытовой прибор ${this.name} потребляет ${this.powerConsumption} Вт и является ${this.consumptionType} типа`
    );
};

// добавляем метод расчёта потребляемой мощности устройства
// в зависимости от того включен прибор в розетку или нет
ConsumptionType.prototype.checkPowerConsumption = function () {
    if (this.powerStatus === "on") {
        return this.powerConsumption;
    } else return 0;
};

home.addDevice("LED TV", 200);
home.addDevice("desktop computer", 800);
home.addDevice("desktop lamp", 50);
home.addDevice("air conditioner", 700);
home.switchOnAll();
home.checkTotalPowCons();
home.removeDevice("desktop lamp");
home.switchOffAll();
home.homeDevices["desktop computer"].powerSwitch();
home.homeDevices["LED TV"].powerSwitch();
home.homeDevices["air conditioner"].powerSwitch();
home.homeDevices["air conditioner"].powerSwitch();
home.homeDevices["desktop computer"].checkConsumptionType();
home.homeDevices["LED TV"].checkConsumptionType();
home.checkTotalPowCons();
