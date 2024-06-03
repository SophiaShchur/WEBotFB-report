document.addEventListener('DOMContentLoaded', function() {

    const Btn1 = document.getElementById('theme');
    const Btn2 = document.getElementById('task1');
    const Btn3 = document.getElementById('task2');
    const Btn4 = document.getElementById('task3');
    const Btn5 = document.getElementById('result');
    const Btn6 = document.getElementById('lab51');
    const Btn7 = document.getElementById('lab51_1');
    const Btn8 = document.getElementById('lab51_3');
    const Btn9 = document.getElementById('lab51_5');
    const Btn10 = document.getElementById('lab51_7');
    const Btn11 = document.getElementById('lab51_9');
    const Btn12 = document.getElementById('lab51_10');
    const infoBlock = document.querySelector('.info-block');


    Btn2.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<p>1.Створити одновимірний масив, кількість елементів якого задана користувачем. Знайти максимальний серед парних елементів та мінімальний серед елементів з парними індексами. В масиві поміняти місцями знайдені максимальний та мінімальний елементи, надрукувати вхідний та вихідний масиви.\n" +
            "2. Виконати сортування вихідного масиву за зростанням методом вставки.\n" +
            "Застосувати функції</p>" +
            "<img src='../img/lab5/1.png'><br>" +
            "<img src='../img/lab5/2.png'><br>" +
            "<img src='../img/lab5/3.png'><br>" +
            "<img src='../img/lab5/4.png'><br>"+
            "<a href='lab5_1.html'>Посилання на сторінку</a><br>" ;
    });

    Btn1.addEventListener('click', function() {
        infoBlock.innerHTML = "<h3>ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. \n" +
            "ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT\n</h3>" +
            "<p>Мета: придбати практичні навички роботи з масивами у js-сценаріях.  Реалізація програм засовами мови JAVASCRIPT</p>" +
            "<a href='https://github.com/SophiaShchur/Cinema-WEB-site.git'>Github Cinema-WEB-site</a><br>" +
            "<a href='https://github.com/SophiaShchur/WEBotFB-report.git'>Github Звіт</a>";
    });

    Btn3.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<p>Валідація HTML-форми реєстрації користувача.Забезпечити перевірку елементів HTML-форми таких видів: ціле число, дійсне число, дата у форматі DD.MM.YYYY, однаковість даних у полях введення паролю (основне та перевірочне). Крім того, забезпечити перевірку введення обов‘язкових полів, помічених (*). " +"<img src='../img/lab5/5.png'><br>" +
            "<img src='../img/lab5/6.png'><br>" +
            "<img src='../img/lab5/7.png'><br>" +
            "<img src='../img/lab5/8.png'><br>" +
            "<img src='../img/lab5/9.png'><br>" +
            "<img src='../img/lab5/10.png'><br>" +
            "<img src='../img/lab5/11.png'><br>"+
            "<a href='lab5_2.html'>Посилання на сторінку</a><br>" ;
    });
    Btn4.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab5/12.png'><br>" +
            "<img src='../img/lab5/13.png'><br>" +
            "<img src='../img/lab5/14.png'><br>" +
            "<img src='../img/lab5/15.png'><br>";
    });

    Btn5.addEventListener('click', function() {
        infoBlock.innerHTML = "<h1>Висновки</h1>" +
            "<p>У результаті виконання роботи ми здобули практичні навички у використанні масивів у JavaScript і створенні програм з використанням цієї мови програмування. Ми освоїли структуру масивів та їхні можливості, які дозволяють ефективно зберігати та обробляти дані. Крім того, зрозуміли, як JavaScript може використовуватися для динамічної зміни вмісту HTML-сторінок та взаємодії з користувачем. Реалізація програм за допомогою JavaScript дала нам практичний досвід у вирішенні завдань веб-розробки. Практична робота є важливим кроком у вивченні будь-якої програмної мови, оскільки дозволяє закріпити теоретичні знання та набути практичних навичок. В цілому, виконання завдань дало можливість успішно досягти поставленої мети і отримати практичний досвід у роботі з JavaScript.</p><br>";
    });


    Btn6.addEventListener('click', function() {
        infoBlock.innerHTML = "<h3>Тема:   ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.</h3>" +
            "<p>Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки.\n" +
            ".  Реалізація програм засовами мови JAVASCRIPT\n</p>" +
            "<a href='lab51.html'>Лабораторна робота 5.1</a><br>" +
            "<a href='https://github.com/SophiaShchur/WEBotFB-report.git'>Github Звіт</a><br>"+
            "<h1>Висновки</h1>" +
            "<p>У ході виконання даної роботи  було отримано значний досвід роботи з об'єктами та їх методами в мові JavaScript. " +
            "Досліджено принципи деструктуризації об'єктів, її застосування для зручного доступу до даних та роботи з масивами об'єктів. Крім того," +
            " вивчено концепцію колбеків та їх використання у вигляді стрілочних функцій, що дозволяє зменшити обсяг коду та покращити читабельність програм.\n" +
            "\n" +
            "Процес вивчення цих концепцій дозволив отримати практичні навички в програмуванні на JavaScript, зокрема у створенні ефективних алгоритмів та оптимізації " +
            "коду за допомогою використання об'єктів, колбеків та стрілочних функцій. В результаті, мета роботи була досягнута, а здобуті знання та навички можуть бути " +
            "успішно використані у подальшій розробці програмного забезпечення на JavaScript.</p><br>";
    });




    Btn7.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab51/1.png'><br>" +
            "<img src='../img/lab51/2.png'><br>" +
            "<img src='../img/lab51/3.png'><br>";
    });

    Btn8.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab51/4.png'><br>" +
            "<img src='../img/lab51/5.png'><br>" +
            "<img src='../img/lab51/6.png'><br>";
    });

    Btn9.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab51/7.png'><br>" +
            "<img src='../img/lab51/8.png'><br>" +
            "<img src='../img/lab51/9.png'><br>" +
            "<img src='../img/lab51/10.png'><br>";
    });
    Btn10.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab51/11.png'><br>" +
            "<img src='../img/lab51/12.png'><br>" +
            "<img src='../img/lab51/13.png'><br>";
    });

    Btn11.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab51/14.png'><br>" +
            "<img src='../img/lab51/15.png'><br>" +
            "<img src='../img/lab51/16.png'><br>" +
            "<img src='../img/lab51/17.png'><br>";
    });

    Btn12.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab51/18.png'><br>" +
            "<img src='../img/lab51/19.png'><br>" +
            "<img src='../img/lab51/20.png'><br>";
    });


});