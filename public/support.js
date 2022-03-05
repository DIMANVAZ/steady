
//файл-помогайка для исправлений в citizens.json
//присвоить каждому жителю уникальный id + проставить корректные city_id

/*const fs = require('fs');
fs.readFile('./taskFiles/citizens.json', (err, data) => {
    if (err) throw err;
    let citizens = JSON.parse(data.toString());
    //console.log(citizens)
    for (let i = 0; i < citizens.length; i++) {
        let nextCitizen = citizens[i];
        nextCitizen.id = i+1
        nextCitizen.groups.forEach(group => {
            if (group.type === 'city'){
                if (group.name.indexOf("осква") > -1){
                    nextCitizen.city_id = 1;
                }
                else if (group.name.indexOf("оронеж") > -1){
                    nextCitizen.city_id = 2;
                }
                else if (group.name.indexOf("етербург") > -1){
                    nextCitizen.city_id = 3;
                }
                else console.log('Нет такого города! ищи ошибку')
            }
        })
    }
    console.log(citizens)
    fs.writeFile('./taskFiles/updCitizens.json', JSON.stringify(citizens), (err) =>{
        if(err) throw err;
    })
});
import citizens from "./taskFiles/updCitizens.json";*/

//если просто вручную внести массив и "потрясти" его
let rawCitizens = [
    {
        "id": 0,
        "name": "Анна",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Пресненский р-н"
            },
            {
                "type": "street",
                "name": "Гашека ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Степан",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Пресненский р-н"
            },
            {
                "type": "street",
                "name": "Рочдельская ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Виктор",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Коптево р-н"
            },
            {
                "type": "street",
                "name": "Нарвская ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Алексей",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Коптево р-н"
            },
            {
                "type": "street",
                "name": "Коптевская ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Ярослав",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Отрадное р-н"
            },
            {
                "type": "street",
                "name": "Сигнальный проезд"
            }
        ]
    },
    {
        "id": 1,
        "name": "Антонина",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Отрадное р-н"
            },
            {
                "type": "street",
                "name": "Отрадная ул."
            }
        ]
    },
    {
        "id": 2,
        "name": "Григорий",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Советский р-н"
            },
            {
                "type": "street",
                "name": "Патриотов пр-т"
            }
        ]
    },
    {
        "id": 2,
        "name": "Александр",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Советский р-н"
            },
            {
                "type": "street",
                "name": "Кривошеина ул."
            }
        ]
    },
    {
        "id": 2,
        "name": "Владимир",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Центральный р-н"
            },
            {
                "type": "street",
                "name": "Ленина ул."
            }
        ]
    },
    {
        "id": 2,
        "name": "Василий",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Центральный р-н"
            },
            {
                "type": "street",
                "name": "Рабочий пр-т"
            }
        ]
    },
    {
        "id": 3,
        "name": "Яков",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Выборгский р-н"
            },
            {
                "type": "street",
                "name": "Светлановский пр-т"
            }
        ]
    },
    {
        "id": 3,
        "name": "Виктория",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Выборгский р-н"
            },
            {
                "type": "street",
                "name": "Орбели ул."
            }
        ]
    },
    {
        "id": 3,
        "name": "Николай",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Фрунзенский р-н"
            },
            {
                "type": "street",
                "name": "Лиговский пр-т"
            }
        ]
    },
    {
        "id": 3,
        "name": "Валентин",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Фрунзенский р-н"
            },
            {
                "type": "street",
                "name": "Воронежская ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Михаил",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Пресненский р-н"
            },
            {
                "type": "street",
                "name": "Гашека ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Арсений",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Пресненский р-н"
            },
            {
                "type": "street",
                "name": "Гашека ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Варвара",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Пресненский р-н"
            },
            {
                "type": "street",
                "name": "Рочдельская ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Вячеслав",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Отрадное р-н"
            },
            {
                "type": "street",
                "name": "Сигнальный проезд"
            }
        ]
    },
    {
        "id": 1,
        "name": "Владислав",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Отрадное р-н"
            },
            {
                "type": "street",
                "name": "Сигнальный проезд"
            }
        ]
    },
    {
        "id": 3,
        "name": "Светлана",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Выборгский р-н"
            },
            {
                "type": "street",
                "name": "Светлановский пр-т"
            }
        ]
    },
    {
        "id": 3,
        "name": "Константин",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Выборгский р-н"
            },
            {
                "type": "street",
                "name": "Орбели ул."
            }
        ]
    },
    {
        "id": 3,
        "name": "Мирослава",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Выборгский р-н"
            },
            {
                "type": "street",
                "name": "Орбели ул."
            }
        ]
    },
    {
        "id": 3,
        "name": "Семен",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Фрунзенский р-н"
            },
            {
                "type": "street",
                "name": "Лиговский пр-т"
            }
        ]
    },
    {
        "id": 3,
        "name": "Ульяна",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Фрунзенский р-н"
            },
            {
                "type": "street",
                "name": "Лиговский пр-т"
            }
        ]
    },
    {
        "id": 3,
        "name": "Влада",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Фрунзенский р-н"
            },
            {
                "type": "street",
                "name": "Лиговский пр-т"
            }
        ]
    },
    {
        "id": 3,
        "name": "Наталья",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Фрунзенский р-н"
            },
            {
                "type": "street",
                "name": "Воронежская ул."
            }
        ]
    },
    {
        "id": 3,
        "name": "Ирина",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Фрунзенский р-н"
            },
            {
                "type": "street",
                "name": "Воронежская ул."
            }
        ]
    },
    {
        "id": 3,
        "name": "Кира",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Фрунзенский р-н"
            },
            {
                "type": "street",
                "name": "Воронежская ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Роман",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Коптево р-н"
            },
            {
                "type": "street",
                "name": "Нарвская ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Иван",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Коптево р-н"
            },
            {
                "type": "street",
                "name": "Нарвская ул."
            }
        ]
    },
    {
        "id": 2,
        "name": "Антон",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Советский р-н"
            },
            {
                "type": "street",
                "name": "Патриотов пр-т"
            }
        ]
    },
    {
        "id": 2,
        "name": "Томара",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Советский р-н"
            },
            {
                "type": "street",
                "name": "Патриотов пр-т"
            }
        ]
    },
    {
        "id": 2,
        "name": "Юлия",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Центральный р-н"
            },
            {
                "type": "street",
                "name": "Рабочий пр-т"
            }
        ]
    },
    {
        "id": 2,
        "name": "Петр",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Центральный р-н"
            },
            {
                "type": "street",
                "name": "Рабочий пр-т"
            }
        ]
    },
    {
        "id": 2,
        "name": "Елена",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Центральный р-н"
            },
            {
                "type": "street",
                "name": "Рабочий пр-т"
            }
        ]
    },
    {
        "id": 2,
        "name": "Валентина",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Центральный р-н"
            },
            {
                "type": "street",
                "name": "Рабочий пр-т"
            }
        ]
    },
    {
        "id": 2,
        "name": "Татьяна",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Центральный р-н"
            },
            {
                "type": "street",
                "name": "Рабочий пр-т"
            }
        ]
    },
    {
        "id": 3,
        "name": "Ян",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Выборгский р-н"
            },
            {
                "type": "street",
                "name": "Орбели ул."
            }
        ]
    },
    {
        "id": 3,
        "name": "Ольга",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Выборгский р-н"
            },
            {
                "type": "street",
                "name": "Орбели ул."
            }
        ]
    },
    {
        "id": 3,
        "name": "Анатолий",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Выборгский р-н"
            },
            {
                "type": "street",
                "name": "Орбели ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Степан",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Пресненский р-н"
            },
            {
                "type": "street",
                "name": "Гашека ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Павел",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Пресненский р-н"
            },
            {
                "type": "street",
                "name": "Гашека ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Григорий",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Пресненский р-н"
            },
            {
                "type": "street",
                "name": "Гашека ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Валерий",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Отрадное р-н"
            },
            {
                "type": "street",
                "name": "Сигнальный проезд"
            }
        ]
    },
    {
        "id": 1,
        "name": "Леонид",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Коптево р-н"
            },
            {
                "type": "street",
                "name": "Нарвская ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Тимофей",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Коптево р-н"
            },
            {
                "type": "street",
                "name": "Нарвская ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Олег",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Коптево р-н"
            },
            {
                "type": "street",
                "name": "Нарвская ул."
            }
        ]
    },
    {
        "id": 3,
        "name": "Олег",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Санкт-Петербург г."
            },
            {
                "type": "district",
                "name": "Фрунзенский р-н"
            },
            {
                "type": "street",
                "name": "Лиговский пр-т"
            }
        ]
    },
    {
        "id": 2,
        "name": "Дмитрий",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Воронеж г."
            },
            {
                "type": "district",
                "name": "Советский р-н"
            },
            {
                "type": "street",
                "name": "Кривошеина ул."
            }
        ]
    },
    {
        "id": 1,
        "name": "Жан",
        "city_id": 1,
        "groups": [
            {
                "type": "city",
                "name": "Москва г."
            },
            {
                "type": "district",
                "name": "Коптево р-н"
            },
            {
                "type": "street",
                "name": "Коптевская ул."
            }
        ]
    }
]

