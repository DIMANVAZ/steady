
//файл-помогайка для исправлений в citizens.json
//присвоить каждому жителю уникальный id + проставить корректные city_id

const fs = require('fs');
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


