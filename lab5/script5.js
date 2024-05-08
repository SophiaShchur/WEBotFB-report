document.addEventListener('DOMContentLoaded', function() {

    const Btn1 = document.getElementById('theme');
    const Btn2 = document.getElementById('task1');
    const Btn3 = document.getElementById('task2');
    const Btn4 = document.getElementById('task3');
    const Btn5 = document.getElementById('result');


    const infoBlock = document.querySelector('.info-block');


    Btn2.addEventListener('click', function() {
        infoBlock.innerHTML =
            "<p>1.Створити одновимірний масив, кількість елементів якого задана користувачем. Знайти максимальний серед парних елементів та мінімальний серед елементів з парними індексами. В масиві поміняти місцями знайдені максимальний та мінімальний елементи, надрукувати вхідний та вихідний масиви.\n" +
            "2. Виконати сортування вихідного масиву за зростанням методом вставки.\n" +
            "Застосувати функції</p>" +
            "<img src='../img/lab5/1.png'><br>" +
            "<img src='../img/lab5/2.png'><br>" +
            "<img src='../img/lab5/3.png'><br>" +
            "<img src='../img/lab5/4.png'><br>";
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
            "<img src='../img/lab5/11.png'><br>";
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
});