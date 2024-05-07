function validateForm(event) {

    var form = document.getElementById("registrationForm");

    form.addEventListener("submit", validateForm);

    function validateForm(event) {
        event.preventDefault();
        // Отримуємо значення полів форми
        var email = document.getElementById("email").value;
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var birthdate = document.getElementById("birthdate").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        var integerInput = document.getElementById("integerInput").value;

        // Виконуємо валідацію
        if (!email || !firstName || !lastName || !birthdate || !password || !confirmPassword) {
            alert("Будь ласка, заповніть всі обов'язкові поля.");
            return;
        }

        // Перевірка паролів на співпадіння
        if (password !== confirmPassword) {
            alert("Паролі не співпадають.");
            return;
        }

        // Перевірка дати народження на правильний формат (DD.MM.YYYY)
        var dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
        if (!dateRegex.test(birthdate)) {
            alert("Невірний формат дати. Використовуйте формат DD.MM.YYYY.");
            return;
        }

        // Перевірка на ціле дійсне число, якщо введено
        if (integerInput && (isNaN(parseFloat(integerInput)) || !Number.isInteger(parseFloat(integerInput)))) {
            alert("Будь ласка, введіть ціле дійсне число.");
            return;
        }


        alert("Форма відправлена успішно!");

    }
}
