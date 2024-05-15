document.addEventListener('DOMContentLoaded', function() {

    const Btn1 = document.getElementById('theme');
    const Btn2 = document.getElementById('task1');
    const Btn3 = document.getElementById('task2');
    const Btn4 = document.getElementById('task3');
    const Btn6 = document.getElementById('task4');
    const Btn7 = document.getElementById('task5');
    const Btn8 = document.getElementById('task6');
    const Btn5 = document.getElementById('result');
    const infoBlock = document.querySelector('.info-block');


    Btn2.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab6/1.png'><br>" +
            "<img src='../img/lab6/2.png'><br>" +
            "<img src='../img/lab6/3.png'><br>" +
            "<img src='../img/lab6/4.png'><br>"+
            "<img src='../img/lab6/5.png'><br>";
    });

    Btn1.addEventListener('click', function() {
        infoBlock.innerHTML = "<h3>КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ. " +
            "THROTTLE. МОДУЛЬНОСТЬ КОДУ</h3>" +
            "<p>Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки.\n" +
            ".  Реалізація програм засовами мови JAVASCRIPT\n</p>" +
            "<a href='lab66.html'>Завдання</a><br>" +
            "<a href='https://github.com/SophiaShchur/WEBotFB-report.git'>Github Звіт</a>";
    });

    Btn3.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab6/6.png'><br>" +
            "<img src='../img/lab6/7.png'><br>" +
            "<img src='../img/lab6/8.png'><br>" +
            "<img src='../img/lab6/9.png'><br>";
    });
    Btn4.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab6/10.png'><br>" +
            "<img src='../img/lab6/11.png'><br>" +
            "<img src='../img/lab6/12.png'><br>" +
            "<img src='../img/lab6/13.png'><br>"+
            "<img src='../img/lab6/14.png'><br>";
    });

    Btn5.addEventListener('click', function() {
        infoBlock.innerHTML = "<h1>Висновки</h1>" +
            "<p>У ході виконання роботи з темою \"Класи. Об'єктна модель документа (DOM). Події. Об'єкт події. Делегування подій. Throttle. Модульність коду\" були здобуті важливі практичні навички роботи з JavaScript. Зокрема, вивчення об'єктів, методів об'єктів та використання callback- і стрілочних функцій значно розширило розуміння асинхронної обробки даних.\n" +
            "\n" +
            "Освоєння маніпуляцій з елементами DOM дозволило динамічно змінювати веб-сторінки, а робота з подіями і об'єктом події надала можливість ефективно реагувати на дії користувачів. Використання делегування подій і техніки throttle покращило продуктивність програм, а модульний підхід забезпечив підтримуваність і масштабованість коду.\n" +
            "\n" +
            "Загалом, ці навички є ключовими для створення якісних і ефективних веб-додатків, що робить їх незамінними для сучасних веб-розробників.</p><br>";
    });


    Btn6.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab6/15.png'><br>" +
            "<img src='../img/lab6/16.png'><br>" +
            "<img src='../img/lab6/17.png'><br>" +
            "<img src='../img/lab6/18.png'><br>" +
            "<img src='../img/lab6/19.png'><br>" +
            "<img src='../img/lab6/20.png'><br>";
    });




    Btn7.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab6/21.png'><br>" +
            "<img src='../img/lab6/22.png'><br>" +
            "<img src='../img/lab6/23.png'><br>" +
            "<img src='../img/lab6/24.png'><br>" +
            "<img src='../img/lab6/25.png'><br>" +
            "<img src='../img/lab6/26.png'><br>";
    });

    Btn8.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<img src='../img/lab6/27.png'><br>" +
            "<img src='../img/lab6/28.png'><br>" +
            "<img src='../img/lab6/29.png'><br>" +
            "<img src='../img/lab6/30.png'><br>" +
            "<img src='../img/lab6/31.png'><br>" +
            "<img src='../img/lab6/32.png'><br>"+
            "<img src='../img/lab6/33.png'><br>" +
            "<img src='../img/lab6/34.png'><br>";
    });


});