document.addEventListener('DOMContentLoaded', function() {

    const connBtn = document.getElementById('connect');
    const textBtn = document.getElementById('theme');
    const tegBtn = document.getElementById('teg');
    const classBtn = document.getElementById('class');
    const idBtn = document.getElementById('id');
    const ectBtn = document.getElementById('ect');
    const cssBtn = document.getElementById('css');
    const resultBtn = document.getElementById('result');

    const infoBlock = document.querySelector('.info-block');


    connBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab2/lab2_1.jpg'><br>" +
            "<img src='img/lab2/lab2_2.jpg'><br>";
    });

    textBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<h3>Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ" +
            "ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</h3>" +
            "<p>Мета: придбати практичні навички роботи з селекторами, ідентифікаторами,\n" +
            "списками, різноманітними властивостями кольору і фону, зовнішними та\n" +
            "внутрішними відступами, плаваючими елементами, оформленням текстових\n" +
            "елементів</p>" +
            "<a href='https://github.com/SophiaShchur/Cinema-WEB-site.git'>Github Cinema-WEB-site</a><br>" +
            "<a href='https://github.com/SophiaShchur/WEBotFB-report.git'>Github Звіт</a>";
    });

    tegBtn.addEventListener('click', function() {
        infoBlock.innerHTML = "<img src='img/lab2/header.jpg'><br>"  +
            "<img src='img/lab2/lab2_3.jpg'><br>" +
            "<img src='img/lab2/input.jpg'><br>" +
            "<img src='img/lab2/lab2_4.jpg'><br>";
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