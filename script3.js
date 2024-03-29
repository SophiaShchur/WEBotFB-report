document.addEventListener('DOMContentLoaded', function() {

    const Btn1 = document.getElementById('but1');
    const Btn2 = document.getElementById('but2');
    const Btn3 = document.getElementById('but3');
    const Btn4 = document.getElementById('but4');
    const Btn5 = document.getElementById('but5');
    const Btn6 = document.getElementById('but6');
    const Btn7 = document.getElementById('but7');
    const Btn8 = document.getElementById('but8');
    const Btn9 = document.getElementById('but9');
    const Btn10 = document.getElementById('but10');
    const Btn11 = document.getElementById('but11');
    const Btn12 = document.getElementById('but12');

    const infoBlock = document.querySelector('.info-block');


    Btn2.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab3/1.png'><br>" +
            "<img src='img/lab3/2.png'><br>" +
            "<img src='img/lab3/3.png'><br>" +
            "<img src='img/lab3/4.png'><br>" +
            "<img src='img/lab3/5.png'><br>";
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
        infoBlock.innerHTML = "<img src='img/lab3/6.png'><br>"  +
            "<img src='img/lab3/7.png'><br>" +
            "<img src='img/lab3/8.png'><br>" +
            "<a href='lab3_21.html'>Таблична фіксована</a><br>";
    });
    Btn5.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab3/9.png'><br>"  +
            "<img src='img/lab3/10.png'><br>" +
            "<img src='img/lab3/11.png'><br>" +
            "<img src='img/lab3/12.png'><br>" +
            "<a href='lab3_22.html'>Таблична гумова</a><br>";
    });

    classBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab2/footer.jpg'><br>"  +
            "<img src='img/lab2/lab2_5.jpg'><br>";
    });
    idBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab2/footer.jpg'><br>"  +
            "<img src='img/lab2/lab2_6.jpg'><br>";
    });

    ectBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab2/h1+h2.jpg'><br>"  +
            "<img src='img/lab2/lab2_7.jpg'><br>" +
            "<img src='img/lab2/header.jpg'><br>" +
            "<img src='img/lab2/lab2_8.jpg'><br>"+
            "<img src='img/lab2/input.jpg'><br>" +
            "<img src='img/lab2/lab2_9.jpg'><br>"+
            "<img src='img/lab2/popfilm.jpg'><br>" +
            "<img src='img/lab2/lab2_10.jpg'><br>" ;
    });
    cssBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab2/lab2_11.jpg'><br>"  +
            "<img src='img/lab2/input.jpg'><br>" +
            "<img src='img/lab2/lab2_12.jpg'><br>" +
            "<img src='img/lab1_6.jpg'><br>"+
            "<img src='img/lab2/lab2_13.jpg'><br>" +
            "<img src='img/lab2/nav.jpg'><br>"+
            "<img src='img/lab2/lab2_14.jpg'><br>" ;
    });


    resultBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<h1>Висновки</h1>" +
            "<p>Під час нашої роботи ми вивчили, як використовувати CSS для стилізації веб-сторінок." +
            " Зрозуміли, як точно вибирати та оформлювати елементи HTML за допомогою селекторів та " +
            "ідентифікаторів. Отримали досвід у встановленні різних кольорів, фонів та відступів, " +
            "а також працювали з текстом, надаючи йому привабливий вигляд. Це надає нам можливість " +
            "створювати більш привабливі та користувацьки-орієнтовані веб-сторінки.</p><br>";
    });
});