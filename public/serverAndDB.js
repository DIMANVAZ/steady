const fs = require('fs');
const mysql2 = require('mysql2');
const conn = mysql2.createConnection({
    host:"server48.hosting.reg.ru",
    port:3306,
    database:"u1476436_steady",
    user:"u1476436_steuser",
    password:"u1476436_steUser"
});
const express = require('express');
const exP = express();
const port = process.env.PORT || 3003;
exP.listen(port, ()=>{  console.log(`server started at port: ${port}`);})

//обработка запроса с Фронта
exP.get('/getCiCi',function (request,response){
    //чтобы вернуть во Фронтенд данные с обеих таблиц, используем промисы

    let citiesPromise = new Promise((resolve, reject)=>{
        conn.query('SELECT * from Cities',(err,result) => {
            if(err) reject (err);
            resolve (result);
        })
    });

    let citizenPromise = new Promise((resolve, reject)=>{
        conn.query('SELECT * from Citizens',(err,result) => {
            if(err) reject (err);
            resolve (result);
        })
    });

    Promise.all([citiesPromise, citizenPromise]).then(function (value) {
        //console.log(value[1]);
        response.send(JSON.parse(JSON.stringify({cities:value[0],citizens:value[1]})));
    });
})

// считываем файл с горожанами в массив, выбираем одного, далее через запрос к БД создаём таблицу горожан
fs.readFile('./taskFiles/updCitizens.json', (err, data) => {
    if (err) throw err;
    let citizens = JSON.parse(data.toString());

    // создаём таблицу (если не создана)
    conn.query(makeCitizensTable(citizens[0]), (err,result)=>{
        if(err) throw err;
        console.log(result)
    })

    //чтобы код не рушился (т.к. таблица уже заполнена) - добавил проверку.
    conn.query(`SELECT count (*) from Citizens`, (err,result)=>{
        if(err) throw err;
        if(!result[0]['count (*)']){ //если в таблице нет строк, т.е. она пуста
            // заполняем горожанами таблицу
            conn.query(fillCitizensTable(citizens), (err,result)=>{
                if(err) throw err;
                console.log(result)
            });
        }
    })
});

// считываем файл с городами в массив, выбираем один, далее через запрос к БД создаём таблицу городов
fs.readFile('./taskFiles/cities.json', (err, data) => {
    if (err) throw err;
    let cities = JSON.parse(data.toString());

    // создаём таблицу (если не создана)
    conn.query(doCitiesTable(), (err,result)=>{
        if(err) throw err;
        console.log(result)
    });

    //чтобы код не рушился (т.к. таблица уже заполнена) - добавил проверку.
    conn.query(`SELECT count (*) from Cities`, (err,result)=>{
        if(err) throw err;
        if(!result[0]['count (*)']){ //если в таблице нет строк, т.е. она пуста
            //заполнили городами таблицу
            conn.query(fillCitesTable(cities), (err,result)=>{
                if(err) throw err;
                console.log(result)
            });
        }
    });
});

/* Функция для создания SQL-запроса на создание таблицы горожан.
 Учитывает все возможные поля адреса, какие будут.
 Применяется выше */
function makeCitizensTable(citizen){
    //базовые столбцы - вписал вручную
    let citizensQuery = `CREATE TABLE IF NOT EXISTS Citizens (
        id int(10) AUTO_INCREMENT PRIMARY KEY, 
        name varchar(255) NOT NULL,
        city_id int(10) NOT NULL,`;

    // элементы адреса впишутся автоматически
    citizen.groups.forEach(group => {
        citizensQuery += `${group.type} varchar(255) NOT NULL,`
    });

    //обрезаем лишнюю запятую в конце и добавим скобку
    citizensQuery = citizensQuery.slice(0,-1) + `)`;
    //console.log(citizensQuery);
    return citizensQuery
}

/* Функция для создания SQL-запроса на заполнение таблицы горожан горожанами.
 Учитывает все возможные поля адреса, какие будут.
 Применяется выше */
function fillCitizensTable(citizensArray){
    //query -запрос - начало
    let fillByCitizens = `INSERT INTO Citizens (id,name,city_id,city,district,street) values `;

    citizensArray.forEach(citizen => {
            let addressSteps = []; // массив ступеней адреса, сколько бы их ни было
            citizen.groups.forEach(group => {
                addressSteps.push(`"${group.name}"`); //не забываем обернуть в кавычки, т.к. текстовое поле
            });
        // 1 полное значение для добавления 1 гражданина. И тут не забываем про кавычки
        let oneValue = `(${citizen.id},"${citizen.name}",${citizen.city_id},${addressSteps.join(',')}),`;
        fillByCitizens += oneValue;
        //console.log(oneValue)
        }
    )
    //console.log(fillByCitizens.slice(0,-1))
    return fillByCitizens.slice(0,-1);
}

/* Функция для создания SQL-запроса на создание таблицы городов.
 Применяется выше */
function doCitiesTable(){
    let citiesQuery = `CREATE TABLE IF NOT EXISTS Cities (
        id int(10) AUTO_INCREMENT PRIMARY KEY, 
        name varchar(255) NOT NULL,
        data int(10) NOT NULL )`;

    //console.log(citiesQuery);
    return citiesQuery;
}

/* Функция для создания SQL-запроса на заполнение таблицы городов городами.
  Применяется выше */
function fillCitesTable(citiesArray){
    //query -запрос - начало
    let fillByCities = `INSERT INTO Cities (id,name,data) values `;

    citiesArray.forEach(city => {
            // 1 полное значение для добавления 1 гражданина. И тут не забываем про кавычки
            let oneValue = `(${city.id},"${city.name}",${city.data}),`;
            fillByCities += oneValue;
            console.log(oneValue)
        }
    )
    console.log(fillByCities.slice(0,-1))
    return fillByCities.slice(0,-1);
}