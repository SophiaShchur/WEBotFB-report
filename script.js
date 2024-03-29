document.addEventListener('DOMContentLoaded', function() {

    const descBtn = document.getElementById('description');
    const textBtn = document.getElementById('theme');
    const htmlBtn = document.getElementById('html-structure');
    const tableBtn = document.getElementById('html-table');
    const formBtn = document.getElementById('html-form');
    const imageBtn = document.getElementById('html-img');
    const resultBtn = document.getElementById('result');

    const infoBlock = document.querySelector('.info-block');


    descBtn.addEventListener('click', function() {
        infoBlock.textContent = "Веб-додаток, який дає можливість користувачам проглядати доступні сеанси показу фільмів," +
            " детальніше ознайомитися з інформацією про фільм, а також придбати квитки на кінопоказ";
    });

    textBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<h3>Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ." +
            "РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ HTML-ДОКУМЕНТІ.</h3>" +
            "<p>Мета: придбати практичні навички роботи з HTML-документом, таблицями," +
            "зображеннями, посиланнями, списками, формами" +
            "Створити шаблон звітного HTML-документом для відображення" +
            "результатів роботи всіх лабораторних робіт.</p>";
    });

    htmlBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab1_1.jpg'><br>" +
            "<img src='img/lab1_2.jpg'><br>" +
            "<img src='img/lab1_3.jpg'><br>" +
            "<img src='img/lab1_4.jpg'><br>";
    });
    tableBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab1_6.jpg'><br>" ;
    });
    formBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab1_5.jpg'><br>";
    });
    imageBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab1_7.jpg'><br>";
    });
    resultBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<h1>Висновки</h1>" +
            "<p>Під час виконання цієї роботи я мала можливість глибше ознайомитися з мовою розмітки HTML. " +
            "Це включало у себе роботу з елементами, такими як таблиці, зображення, посилання," +
            " списки та форми.В процесі роботи я отримала досвід вставки зображень у веб-сторінки, " +
            "а також створення посилань на інші ресурси та сторінки.Я освоїла роботу з різними типами списків у HTML, " +
            "а також здійснила практичне використання форм для збору інформації від користувачів.</p><br>";
    });
});