//присвоили правильные id жителям и городам
for (let i = 0; i < rawCitizens.length; i++) {
    let nextCitizen = rawCitizens[i];
    nextCitizen.id = i+1
    nextCitizen.groups.forEach(group => {
        if (group.type === 'city'){
            if (group.name.indexOf("осква") > -1){
                nextCitizen.city_id = 1;
            }
            else if (group.name.indexOf("оронеж") > -1){
                nextCitizen.city_id = 2;
            }
            else if (group.name.indexOf("етербург") > -1){
                nextCitizen.city_id = 3;
            }
            else console.log('Нет такого города! ищи ошибку')
        }
    })
}

/*//отсортировали массив жителей по городам, потом районам, улицам и т.п.
let sortedCitizens = rawCitizens.sort(function (citiz1, citiz2) {
    for (let i = 0; i < citiz1.groups.length; i++) {
        let res = citiz1.groups[i].name.localeCompare(citiz2.groups[i].name);
        if(res !==0) {
            return res;
        }
    }
})
console.log(sortedCitizens);*/

let ass = {};
rawCitizens.forEach(citizen => {
    for (let i = 0; i <= citizen.groups.length; i++) {
        if(i === citizen.groups.length){
            //дописать id:имя в последнюю строку
            break
        }
        // продумать проверку слиянием! взять идею из корзины
        // НЕ перезатирать!!! добавить проверку на наличие!
        if(i === 0 ) { //начальный элемент просто сохраняем
            ass[citizen.groups[i].name] = {};
            console.log(ass)
        }
    }
})

console.log(ass)