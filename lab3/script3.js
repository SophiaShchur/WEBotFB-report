document.addEventListener('DOMContentLoaded', function() {

    const Btn1 = document.getElementById('but1');
    const Btn2 = document.getElementById('but2');
    const Btn4 = document.getElementById('but4');
    const Btn5 = document.getElementById('but5');
    const Btn6 = document.getElementById('but6');
    const Btn7 = document.getElementById('but7');
    const Btn9 = document.getElementById('but9');
    const Btn10 = document.getElementById('but10');
    const Btn11 = document.getElementById('but11');
    const Btn12 = document.getElementById('but12');

    const infoBlock = document.querySelector('.info-block');


    Btn2.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='../img/lab3/1.png'><br>" +
            "<img src='../img/lab3/2.png'><br>" +
            "<img src='../img/lab3/3.png'><br>" +
            "<img src='../img/lab3/4.png'><br>" +
            "<img src='../img/lab3/5.png'><br>";
    });

    Btn1.addEventListener('click', function() {
        infoBlock.innerHTML = "<h3>Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА\n" +
            "ЗАСОБАМИ CSS та FLEXBOX</h3>" +
            "<p>Мета:\n" +
            "⎯ придбати практичні навички роботи верстки сторінок засобами CSS, верстки на\n" +
            "основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-\n" +
            "сторінок\n" +
            "⎯ придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX</p>" +
            "<a href='https://github.com/SophiaShchur/Cinema-WEB-site.git'>Github Cinema-WEB-site</a><br>" +
            "<a href='https://github.com/SophiaShchur/WEBotFB-report.git'>Github Звіт</a>";
    });

    Btn4.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='../img/lab3/6.png'><br>"  +
            "<img src='../img/lab3/7.png'><br>" +
            "<img src='../img/lab3/8.png'><br>" +
            "<a href='lab3_21.html'>Таблична фіксована</a><br>";
    });
    Btn5.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='../img/lab3/9.png'><br>"  +
            "<img src='../img/lab3/10.png'><br>" +
            "<img src='../img/lab3/11.png'><br>" +
            "<img src='../img/lab3/12.png'><br>" +
            "<a href='lab3_22.html'>Таблична гумова</a><br>";
    });
    Btn6.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='../img/lab3/13.png'><br>"  +
            "<img src='../img/lab3/14.png'><br>" +
            "<img src='../img/lab3/15.png'><br>" +
            "<img src='../img/lab3/16.png'><br>" +
            "<a href='lab3_23.html'>Блокова фіксована</a><br>";
    });
    Btn7.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='../img/lab3/17.png'><br>"  +
            "<img src='../img/lab3/18.png'><br>" +
            "<img src='../img/lab3/19.png'><br>" +
            "<img src='../img/lab3/20.png'><br>" +
            "<img src='../img/lab3/21.png'><br>" +
            "<a href='lab3_24.html'>Блокова гумова</a><br>";
    });
    Btn9.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='../img/lab3/22.png'><br>"  +
            "<a href='lab3_3.html'>Посилання на сторінку</a><br>";
    });

    Btn10.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='../img/lab3/23.png'><br>"  +
            "<img src='../img/lab3/24.png'><br>";
    });
    Btn11.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='../img/lab3/24.png'><br>"  +
            "<img src='../img/lab3/25.png'><br>";
    });
    Btn12.addEventListener('click', function() {
        infoBlock.innerHTML = "<h1>Висновки</h1>" +
            "<p>\n" +
            "Під час виконання даної роботи я отримала досвід роботи з версткою веб-сторінок за допомогою HTML та CSS, використовуючи методи блокової верстки та гнучкий механізм Flexbox.\n<br>" +
            "Переваги створення веб-додатків за допомогою таблиць:\n<br>" +
            "Простота використання: таблиці можуть бути досить простим інструментом для верстки, особливо для статичних сторінок.\n<br>" +
            "Зручність для невеликих додатків: у випадках, коли макет веб-сторінки не потребує складної структури, таблиці можуть бути досить зручними.\n<br>" +
            "Недоліки створення веб-додатків за допомогою таблиць:\n<br>" +
            "Складність адаптивності: використання таблиць може ускладнювати адаптивність веб-додатку для різних пристроїв та розмірів екранів.\n<br>" +
            "Проблеми доступності: таблиці можуть ускладнювати читання та навігацію для користувачів, особливо якщо вони використовують асистивні технології.\n<br>" +
            "Переваги створення веб-додатків за допомогою блоків (плаваючих блоків):\n<br>" +
            "Гнучкість у верстці: з використанням блоків можна створювати складні та гнучкі макети, що легко адаптуються до різних екранів та розмірів пристроїв.\n<br>" +
            "Краща адаптивність: блокова верстка дозволяє з легкістю реагувати на зміни розмірів екрану, забезпечуючи кращу адаптивність веб-додатку.\n<br>" +
            "Недоліки створення веб-додатків за допомогою блоків (плаваючих блоків):\n<br>" +
            "Складність в управлінні: при створенні складних макетів блокова верстка може вимагати більше часу та зусиль для управління.\n<br>" +
            "Необхідність досвіду: щоб ефективно використовувати блокову верстку, потрібен певний рівень досвіду та розуміння CSS та HTML.\n<br>" +
            "Отже, обираючи між таблицями та блоковою версткою, важливо враховувати конкретні потреби та характеристики веб-додатку, щоб вибрати найбільш підходящий метод для кожного випадку.</p><br>";
    });
});