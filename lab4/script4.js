document.addEventListener('DOMContentLoaded', function() {

    const Btn1 = document.getElementById('theme');
    const Btn2 = document.getElementById('desktop');
    const Btn3 = document.getElementById('plate');
    const Btn4 = document.getElementById('phone');
    const Btn5 = document.getElementById('result');


    const infoBlock = document.querySelector('.info-block');


    Btn2.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab3/2.png'><br>" +
            "<img src='img/lab3/3.png'><br>" +
            "<img src='img/lab3/4.png'><br>" +
            "<img src='img/lab3/5.png'><br>" +
            "<img src='img/lab4/1.png'><br>" +
            "<img src='img/lab4/2.png'><br>" +
            "<img src='img/lab4/3.png'><br>" +
            "<img src='img/lab4/4.png'><br>" +
            "<img src='img/lab4/5.png'><br>" +
            "<img src='img/lab4/6.png'><br>" +
            "<img src='img/lab4/7.png'><br>" +
            "<img src='img/lab4/8.png'><br>" +
            "<img src='img/lab4/9.png'><br>" +
            "<img src='img/lab4/10.png'><br>";
    });

    Btn1.addEventListener('click', function() {
        infoBlock.innerHTML = "<h3>АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.</h3>" +
            "<p>Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First. </p>" +
            "<a href='https://github.com/SophiaShchur/Cinema-WEB-site.git'>Github Cinema-WEB-site</a><br>" +
            "<a href='https://github.com/SophiaShchur/WEBotFB-report.git'>Github Звіт</a>";
    });

    Btn3.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab3/2.png'><br>" +
            "<img src='img/lab3/3.png'><br>" +
            "<img src='img/lab3/4.png'><br>" +
            "<img src='img/lab3/5.png'><br>" +
            "<img src='img/lab4/11.png'><br>" +
            "<img src='img/lab4/12.png'><br>" +
            "<img src='img/lab4/13.png'><br>" +
            "<img src='img/lab4/14.png'><br>" +
            "<img src='img/lab4/15.png'><br>" +
            "<img src='img/lab4/16.png'><br>" +
            "<img src='img/lab4/17.png'><br>" +
            "<img src='img/lab4/18.png'><br>" +
            "<img src='img/lab4/19.png'><br>";
    });
    Btn4.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab3/2.png'><br>" +
            "<img src='img/lab3/3.png'><br>" +
            "<img src='img/lab3/4.png'><br>" +
            "<img src='img/lab3/5.png'><br>" +
            "<img src='img/lab4/20.png'><br>" +
            "<img src='img/lab4/21.png'><br>" +
            "<img src='img/lab4/22.png'><br>" +
            "<img src='img/lab4/23.png'><br>" +
            "<img src='img/lab4/24.png'><br>" +
            "<img src='img/lab4/25.png'><br>" +
            "<img src='img/lab4/26.png'><br>";
    });

    Btn5.addEventListener('click', function() {
        infoBlock.innerHTML = "<h1>Висновки</h1>" +
            "<p>У ході виконання цієї роботи ми досліджували та впроваджували концепції адаптивної верстки," +
            " використовуючи медіа-запити, медіа-типи, медіа-функції, а також метатег viewport. Наша стратегія" +
            " базувалася на принципі \"Mobile First\", що передбачає розробку сайту спочатку для мобільних пристроїв," +
            " а потім для більш розширених пристроїв.\n" +
            "\n" +
            "У звітному HTML-документі ми надали пояснення щодо створення десктопної, планшетної та мобільної версій сайту. " +
            "Для цього ми використали різні медіа-запити, які залежали від ширини екрану пристрою. Наприклад, для десктопної" +
            " версії ми встановлювали ширину контейнера і розміщували контент і бокову панель поруч один з одним. " +
            "У планшетній версії ми змінювали максимальну ширину контейнера та розміщували контент і бокову панель " +
            "на всю доступну ширину екрану. А в мобільній версії ми змінювали спосіб відображення контенту, щоб він " +
            "був легко читабельним на вузьких екранах.\n" +
            "\n" +
            "Ця робота дозволила нам створити відзивчивий та користувацьки-орієнтований дизайн, який працює ефективно " +
            "на різних пристроях і забезпечує зручний досвід для користувачів незалежно від їхнього пристрою.</p><br>";
    });
});