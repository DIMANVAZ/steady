Программным образом был видоизменён файл жителей (public/ taskFiles/ updCitizens.json — присвоил корректные city_id и собственно id) — средствами файла public/ taskFiles/ support.js
Был создан проект на Vue3. 
Сначала для отрисовки жителей я пользовался парсингом локальных json-файлов (папка public/ taskFiles),
но затем я решил повысить серьёзность проекта и
Была создана база данных на reg.ru,  в которой я программно (средствами SQL в NODE) создал таблицы жителей и городов и заполнил их значениями (см файл public/ taskFiles/ serverAndDB.js)
Далее я уже отрисовывал представление жителей, обращаясь к базе (а не к локальным файлам)
Полученный массив отсортировывается по городу-району-улице (в исходном виде от сервера он приходит отсортированным по id);
Реализован тултип
Для повышения серьёзности проекта, файлы сервера были размещены на бесплатном хостинге Хероку по (адрес для обращения за данными https://steadyserv2.herokuapp.com/getCiCi)
Таким образом, у проекта есть и бекенд, и база, и размещены они «по-настоящему», т.е. удалённо
Форматом представления данных я изначально выбрал таблицу.
  В первоначальном варианте отрисовки таблицы — когда данные брались из локального файла —  были учтены возможные добавления\изменения полей адресов (отрисовка по содержимому массива groups каждого жителя).
   Из-за структуры базы данных (в которой элементы адреса city,district,street представлены уже не в виде массива groups, а индивидуальными столбцами) и их порядок стал «нелогичным» для представления, пришлось заменить элегантный v-for во Вью на прописывание заголовков «в лоб» (строки 6,13 файла src/ сomponents/ Ierarchical.vue)
С концепцией Docker я знаком, но не пользовался ещё.
Также, привожу ссылку на гитхаб проекта: 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
