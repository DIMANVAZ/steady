const fs = require('fs');
const mysql2 = require('mysql2');
const conn = mysql2.createConnection({
    host:"server48.hosting.reg.ru",
    port:3306,
    database:"u1476436_steady",
    user:"u1476436_steuser",
    password:"u1476436_steUser"
});

// считываем файл с горожанами в массив, выбираем одного, далее через запрос к БД создаём таблицу горожан
fs.readFile('./taskFiles/updCitizens.json', (err, data) => {
    if (err) throw err;
    let citizens = JSON.parse(data.toString());

    // создаём таблицу
    conn.query(makeCitizensTable(citizens[0]), (err,result)=>{
        if(err) throw err;
        console.log(result)
    })

});

fs.readFile('./taskFiles/cities.json', (err, data) => {
    if (err) throw err;
    let cities = JSON.parse(data.toString());
    oneCity = cities[0];
    console.log(oneCity)
});

/*
 Функция для создания SQL-запроса на создание таблицы горожан.
 Учитывает все возможные поля адреса, какие будут.
 Применяется выше
*/
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
    console.log(citizensQuery);
    return citizensQuery
}

function fillCitizensTable(citizensArray){
    let fillByCitizens = `INSERT INTO Citizens values` (
        id int(10) AUTO_INCREMENT PRIMARY KEY, 
        name varchar(255) NOT NULL,
        city_id int(10) NOT NULL,`;

    // элементы адреса впишутся автоматически
    citizen.groups.forEach(group => {
        fillByCitizens += `${group.type} varchar(255) NOT NULL,`
    });

    //обрезаем лишнюю запятую в конце и добавим скобку
    fillByCitizens = fillByCitizens.slice(0,-1) + `)`;
    console.log(fillByCitizens);
    return fillByCitizens
}


const doCitiesTable = ``